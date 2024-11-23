import React from 'react';

const Discount = () => {
  return (
    <div>
      {/* Spring Collection Banner */}
      <div className="mt-3 discount h-fit relative">
        <img
          className="mx-auto rounded-lg w-full object-cover"
          src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-nordic-minimalist-furniture-banner-design-image_190039.jpg"
          alt="Spring Collection Banner"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-black text-center mt-2 md:mt-20 gap-1 md:gap-2">
          <p className="text-[15px] md:text-3xl font-bold">SPRING</p>
          <p className="text-[20px] md:text-5xl font-bold">COLLECTION</p>
          <p>Start From <span className="font-bold">$39.99</span></p>
          <button className="bg-black px-6 md:px-10 py-1 md:py-2 text-white rounded-lg font-bold">Shop Now</button>
        </div>
      </div>

      {/* Cyber Monday Banner */}
      <div className='hidden md:block'>
      <div className="w-full flex flex-col md:flex-row h-auto border bg-pink-300 border-red-600 my-3">
        <div className="w-full md:w-2/6 p-4">
          <img
            className="w-full mx-auto my-4"
            width={250}
            src="https://www.mdc.edu/fashion/img/fashion-forward-model.png"
            alt="Cyber Monday Model"
          />
        </div>
        <div className="w-full md:w-4/6 text-center my-3">
          <p className="text-5xl sm:text-6xl font-bold text-stroke">CYBER</p>
          <p className="text-4xl sm:text-5xl font-bold text-stroke">MONDAY</p>
          <p className="bg-yellow-400 mx-auto my-2 w-fit text-black font-bold px-10 py-2">60% DISCOUNT</p>
          <button className="bg-slate-800 text-white px-6 py-2 rounded-lg font-bold">Shop Now</button>
        </div>
      </div>
      </div>
      {/* Commented Code */}
      {/* <div className="flex gap-3 mt-3">
        <div className="w-3/6 h-48 border bg-red-500">
          <img className="w-full h-full object-cover mx-auto rounded-lg" src="https://th.bing.com/th/id/R.c3abe583a4707223b41b9a872f2e8684?rik=4rNv8J%2ftlqsWBg&pid=ImgRaw&r=0" alt=""/>
        </div>
        <div className="w-3/6 h-48 border bg-white">
          <img className="w-full h-full object-cover mx-auto rounded-lg" src="" alt=""/>
        </div>
      </div> */}
    </div>
  );
};

export default Discount;
