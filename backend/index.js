const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || '8t2f01e9y81j2a6d28b68ad9cdcf89a38y4e7a1461f0e4s8b073i2827dd2f1e3f';
const DB = process.env.DB;
const PORT = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: DB,
  ssl: {
    rejectUnauthorized: false,
  },
});
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Auth Header:", authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded; // Add user info to req object
    next();
  } catch (err) {
    console.error("JWT Error:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};
app.get("/getdata", authenticate,async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM samplejson;");
    res.json(result.rows);
  } catch (err) {
    console.error("Query Error:", err);
    res.status(500).send("Database query failed");
  }
});

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const user = result.rows[0];

//     if (user.password !== password) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     res.json({
//       message: 'Login successful',  
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result.rows[0];
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET, { expiresIn: '1h' });

    res.json({
      message: 'Login successful',
      token,  
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
