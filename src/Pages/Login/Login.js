import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // form validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      alert('Please fill out all fields');
    }
    console.log(username, password);
    if (username.trim() && password.trim()) {
      window.location = '/Home';
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
        <Link
          to="/home"
          type="submit"
          className="btn submit-btn"
          onClick={handleSubmit}
        >
          Login
        </Link>
      </form>
    </div>
  );
}

export default Login;
