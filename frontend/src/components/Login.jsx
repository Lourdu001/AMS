import React, { useState } from 'react';
import '../App.css';
import mail from '../assets/mail.svg';
import lock from '../assets/Lock.svg';
import axios from 'axios';

const Login = ({move}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const BaseUrl = 'https://amsserver.onrender.com';

const loginfunction = () =>{
  if(email&&password){
    handleLogin();
  }else if(!email&&password){
setError('Enter gmail id');
  }else if(email&&!password){
    setError('Enter password');
  }else{
    setError('Enter gmail and password');
  }
}


  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BaseUrl}/login`, {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);

      setResponse(res.data);
      setError('');
      move(); 
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      setResponse(null);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="avatar-section">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" className="avatar" />
        </div>
        <div className="form-section">
          <h2>User Login</h2>
          <div className="input-container">
            <span className="icon"><img src={mail} alt="mail" width={18} height={18} /></span>
            <input
              type="text"
              placeholder="Email Id"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-container">
            <span className="icon"><img src={lock} alt="lock" width={15} /></span>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="login-btn" onClick={loginfunction}>Login</button>
          {response && <pre>{JSON.stringify(response.user, null, 2)}</pre>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className="forgot-text forgotstyle">Forgot Username / Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
