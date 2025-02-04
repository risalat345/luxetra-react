import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const NewProduct = () => {
    const { cart, addToCart } = useContext(CartContext); // Get cart state and addToCart function from context
    const [addedItems, setAddedItems] = useState([]); // Track added items locally

    // Handle adding product to cart
    const handleAddToCart = (product) => {
        addToCart(product); // Add to cart via context
        setAddedItems((prev) => [...prev, product.id]); // Track the item as added locally
    };

    const products = [
        {
            id: 1,
            title: 'Shoes',
            description: 'Shoes are items of footwear intended to protect and comfort the human foot.',
            price: 40,
            image: 'https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=2cAi1QHrzWsBpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png--1200.png&ehk=LDK2zKZ4gGD3lYE7ncWJOb8tGdJLrU046BiOz1wqbAQ%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            id: 2,
            title: 'Watch',
            description: 'A stylish watch to keep track of time.',
            price: 30,
            image: 'https://www.pngall.com/wp-content/uploads/2016/04/Watch-Free-Download-PNG.png',
        },
        {
            id: 3,
            title: 'Transparent Sunglass',
            description: 'Transparent sunglasses offer a stylish, modern look with clear frames.',
            price: 10,
            image: 'https://th.bing.com/th/id/R.5e06e0c7470552e2c21bc225260a7a7c?rik=7CE%2fstwROrjCrw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f1%2fCool-Sunglass-PNG-Image.png&ehk=pd2fhDRsh8pOF%2fWliZVsTK%2fl43G7CT6nfvp0eIKt128%3d&risl=&pid=ImgRaw&r=0',
        },
    ];

    return (
        <div className="newProduct">
            <h1 className="font-mono text-center text-4xl py-5">New Product</h1>
            <div className="card md:flex gap-3">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="md:w-4/12 h-96 p-4 border border-gray-500 px-2 rounded-lg flex flex-col"
                    >
                        <div className="flex items-center h-64">
                            <img className="w-full object-contain" src={product.image} alt={product.title} />
                        </div>
                        <div className="title font-bold">{product.title}</div>
                        <div className="description py-3 text-sm">{product.description}</div>
                        <div className="flex justify-between mt-auto">
                            <div className="price font-bold">${product.price}</div>
                            <button
                                onClick={() => handleAddToCart(product)}
                                disabled={addedItems.includes(product.id) || cart.some((item) => item.id === product.id)} // Disable if already added
                                className={`bg-black font-bold text-white py-1 px-3 rounded-lg ${
                                    addedItems.includes(product.id) || cart.some((item) => item.id === product.id)
                                        ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                                        : 'hover:bg-gray-800'
                                }`}
                            >
                                {addedItems.includes(product.id) || cart.some((item) => item.id === product.id)
                                    ? 'Added'
                                    : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewProduct;
