import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useCart } from "../CartContext"; 

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate=useNavigate(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 flex flex-col h-full justify-between">
      <img src={product.image} alt={product.title} className="w-full h-72 object-contain mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
      <p className="text-lg text-gray-500 mb-4">${product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <button
        onClick={() => {
                addToCart(product);
                navigate('/cart');
              }
              } 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
