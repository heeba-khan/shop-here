import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const {fetchCart}=useCart()
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  // console.log(apiUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      
    if(response.ok){
        const data = await response.json();
        console.log('Response Data: ',data);
        
        if (data.token) {
            console.log('Token recieved: ',data.token);
            localStorage.setItem('token', data.token);
            console.log('Token saved in localStorage:', localStorage.getItem('token'));
            // setUserId(data.userId)
            // setUser(data); // Set the logged-in user in the app's state
            await fetchCart()
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
