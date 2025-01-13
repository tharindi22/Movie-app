import React from 'react';

const Navbar = () => {
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-6 bg-[#40407a] py-2 h-17 shadow-md sticky top-0">
      <div className="left flex items-center space-x-3 justify-center">
        
        <img className="w-14  object-contain " src="4.png" alt="img" />
        <h2 className="text-white font-bold text-2xl">Movie Masala</h2>
      </div>
      <div className="right">
        <ul className="flex space-x-5 text-white font-medium justify-center px-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
