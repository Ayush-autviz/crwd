import React from 'react';
import Divider from './Divider';

const Footer = ({space}) => {
  return (
    <footer className="w-full  bg-[#393939] opacity-95 ">
    <div className="container mx-auto px-4 py-8">
    <Divider/>
            <div className='flex justify-center items-center flex-row gap-5 '>
              <a href="/" className="text-white text-[16px] md:text-[20px] mx-2 hover:text-[#e6e6e6]">Home</a>
            <a href="/about" className="text-white text-[16px] md:text-[20px] mx-2 hover:text-[#e6e6e6]">About us</a>
            <a href="/contact" className="text-white text-[16px] md:text-[20px] mx-2 hover:text-[#e6e6e6]">Contact us</a>
            </div>
    <Divider/>
      </div>
      <div className='w-full bg-[#393939] border-[#616161] border-t'>
    <div className='flex flex-col   xl:flex-row gap-4 mx-auto justify-between items-center py-3 max-w-7xl '>
      <p className='text-white'>Copyright 2025 CRWD Collective</p>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4">
          <a href="/privacy-policy" className="hover:text-[#e6e6e6] text-white">Privacy Policy</a>
          <div className="w-[60%] sm:hidden  h-[1px] my-1 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-px"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-[1px] w-3/4 mx-auto"></div>
    </div>
     
          <span className="text-gray-400 hidden sm:block">|</span>

          <a href="/terms-conditions" className="hover:text-[#e6e6e6] text-white" text-white>Terms & Conditions</a>
          <div className="w-[60%] sm:hidden  h-[1px] my-1 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-px"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-[1px] w-3/4 mx-auto"></div>
    </div>
          <span className="hidden sm:block text-white">|</span>
          <a href="/help" className="hover:text-[#e6e6e6] text-white">Help</a>
        </div>
        </div>
        {
          space && <div className='h-[100px] md:hidden'/>
        }
        
      </div>
      
      
    </footer>
  );
};

export default Footer;