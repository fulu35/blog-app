import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (error) {
      setErr(error.response.data);
    }
  }

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
      <input type="text" name="username" id="username" onChange={handleChange} required/>
      <input type="password" name="password" id="password" onChange={handleChange} required/>
        <button onClick={ handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have an account</span> <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login