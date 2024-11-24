import React, { useState, useEffect, useContext } from "react";
import { products } from "./Data"; // Import the mock data
import { CartContext } from "./CartContext"; // Global cart context

function MobileProduct() {
  const [productData, setProductData] = useState([]);
  const { addToCart } = useContext(CartContext);

  // State to track items added to the cart
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      setProductData(products);
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Add the item to the cart globally
    setAddedItems((prev) => [...prev, product.id]); // Mark as added
  };

  return (
    <div className="mobileProduct mt-14 text-black w-[90%] max-w-[1200px] mx-auto">
      <h1 className="font-bold text-4xl text-center my-4 font-mono">
        Mobile Phones
      </h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product) => (
          <div
            key={product.id}
            className="card flex flex-col justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                className="w-[80%] max-h-[150px] object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="h-[40%] text-center">
              <h2 className="text-lg font-medium">{product.title}</h2>
              <p className="text-gray-700 font-semibold">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={addedItems.includes(product.id)}
                className={`mt-2 w-full rounded-lg px-4 py-2 font-bold transition-all ${
                  addedItems.includes(product.id)
                    ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {addedItems.includes(product.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileProduct;
