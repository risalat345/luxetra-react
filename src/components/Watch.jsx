import React, { useState, useEffect, useContext } from 'react';
import { watchs } from './Data';
import { CartContext } from './CartContext';

const Watch = () => {
  const [watchsData, setWatchsData] = useState([]);
  const { addToCart } = useContext(CartContext);

  // State to track added items
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setWatchsData(watchs);
    };
    fetchData();
  }, []);

  const handleAddToCart = (watch) => {
    addToCart(watch);
    setAddedItems((prev) => [...prev, watch.id]); // Mark the item as added
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto">
      <h1 className="text-center font-mono font-bold text-4xl my-4">Watches</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {watchsData.map((watch) => (
          <div
            key={watch.id}
            className="card flex flex-col justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                className="w-[80%] max-h-[150px] object-contain"
                src={watch.image}
                alt={watch.title}
              />
            </div>
            <div className="h-[40%] text-center">
              <h2 className="text-lg font-medium">{watch.title}</h2>
              <p className="text-gray-700 font-semibold">${watch.price}</p>
              <button
                onClick={() => handleAddToCart(watch)}
                disabled={addedItems.includes(watch.id)}
                className={`mt-2 w-full rounded-lg px-4 py-2 font-bold transition-all ${
                  addedItems.includes(watch.id)
                    ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedItems.includes(watch.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;
