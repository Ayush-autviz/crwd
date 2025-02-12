import React from 'react';
import Divider from './Divider';

const Footer = () => {
  return (
    <footer className="w-full  bg-[#F3F3F2] ">
      <div className="container mx-auto px-4 pt-8">
    <Divider/>
              <div className='flex justify-center items-center flex-row gap-5 '>
              <a href="/" className="mx-2 hover:text-gray-400">Home</a>
             <a href="/about" className="mx-2 hover:text-gray-400">About us</a>
                <a href="/contact" className="mx-2 hover:text-gray-400">Contact us</a>
              </div>
    <Divider/>
      </div>
      <div className='w-full    '>
    <div className='flex flex-col   xl:flex-row gap-4 mx-auto justify-between items-center pb-7 pt-4 px-10 max-w-7xl '>
      <p>Copyright 2025 CRWD Collective</p>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4">
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <div className="w-[60%] sm:hidden  h-[1px] my-1 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-px"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-[1px] w-3/4 mx-auto"></div>
    </div>
     
          <span className="text-gray-400 hidden sm:block">|</span>

          <a href="/terms-conditions" className="hover:text-gray-400">Terms & Conditions</a>
          <div className="w-[60%] sm:hidden  h-[1px] my-1 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-px"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-[1px] w-3/4 mx-auto"></div>
    </div>
          <span className="text-gray-400 hidden sm:block">|</span>
          <a href="/help" className="hover:text-gray-400">Help</a>
        </div>
        </div>
      </div>
      <div className='md:hidden h-[90px]'/>
    </footer>
  );
};

export default Footer;