const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const DB = process.env.DB;
const PORT = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: DB,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/getdata", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM samplejson;");
    res.json(result.rows);
  } catch (err) {
    console.error("Query Error:", err);
    res.status(500).send("Database query failed");
  }
});

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

    res.json({
      message: 'Login successful',  
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
