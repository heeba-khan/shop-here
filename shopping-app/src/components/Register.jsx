
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  // console.log(apiUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if(response.ok){
        const data = await response.json();
        console.log("User Created:",data);
        navigate('/login')
      }else{
        throw new Error("Registration Failed.")
      }
      

      // if (data.token) {
      //   localStorage.setItem('token', data.token);
      //   setUser(data); // Set the newly registered user in the app's state
      //   navigate('/')
      // } else {
      //   setError('Registration failed');
      // }


    } catch (error) {
      console.error('Registration error:', error);
      setError('An error occurred during registration');
    }
  };
  
  return (
    <div>
      {/* <h2>Register</h2> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
