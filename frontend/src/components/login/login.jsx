import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password})
      });
      
      const json = await response.json();
      if(!json.success){
        alert("Enter valid Credentials")
      }
      if(json.success){
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      alert("Enter valid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div id='login-page'>
      <form id='form' onSubmit={handleSubmit}>
        <h1>LOGIN ACCOUNT</h1>
        <input type="email" name='email' placeholder="Enter your Email" value={credentials.email} onChange={onChange} /><br />
        <input type="password" name='password' placeholder='Enter your Password' value={credentials.password} onChange={onChange} /><br />
        <button type='submit'>Submit</button><br />
        <Link to="/signup">New user?</Link>
      </form>
    </div>
  );
};

export default Login;
