import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()
  const [credentials,Setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response =await fetch("http://localhost:5000/api/createuser",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //save the auth toke to local storage and redirect
      localStorage.setItem('authToken', json.authToken)
      navigate("/")

    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    Setcredentials({...credentials,[e.target.name]:e.target.value})
  }

  return (
    <div id='SignUp-Page'>
      
      <form id='form' onSubmit={handleSubmit}>
        <h1>CREATE ACCOUNT</h1>
        {/* <label>name</label> */}
        <input type="text" name='name' placeholder='Enter Name' value={credentials.name} onChange={onChange}/><br />
        {/* <label>email</label> */}
        <input type="email" name='email' placeholder='Enter Email' value={credentials.email} onChange={onChange}/><br />
        {/* <label>password</label> */}
        <input type="password" name='password' placeholder='Enter Password' value={credentials.password} onChange={onChange}/><br />
        {/* <label>address</label> */}
        <input type="location" name='geolocation' placeholder='Enter your Location' value={credentials.geolocation} onChange={onChange}/><br />
        <button type='submit'>submit</button>
      <Link to="/login">already a user</Link>
      </form>
    </div>
  )
}

export default SignUp