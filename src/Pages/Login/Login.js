import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // form validation
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username.trim() && password.trim()) {
      window.location = '/Home';
    }

    if (username === '' || password === '') {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="login">
      <form className="form">
        <h2>Welcome Back</h2>
        <div className="form-group">
          <label htmlFor="username" className="label">
            <AiOutlineUser />
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            <RiLockPasswordFill />
          </label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn submit-btn" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
