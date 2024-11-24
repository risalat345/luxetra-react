import React, { useContext, useState } from 'react';
import { shoes } from './Data';
import { CartContext } from './CartContext';

const Shoes = () => {
    const { addToCart } = useContext(CartContext);

    // State to track added items
    const [addedItems, setAddedItems] = useState([]);

    const handleAddToCart = (shoe) => {
        addToCart(shoe);
        setAddedItems((prev) => [...prev, shoe.id]); // Mark the item as added
    };

    return (
        <div className="w-[90%] max-w-[1200px] mx-auto mt-14">
            <h1 className="text-center font-mono font-bold text-4xl my-4">Shoes</h1>
            <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shoes.map((shoe) => (
                    <div
                        key={shoe.id}
                        className="flex flex-col items-center justify-between gap-4 border border-gray-200 rounded-lg p-4 shadow-md"
                    >
                        <div className="w-full flex justify-center">
                            <img
                                className="w-[70%] h-auto max-h-[150px] object-contain"
                                src={shoe.image}
                                alt={shoe.title}
                            />
                        </div>
                        <h2 className="text-lg font-medium text-center">{shoe.title}</h2>
                        <p className="text-gray-700 font-semibold">${shoe.price}</p>
                        <button
                            onClick={() => handleAddToCart(shoe)}
                            disabled={addedItems.includes(shoe.id)}
                            className={`w-full text-center rounded-lg px-4 py-2 font-bold transition-all ${
                                addedItems.includes(shoe.id)
                                    ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                                    : 'bg-black text-white hover:bg-gray-800'
                            }`}
                        >
                            {addedItems.includes(shoe.id) ? 'Added' : 'Add to Cart'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shoes;
