import React, { useState } from 'react';
import Header from '../components/Header';
import { Share } from 'lucide-react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import About from '../components/AboutUsCard';

const NonProfit = () => {
  const location = useLocation();
  const image = location.state?.image;
  const name = location.state?.name;
  const navigation = useNavigate();
  const richColors = ["#F7194E", "#0C00FF", "#0cc602", "#932CFF", "#393939"];
  const [currentColor, setCurrentColor] = useState(richColors[0]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * richColors.length);
    setCurrentColor(richColors[randomIndex]);
  };

  return (
    <div className='mt-[70px]'>
      <Header />
      
      <div className='flex-1'>
        {image ? (
          <div className='h-25 bg-[#616161] relative'>
            <img 
              src={image} 
              className='absolute top-[100%] z-30 shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full flex justify-center items-center cursor-pointer object-cover  transition-colors duration-300'
              alt="Nonprofit Profile"
            />
          </div>
        ) : (
          <div className='h-25 bg-[#616161] relative'>
            <div 
              style={{ backgroundColor: currentColor }} 
              className='absolute top-[100%] shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 p-5 rounded-full flex justify-center items-center cursor-pointer  transition-colors duration-300'
            >
              <div
                className='h-14 w-14 text-4xl font-semibold flex justify-center items-center text-white opacity-90'
                onClick={getRandomColor}
              >
                A
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-20 flex flex-col justify-center items-center px-2 md:px-6">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">{name}</h1>
        <p className="text-[12px] px-5 md:text-[20px] text-gray-600 md:w-[50%] line-clamp-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
          <a href="#" className="text-[#08A0CA] font-medium">
            Learn More ...
          </a>
        </p>
        <a href="#" className="text-[#08A0CA] underline mt-7 font-medium">
          Claim This Nonprofit?
        </a>
      </div>

      <div className='flex px-5 justify-center items-center my-10 flex-wrap flex-row gap-5'>
        <button 
          onClick={() => navigation('/start')} 
          className="cursor-pointer h-11 w-full md:w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row justify-center bg-white text-gray-900 transition-shadow duration-200 border border-black"
        >
          <div className="text-nowrap font-black text-[16px]">Start a</div>
          <img className="h-[13px] ms-[-3px] object-contain" src="crwd.png" alt="Crowd" />
        </button>
        
        <button  onClick={() => navigation('/donation')}  className="font-black text-[16px] justify-center items-center flex-1 md:flex-none md:w-fit cursor-pointer h-11 w-fit px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
          Donate Now
        </button>

        <button className="font-black text-[16px] cursor-pointer h-11 w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
          <Share />
        </button>
      </div>

      <div className="mt-6 flex w-[80%] mx-auto justify-center gap-2 items-center text-[#000]">
        <hr className="border-[#989898] w-full" />
      </div>

      <Slider />

      <div className="mt-6 flex w-[80%] mx-auto justify-center gap-2 items-center">
        <hr className="border-[#989898] w-full" />
      </div>

      <About image={image} name={name} />
      
      <Footer />
    </div>
  );
};

export default NonProfit;