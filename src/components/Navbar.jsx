import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the mobile menu

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="text-white bg-black flex justify-between items-center p-2 fixed top-0 left-0 w-full z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          className="ml-4"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <g fill="currentColor" fillRule="evenodd">
            <path d="M9.494 4.011a.49.49 0 0 1-.489-.492a2.51 2.51 0 0 0-2.503-2.514A2.51 2.51 0 0 0 4 3.519a.49.49 0 1 1-.979 0C3.021 1.59 4.583.021 6.502.021c1.92 0 3.482 1.569 3.482 3.498a.49.49 0 0 1-.49.492" />
            <path d="M12.492 4.011a.49.49 0 0 1-.488-.492c0-1.386-1.119-2.514-2.492-2.514a.49.49 0 0 1-.488-.492a.49.49 0 0 1 .488-.492c1.912 0 3.469 1.569 3.469 3.498a.49.49 0 0 1-.489.492m.55-.911V16h1.329c.327 0 .594-.254.594-.566V3.626c0-.314-.267-.565-.594-.565z" />
            <path d="M1.645 3.061c-.33 0-.601.252-.601.565v11.808c0 .312.271.566.601.566h10.306l.006-12.939z" />
          </g>
        </svg>
        <span className="font-mono font-bold mt-1">LUXETRA</span>
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path
              d="M4 8h24M4 16h24M4 24h24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white w-2/3 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-2xl absolute top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <ul className="flex flex-col items-center gap-6 mt-16">
          <NavLink to="/" onClick={toggleMenu} className="text-lg">
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="text-lg">
            About
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="text-lg">
            Contact
          </NavLink>
          <NavLink to="/cart" onClick={toggleMenu} className="text-lg">
            Shop
          </NavLink>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg font-bold" >
        <NavLink to="/" className="hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-gray-300">
          About
        </NavLink>
        <NavLink to="/contact" className="hover:text-gray-300">
          Contact
        </NavLink>
        <NavLink to="/cart" className="hover:text-gray-300">
          Shop
        </NavLink>
      </ul>

      {/* Search Bar (Desktop) */}
      <input
        type="text"
        placeholder="Search For Shopping"
        className="hidden md:block px-4 py-2 border border-gray-500 rounded-lg"
      />
    </nav>
  );
};

export default Navbar;
