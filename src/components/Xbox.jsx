import React, { useState, useEffect, useContext } from 'react';
import { xboxs } from './Data';
import { CartContext } from './CartContext'; // Global cart context

const Xboxs = () => {
  const [xboxsData, setXboxsData] = useState([]);
  const { addToCart } = useContext(CartContext); // Use the cart context
  const [addedItems, setAddedItems] = useState([]); // Track added items

  useEffect(() => {
    const fetchData = async () => {
      setXboxsData(xboxs);
    };
    fetchData();
  }, []);

  const handleAddToCart = (xbox) => {
    addToCart(xbox); // Add to global cart
    setAddedItems((prev) => [...prev, xbox.id]); // Mark item as added
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto mt-14">
      <h1 className="text-center font-mono font-bold text-4xl my-4">Xbox</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {xboxsData.map((xbox) => (
          <div
            key={xbox.id}
            className="card flex flex-col justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                className="w-[80%] max-h-[150px] object-contain"
                src={xbox.image}
                alt={xbox.title}
              />
            </div>
            <div className="h-[40%] text-center">
              <h2 className="text-lg font-medium">{xbox.title}</h2>
              <p className="text-gray-700 font-semibold">${xbox.price}</p>
              <button
                onClick={() => handleAddToCart(xbox)}
                disabled={addedItems.includes(xbox.id)}
                className={`mt-2 w-full rounded-lg px-4 py-2 font-bold transition-all ${
                  addedItems.includes(xbox.id)
                    ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedItems.includes(xbox.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Xboxs;
