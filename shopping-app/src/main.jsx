import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import Cart from './components/Cart.jsx'
import Payment from './components/Payment.jsx'
import './index.css';
import { CartProvider } from './CartContext.jsx'

const router=createBrowserRouter([
  {
    path: "/", 
    element: <Home />,
  },
  {
    path: "/product/:id", 
    element: <Product />,
  },
  {
    path: "/cart", 
    element: <Cart />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
