import React, { useEffect } from 'react';
import { useCart } from '../CartContext'; 
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart,loading,fetchCart } = useCart();
  const navigate=useNavigate();

  useEffect(()=>{
    fetchCart()
  },[])

  if(loading){
    return <div>Loading...</div>
  }
  if (!Array.isArray(cart)) {
    console.error('cart is not an array:', cart);
    return <p>There was an error loading your cart.</p>;
  }

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border-b py-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Total Price: ${totalPrice}</h2>
            <button
              onClick={() => navigate('/payment')}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
