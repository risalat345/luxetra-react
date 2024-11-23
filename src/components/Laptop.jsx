import React, { useState, useEffect, useContext } from 'react';
import { laptops } from './Data';
import { CartContext } from './CartContext'; // Global cart context

const Laptop = () => {
  const [laptopsData, setLaptopsData] = useState([]);
  const { addToCart } = useContext(CartContext); // Use the global cart context
  const [addedItems, setAddedItems] = useState([]); // Track added items

  useEffect(() => {
    const fetchData = async () => {
      setLaptopsData(laptops);
    };
    fetchData();
  }, []);

  const handleAddToCart = (laptop) => {
    addToCart(laptop); // Add laptop to global cart
    setAddedItems((prev) => [...prev, laptop.id]); // Mark as added
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto">
      <h1 className="text-center font-mono font-bold text-4xl my-4">Laptops</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {laptopsData.map((laptop) => (
          <div
            key={laptop.id}
            className="card flex flex-col justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                className="w-[80%] max-h-[150px] object-contain"
                src={laptop.image}
                alt={laptop.title}
              />
            </div>
            <div className="h-[40%] text-center">
              <h2 className="text-lg font-medium">{laptop.title}</h2>
              <p className="text-gray-700 font-semibold">${laptop.price}</p>
              <button
                onClick={() => handleAddToCart(laptop)}
                disabled={addedItems.includes(laptop.id)}
                className={`mt-2 w-full rounded-lg px-4 py-2 font-bold transition-all ${
                  addedItems.includes(laptop.id)
                    ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedItems.includes(laptop.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptop;
