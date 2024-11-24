import React from 'react';

const Contact = () => {
  return (
    <div className="mt-14 overflow-auto px-5 md:px-10 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Heading Section */}
      <p className="text-3xl text-center font-mono font-bold text-black mt-5">Contact Us</p>
      <p className="text-center text-sm md:text-base">Get in touch, we are here to help you.</p>

      {/* Main Content Section */}
      <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Address */}
          <div className="flex justify-start items-center gap-3">
            <div className="circle h-14 w-14 rounded-full bg-white flex justify-center items-center">
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-pink-500">Address</p>
              <p className="text-sm md:text-base">Academy Road, Feni Sadar, Feni, Bangladesh</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex justify-start items-center gap-3">
            <div className="circle h-14 w-14 rounded-full bg-white flex justify-center items-center">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047c.42 2.783 1.66 7.83 5.283 11.453c3.805 3.805 9.286 5.456 12.302 6.113c1.165.253 2.198-.655 2.198-1.848v-3.584z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-pink-500">Phone</p>
              <p className="text-sm md:text-base">01815264537</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex justify-start items-center gap-3">
            <div className="circle h-14 w-14 rounded-full bg-white flex justify-center items-center">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-pink-500">Email</p>
              <p className="text-sm md:text-base">luxetra24@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-black rounded-lg shadow-2xl p-6">
          <p className="text-white text-lg font-bold text-center">Send Message</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
          <textarea
            placeholder="Type a message"
            className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none"
            rows="4"
          ></textarea>
          <button className="flex items-center justify-center w-full px-4 py-2 my-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-200 ease-in-out">
            <p className="font-mono font-bold text-white">Send</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21l20.99-9-21-9-.01 7 15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
