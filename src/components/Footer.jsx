import React from 'react';
import Divider from './Divider';

const Footer = () => {
  return (
    <footer className="w-full  bg-[#F3F3F2] ">
      <div className="container mx-auto px-4 py-8">
    <Divider/>
              <div className='flex justify-center items-center flex-row gap-5 '>
              <a href="/" className="mx-2 hover:text-gray-400">Home</a>
             <a href="/about" className="mx-2 hover:text-gray-400">About us</a>
                <a href="/contact" className="mx-2 hover:text-gray-400">Contact us</a>
              </div>
    <Divider/>
      </div>
      <div className='w-full   bg-[#E4E4E4] '>
    <div className='flex flex-col xl:flex-row gap-4 mx-auto justify-between items-center py-3 max-w-7xl '>
      <p>Copyright 2025 CRWD Collective</p>
      <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a href="/terms-conditions" className="hover:text-gray-400">Terms & Conditions</a>
          <span className="text-gray-400">|</span>
          <a href="/help" className="hover:text-gray-400">Help</a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;