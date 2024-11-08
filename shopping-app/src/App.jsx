// import React, { useEffect, useState } from 'react';
// import {Link, Navigate, Outlet ,useLocation} from 'react-router-dom';
// import { useCart } from './CartContext';

// function App({user,setUser}) {
//   // const [user, setUser] = useState(null);
//   const { cart } = useCart();
//   const location=useLocation();

//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   if (token) {
//   //     console.log('Token Found: ', token);
//   //     setUser({ token,username:'User' }); // Assuming you want to set the token as the user info
//   //     console.log("User set from token: ",{token,username:'User'});
//   //   }else{
//   //     console.log('No token found.User not set.');

//   //   }
//   // }, [setUser]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     console.log('User logged out !!');

//   };

//   return (
//     <div>
//       <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
//         <h1 className="text-2xl">ShopHere</h1>
//         <nav>
//           {user ? (
//             <>
//               <span>Welcome, {user.username || 'User'}!</span>
//               <button onClick={handleLogout} className="ml-4">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to='/login' className="ml-4">Login</Link>
//               <Link to='/register' className="ml-4">Register</Link>
//             </>
//           )}
//           <Link to='/cart' className="ml-4">
//             Cart ({cart.length})
//           </Link>
//         </nav>
//       </header>

//       <main className="p-4">
//         {/* This is where the routed content will be injected */}
//         <Outlet />
//       </main>

//       <footer className="p-4 bg-gray-800 text-white text-center">
//         © 2024 ShopHere
//       </footer>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Protected from "./components/Protected";
import ProtectedLayout from "./components/ProtectedLayout";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
