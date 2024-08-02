import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white fixed w-full z-10 py-4 sm:py-2 transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12" />
          <h1 className="text-xl">Bigspring</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-green-400 font-medium">Home</a>
          <a href="#features" className="text-gray-700 font-medium">Features</a>
          <a href="#pricing" className="text-gray-700 font-medium">Pricing</a>
          <a href="#about" className="text-gray-700 font-medium">About</a>
          <a href="#contact" className="text-gray-700 font-medium">Contact</a>
        </div>
        <button className="hidden md:block bg-green-400 text-white px-4 py-2 rounded-full">Get Started</button>
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <a href="#home" className="block px-4 py-2 text-gray-700">Home</a>
        <a href="#features" className="block px-4 py-2 text-gray-700">Features</a>
        <a href="#pricing" className="block px-4 py-2 text-gray-700">Pricing</a>
        <a href="#about" className="block px-4 py-2 text-gray-700">About</a>
        <a href="#contact" className="block px-4 py-2 text-gray-700">Contact</a>
        <button className="block w-full bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
