import React, { useState, useEffect, useContext } from 'react';
import { bags } from './Data';
import { CartContext } from './CartContext'; // Global cart context

const Bags = () => {
  const [bagsData, setBagsData] = useState([]);
  const { addToCart } = useContext(CartContext);

  // State to track items added to the cart
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setBagsData(bags);
    };
    fetchData();
  }, []);

  const handleAddToCart = (bag) => {
    addToCart(bag); // Add the item to the global cart
    setAddedItems((prev) => [...prev, bag.id]); // Mark as added
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto">
      <h1 className="text-center font-mono font-bold text-4xl my-4">Bags</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bagsData.map((bag) => (
          <div
            key={bag.id}
            className="card flex flex-col justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                className="w-[80%] max-h-[150px] object-contain"
                src={bag.image}
                alt={bag.title}
              />
            </div>
            <div className="h-[40%] text-center">
              <h2 className="text-lg font-medium">{bag.title}</h2>
              <p className="text-gray-700 font-semibold">${bag.price}</p>
              <button
                onClick={() => handleAddToCart(bag)}
                disabled={addedItems.includes(bag.id)}
                className={`mt-2 w-full rounded-lg px-4 py-2 font-bold transition-all ${
                  addedItems.includes(bag.id)
                    ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedItems.includes(bag.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bags;
