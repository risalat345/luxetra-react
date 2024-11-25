import React, { useState, useEffect, useContext } from 'react';
import { headphones } from './Data';
import { CartContext } from './CartContext'; // Global cart context

const Headphone = () => {
  const [headphonesData, setHeadphonesData] = useState([]);
  const { addToCart } = useContext(CartContext);

  // State to track items added to the cart
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setHeadphonesData(headphones);
    };
    fetchData();
  }, []);

  const handleAddToCart = (headphone) => {
    addToCart(headphone); // Add item to global cart
    setAddedItems((prev) => [...prev, headphone.id]); // Mark item as added
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto mt-16">
      <h1 className="text-center font-mono font-bold text-4xl my-4">Headphones</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {headphonesData.map((headphone) => (
          <div
            key={headphone.id}
            className="card flex flex-col justify-between items-center border border-black rounded-lg p-10 shadow-md"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                className="w-[80%] max-h-[150px] object-contain"
                src={headphone.image}
                alt={headphone.title}
              />
            </div>
            <div className="h-[40%] text-center">
              <h2 className="text-lg font-medium">{headphone.title}</h2>
              <p className="text-gray-700 font-semibold">${headphone.price}</p>
              <button
                onClick={() => handleAddToCart(headphone)}
                disabled={addedItems.includes(headphone.id)}
                className={`mt-2 w-full rounded-lg px-4 py-2 font-bold transition-all ${
                  addedItems.includes(headphone.id)
                    ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedItems.includes(headphone.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headphone;
