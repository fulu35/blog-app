import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  axios  from 'axios';

const Register = () => {
  
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res);
      navigate("/login")
    } catch (error) {
      setErr(error.response.data);
    }
  }
  
  return (
    <div className="auth">
    <h1>Register</h1>
    <form>
      <input type="text" name="username" id="username" onChange={handleChange} required/>
      <input type="email" name="email" id="email" onChange={handleChange} required/>
      <input type="password" name="password" id="password" onChange={handleChange} required/>
        <button onClick={ handleSubmit}>Register</button>
      {err && <p>{err}</p>}
      <span>Do you have an account</span> <Link to="/login">Login</Link>
    </form>
  </div>
  )
}

export default Register