// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

    if(response.ok){
        const data = await response.json();
        console.log('Response Data: ',data);
        
        if (data.token) {
            console.log('Token recieved: ',data.token);
            localStorage.setItem('token', data.token);
            setUser(data); // Set the logged-in user in the app's state
            console.log('Navigating to home');
            navigate('/'); 
        } else {
            setError('Invalid login credentials');
        }
    }else{
        setError('Login Failed.Please try again.')
    }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
        <p>Don't have an account?<a href='/register'>Register</a></p>
      </form>
    </div>
  );
};

export default Login;
