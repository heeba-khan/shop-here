import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-red-800 text-center mb-8">
          Shop Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 transition duration-300 transform hover:scale-105 flex flex-col justify-between h-full"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    {product.title}
                  </h2>
                </Link>
                <p className="text-gray-500 mb-4">${product.price}</p>
                <button
                  onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto w-full"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
