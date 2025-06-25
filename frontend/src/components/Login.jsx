import React from 'react'
import '../App.css'
import mail from '../assets/mail.svg'
import lock from '../assets/Lock.svg'


const Login = () => {




    
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
            <input type="text" placeholder="Email Id" />
          </div>    
          <div className="input-container">
            <span className="icon"><img src={lock} alt="lock" width={15} /></span>
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-btn">Login</button>
          <p className="forgot-text">Forgot Username / Password?</p>
        </div>
      </div>
    </div>
      )
}

export default Login