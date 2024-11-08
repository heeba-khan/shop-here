// import { StrictMode,useState,useEffect } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// // import { RouterProvider ,createBrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home.jsx'
// import Product from './components/Product.jsx'
// import Cart from './components/Cart.jsx'
// import Payment from './components/Payment.jsx'
// import './index.css';
// import Login from './components/Login.jsx'
// import Register from './components/Register.jsx'
// import { CartProvider } from './CartContext.jsx'

// const Main = () => {
//     const [user, setUser] = useState(null); 

//     useEffect(() => {
//         // Check if user info is stored in localStorage
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     return (
//         <Router>
//           <App user={user} setUser={setUser}>
//             <Routes>
//                 <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
//                 <Route path="/product/:id" element={<Product />} />
//                 <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
//                 <Route path="/payment" element={user ? <Payment /> : <Navigate to="/login" />} />
//                 <Route path="/login" element={user?<Navigate to='/'/>:<Login setUser={setUser} />} />
//                 <Route path="/register" element={<Register setUser={setUser} />} />
//             </Routes>
//           </App>
//         </Router>
//     );
// };

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <CartProvider>
//             <Main />
//         </CartProvider>
//     </StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);