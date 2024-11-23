import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu
  };

  // Handle scroll event to apply the blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add blur when scrollY > 50px
      } else {
        setIsScrolled(false); // Remove blur when at the top
      }
    };

    window.addEventListener('scroll', handleScroll); // Attach the scroll listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <nav
      className={`text-white bg-black flex justify-between p-2 items-center fixed top-0 left-0 w-full transition-all z-50 ${
        isScrolled ? 'md:backdrop-blur-xl md:bg-white/30' : ''
      }`}
    >
      {/* Logo */}
      <div className="flex justify-center items-center gap-2">
        <span>
          <svg
            className="ml-4"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path d="M9.494 4.011a.49.49 0 0 1-.489-.492a2.51 2.51 0 0 0-2.503-2.514A2.51 2.51 0 0 0 4 3.519a.49.49 0 1 1-.979 0C3.021 1.59 4.583.021 6.502.021c1.92 0 3.482 1.569 3.482 3.498a.49.49 0 0 1-.49.492"/>
              <path d="M12.492 4.011a.49.49 0 0 1-.488-.492c0-1.386-1.119-2.514-2.492-2.514a.49.49 0 0 1-.488-.492a.49.49 0 0 1 .488-.492c1.912 0 3.469 1.569 3.469 3.498a.49.49 0 0 1-.489.492m.55-.911V16h1.329c.327 0 .594-.254.594-.566V3.626c0-.314-.267-.565-.594-.565z"/>
              <path d="M1.645 3.061c-.33 0-.601.252-.601.565v11.808c0 .312.271.566.601.566h10.306l.006-12.939z"/>
            </g>
          </svg>
        </span>
        <span className="font-mono font-bold mt-1">LUXETRA</span>
      </div>

      {/* Hamburger Icon (visible only on mobile screens) */}
      <div className="block md:hidden">
        <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8h15M5 16h22M5 24h22M5 11l3-3l-3-3"/>
          </svg>
        </div>
      </div>

      {/* Sidebar Menu (appears only on mobile, 25% width from the right) */}
      <div
        className={`fixed px-5 top-0 right-0 w-4/12 h-full bg-black transform transition-transform z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="absolute top-0 right-5">
          <button onClick={toggleMenu} className="text-white text-3xl">
            &times;
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col text-lg font-bold gap-5 py-20">
          <NavLink to="/" onClick={toggleMenu}><li>Home</li></NavLink>
          <NavLink to="/about" onClick={toggleMenu}><li>About</li></NavLink>
          <NavLink to="/contact" onClick={toggleMenu}><li>Contact</li></NavLink>
          <NavLink to="/cart" onClick={toggleMenu}><li>Shop</li></NavLink>
        </ul>
      </div>

      {/* Navbar Links for Desktop (visible on large screens) */}
      <ul className="hidden md:flex text-lg font-bold gap-5 mx-20 py-2">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
        <NavLink to="/cart"><li>Shop</li></NavLink>
      </ul>

      {/* Search Bar (visible on large screens) */}
      <input 
        placeholder="Search For Shopping"
        className="px-5 py-2 rounded-lg h-8 mt-2 border border-gray-500 hidden md:block"
        type="text"
      />
    </nav>
  );
};

export default Navbar;
