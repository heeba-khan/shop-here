import  { createContext, useContext, useState ,useEffect} from 'react';
// import { useLocalStorage } from '@uidotdev/usehooks';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useLocalStorage("cart",[]);
  // const [userId,setUserId]=useState(null);
  const [cart, setCart] = useState([]);
  const [loading,setLoading]=useState(false);
  const [totalCart,setTotalCart]=useState(0)

  // useEffect(()=>{
  //   if(userId){
  //     fetch(`/api/cart?userId=${userId}`)
  //     .then((res)=>res.json())
  //     .then((data)=>setCart(data.cartItems||[]))
  //     .catch((err)=>console.error("Error fetching cart :",err))
  //   }
  // },[userId])

  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/auth/get-cart`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCart(data.cartItems || []); 
        setLoading(false)
      } else {
        throw new Error('Failed to fetch cart details.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error fetching cart:', error);
    }
  };

  const addToCart = async(product) => {
    // setCart((prevCart) => [...prevCart, product]);
    const updatedCart=[...cart,product]
    setCart(updatedCart)

    setLoading(true);

    try{
      const response=await fetch(`${apiUrl}/api/auth/add-cart`,{
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({cartItems:updatedCart})
      })
      if(response.ok){
        const data=await response.json();
        setTotalCart(data.total||0)
        setLoading(false)
      }else{
        throw new Error("Failed to add an item to cart/")
      }
    }catch(error){
      setLoading(false)
      console.error(error)
    }
  };

  // const removeFromCart = (productId) => {
  //   // setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  //   const updatedCart=cart.filter((item=>item.id!==productId))
  //   setCart(updatedCart)

  //   fetch(`/api/cart`,{
  //     method:'POST',
  //     headers:{ 'Content-Type': 'application/json' },
  //     body:JSON.stringify({userId,cartItems:updatedCart})
  //   }).catch((err)=>console.error("Error removing from the cart :",err))

  // };

  // const clearCart = () => {
  //   setCart([]);

  //   fetch(`/api/cart`,{
  //     method:'POST',
  //     headers:{ 'Content-Type': 'application/json' },
  //     body:JSON.stringify({userId,cartItems:[]})
  //   }).catch((err)=>console.error("Error clearing the cart :",err))
  // };

  return (
    <CartContext.Provider value={{ cart, addToCart, fetchCart,loading,totalCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart Context
export const useCart = () => {
  return useContext(CartContext);
};
