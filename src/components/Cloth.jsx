import React, { useState, useEffect, useContext } from 'react';
import { cloths } from './Data';
import { CartContext } from './CartContext'; // Assuming CartContext is set up

const Cloth = () => {
  const [clothsData, setClothsData] = useState([]);
  const { addToCart } = useContext(CartContext); // Use cart context to add items to cart
  const [addedItems, setAddedItems] = useState([]); // Track which items have been added

  useEffect(() => {
    const fetchData = async () => {
      setClothsData(cloths);
    };
    fetchData();
  }, []);

  const handleAddToCart = (cloth) => {
    addToCart(cloth); // Add cloth to cart
    setAddedItems((prev) => [...prev, cloth.id]); // Mark this cloth as added
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto">
      <h1 className="text-center font-mono font-bold text-4xl my-4">Cloth</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothsData.map((cloth) => (
          <div
            key={cloth.id}
            className="card flex flex-col justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                className="w-[80%] max-h-[150px] object-contain"
                src={cloth.image}
                alt={cloth.title}
              />
            </div>
            <div className="h-[40%] text-center">
              <h2 className="text-lg font-medium">{cloth.title}</h2>
              <p className="text-gray-700 font-semibold">${cloth.price}</p>
              <button
                onClick={() => handleAddToCart(cloth)}
                disabled={addedItems.includes(cloth.id)} // Disable if already added
                className={`mt-2 w-full rounded-lg px-4 py-2 font-bold transition-all ${
                  addedItems.includes(cloth.id)
                    ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedItems.includes(cloth.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cloth;
