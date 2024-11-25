import React from 'react'
import { NavLink } from 'react-router-dom'
import bag from "../img/bags/bag-2.png"
import shoes from "../img/shoes/shoe-2.png" 
import watch from "../img/categories/watch.png"
import headphones from "../img/banner-images/headphone.png"
import xbox from "../img/banner-images/xbox.png"

const PopularCategories = () => {
  return (
    <div className='w-full mt-3'>
      <h1 className='font-bold font-mono text-center my-2 text-4xl'>Popular Categories</h1>
      {/* Flex-wrap for all categories */}
      <div className='w-full flex flex-wrap gap-5 mb-3 justify-center'>
        <NavLink to="mp" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img src="https://techxavvy.com/wp-content/uploads/2022/03/Redmi-Note-11.png" alt="Mobile Phone" className="object-contain h-full w-full" />
            </div>
            <p>Mobile Phone</p>
          </div>
        </NavLink>

        <NavLink to="bags" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img src={bag} alt="" />
            </div>
            <p>Bag</p>
          </div>
        </NavLink>

        <NavLink to="shoes" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img className='mt-3' src={shoes} alt="" />
            </div>
            <p>Shoes</p>
          </div>
        </NavLink>

        <NavLink to="watch" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img src={watch} alt="" />
            </div>
            <p>Clock</p>
          </div>
        </NavLink>

        <NavLink to="headphones" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img src={headphones} alt="" />
            </div>
            <p>Headphones</p>
          </div>
        </NavLink>

        <NavLink to="xboxs" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img src={xbox} alt="" />
            </div>
            <p>Xbox</p>
          </div>
        </NavLink>

        <NavLink to="lamps" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img src="https://www.pngarts.com/files/3/Modern-Lamp-PNG-Image-Transparent.png" alt="" />
            </div>
            <p>Lighting Lamp</p>
          </div>
        </NavLink>

        <NavLink to="laptops" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img className='my-3' src="https://purepng.com/public/uploads/large/purepng.com-laptopelectronicslaptopcomputer-9415246764507pgyc.png" alt="" />
            </div>
            <p>Laptop</p>
          </div>
        </NavLink>

        <NavLink to="cloths" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img src="https://www.pngall.com/wp-content/uploads/2016/05/Jacket-Free-PNG-Image.png" alt="" />
            </div>
            <p>Cloth</p>
          </div>
        </NavLink>

        <NavLink to="sofas" className="w-4/12 md:3/12 h-36">
          <div className="h-full border border-black rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg">
            <div className="img h-24 w-24 bg-white rounded-full p-3 hover:p-2">
              <img className='my-2' src="https://th.bing.com/th/id/R.6a67816b7333000535051b9568ca5705?rik=x9r0L%2bA55%2b6tFg&pid=ImgRaw&r=0" alt="" />
            </div>
            <p>Sofa</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default PopularCategories;
