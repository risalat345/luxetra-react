import React, { useState, useEffect, useContext } from 'react';
import { sofas } from './Data';
import { CartContext } from './CartContext';

const Sofa = () => {
  const [sofasData, setSofasData] = useState([]);
  const { addToCart } = useContext(CartContext);

  // State to track added items
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setSofasData(sofas);
    };
    fetchData();
  }, []);

  const handleAddToCart = (sofa) => {
    addToCart(sofa);
    setAddedItems((prev) => [...prev, sofa.id]); // Mark the item as added
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto">
      <h1 className="text-center font-mono font-bold text-4xl my-4">Sofa</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sofasData.map((sofa) => (
          <div
            key={sofa.id}
            className="card flex flex-col justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                className="w-[80%] max-h-[150px] object-contain"
                src={sofa.image}
                alt={sofa.title}
              />
            </div>
            <div className="h-[40%] text-center">
              <h2 className="text-lg font-medium">{sofa.title}</h2>
              <p className="text-gray-700 font-semibold">${sofa.price}</p>
              <button
                onClick={() => handleAddToCart(sofa)}
                disabled={addedItems.includes(sofa.id)}
                className={`mt-2 w-full rounded-lg px-4 py-2 font-bold transition-all ${
                  addedItems.includes(sofa.id)
                    ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedItems.includes(sofa.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sofa;
