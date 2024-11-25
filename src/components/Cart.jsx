import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    return total + (isNaN(itemPrice) ? 0 : itemPrice); // Use 0 if item price is NaN
  }, 0);

  const deliveryAmount = 5; // Fixed delivery amount
  const grandTotal = cartTotal + deliveryAmount;

  // Stripe hooks
  const stripe = useStripe();
  const elements = useElements();

  // State to manage payment status
  const [paymentStatus, setPaymentStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) return; // Make sure Stripe.js has loaded

    setIsProcessing(true); // Show processing state
    setPaymentStatus(''); // Clear any previous status

    const cardElement = elements.getElement(CardElement);

    // Use Stripe's API to create a token with the card details
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setPaymentStatus(`Error: ${error.message}`);
      setIsProcessing(false);
      return;
    }

    // Simulate a successful payment process
    // Normally, you would send the token to your backend for processing
    setTimeout(() => {
      setPaymentStatus('Payment successful! Thank you for your purchase.');
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto py-14">
      <h1 className="text-center font-mono font-bold text-4xl my-2">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg">Cart is empty</p>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="cart-list flex flex-col gap-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex w-full px-3 items-center justify-between md:p-4 border border-black rounded-lg shadow-sm"
              >
                <div className="w-fit md:w-3/12">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-fit h-[80px] object-cover rounded-md"
                  />
                </div>

                <h2 className="font-semibold text-lg w-fit md:w-3/12">{item.title}</h2>
                <p className="text-gray-600 w-fit md:w-3/12 font-bold">${parseFloat(item.price).toFixed(2)}</p>
                <div className="md:w-3/12 w-fit">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-600 md:w-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="black" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-totals p-4 rounded-lg border border-gray-500">
            <div className="flex flex-col sm:flex-row justify-between text-lg font-semibold mb-2">
              <span>Cart Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-lg font-semibold mb-2">
              <span>Delivery Amount:</span>
              <span>${deliveryAmount.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-lg font-bold">
              <span>Grand Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Section */}
          <div className="payment-section mt-4">
            <h2 className="text-xl font-bold">Payment</h2>
            <div className="payment-form mt-3">
              <CardElement />
            </div>
            <button
              onClick={handlePayment}
              disabled={!stripe || isProcessing}
              className={`mt-4 w-full py-2 rounded-lg ${isProcessing ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            >
              {isProcessing ? 'Processing...' : `Pay $${grandTotal.toFixed(2)}`}
            </button>

            {/* Payment Status Message */}
            {paymentStatus && (
              <div
                className={`mt-4 text-center font-bold ${paymentStatus.includes('successful') ? 'text-green-500' : 'text-red-500'}`}
              >
                {paymentStatus}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
