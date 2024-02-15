// Footer.js
import React from 'react';
import ReduxPic from '../../src/redux.png'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={ReduxPic} alt="ReduxOS Logo" className="w-30 h-16 mr-4" />
        </div>
        <div className="flex flex-col lg:flex-row space-x-4">
          <div className="flex flex-col mb-4 lg:mb-0">
            <p className="text-sm font-semibold mb-2">About Us</p>
            <a href="#" className="text-sm hover:text-gray-400">
              Mission
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Team
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Contact
            </a>
          </div>
          <div className="flex flex-col mb-4 lg:mb-0">
            <p className="text-sm font-semibold mb-2">Products</p>
            <a href="#" className="text-sm hover:text-gray-400">
              ReduxOS Linux
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Features
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Download
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold mb-2">Community</p>
            <a href="#" className="text-sm hover:text-gray-400">
              Forums
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Events
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
