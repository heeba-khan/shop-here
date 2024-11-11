// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(apiUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        },
        body: JSON.stringify({ email, password }),
      });

    if(response.ok){
        const data = await response.json();
        console.log('Response Data: ',data);
        
        if (data.token) {
            console.log('Token recieved: ',data.token);
            localStorage.setItem('token', data.token);
            // setUser(data); // Set the logged-in user in the app's state
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
      {/* <h2>Login</h2> */}
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
        <p>Don't have an account?<Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
