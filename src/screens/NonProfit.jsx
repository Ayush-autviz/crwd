import React, { useState } from 'react'
import Header from '../components/Header'
import { MapPin, Share } from 'lucide-react'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import About from '../components/AboutUsCard'

const NonProfit = () => {
  const navigation = useNavigate();
  const richColors = [
    "#F7194E",
    "#0C00FF",
    "#A7FF4E",
    "#932CFF",
    "#393939"
];

  const [currentColor, setCurrentColor] = useState(richColors[0]);

  // Function to get random color from array
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * richColors.length);
    setCurrentColor(richColors[randomIndex]);
  };
  return (
    <div className='mt-[70px]'>
        <Header/>
        <div className='flex-1 '>
        <div className='h-25 bg-[#616161] relative'>
               <div style={{ backgroundColor: currentColor }} className={`absolute top-[100%] shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24  p-5 rounded-full flex justify-center items-center cursor-pointer   transition-colors duration-300 `}>
                    {/* <img className='h-14 w-14' src='crwd2.svg'/> */}
                    {/* <div className='h-14 w-14 text-4xl font-semibold flex justify-center items-center text-white'>
                              N
                    </div> */}
                    <div 
      className={`h-14 w-14 text-4xl font-semibold flex justify-center items-center text-white `}
      onClick={getRandomColor}
    >
      A
    </div>
               </div>
        </div>

        <div className="text-center mt-20 flex flex-col justify-center items-center px-2 md:px-6">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">American Cancer Society</h1>
        <p className="text-[12px] px-5 md:text-[20px] text-gray-600 md:w-[50%] line-clamp-2">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
        <a href="#" className="text-[#08A0CA]  font-medium">
             Learn More ...
          </a>
        </p>

        <a href="#" className="text-[#08A0CA] underline mt-7 font-medium">
             Claim  This Nonprofit? 
          </a>
        </div>

       

        <div className='flex  px-5 justify-center items-center my-10  flex-wrap flex-row gap-5'>

        <button onClick={()=>{navigation('/start')}}  className="cursor-pointer h-11 w-full md:w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row justify-center  bg-white text-gray-900 transition-shadow duration-200 border border-black">
           <div className="text-nowrap  font-black text-[16px] ">Start a</div>
           <img className="h-[13px] ms-[-3px] object-contain" src="crwd.png"/>
         </button>
        
        <button className="font-black text-[16px] justify-center  items-center flex-1 md:flex-none md:w-fit   cursor-pointer h-11 w-fit  px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
          Donate Now
        </button>

        <button className="font-black text-[16px]  cursor-pointer h-11 w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
           <Share />
        </button>

        </div>


{/* 
        <div className=' hidden md:flex flex-col md:flex-row justify-center items-center gap-5 mb-16'>
                <div className='rounded-xl shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.1)] flex flex-col justify-center  gap-3 p-6 w-[350px] h-[170px] '>
                   <div className='text-[16px] font-semibold'>
                    Verified US nonprofit
                   </div>

                   <div className='text-[16px] font-semibold'>
                    EIN :<span className='text-[16px] text-[#373737] font-light'> Verified US nonprofit</span>
                   </div>

                   <div className='text-[16px] font-semibold'>
                    Email address : <span className='text-[16px] text-[#373737] font-light'>abc@gmail.com</span> 
                   </div>
                </div>

                <div className='rounded-xl  shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.1)] flex flex-col gap-3 p-6 justify-center w-[350px] h-[170px]  '>
                   <div className='text-[16px] font-semibold'>
                    Address & Contact
                   </div>
                   <div className='text-[16px] text-[#373737] font-light' >
                   PO Box 37839 Boone IA 50037 US
                   +18004357669
                   </div>

                </div>
        </div> */}

        <div className="mt-6 flex w-[80%] mx-auto  justify-center gap-2 items-center text-[#000]">
              <hr className="border-[#989898] w-full" />
        </div>

        <Slider/>

        <div className="mt-6 flex w-[80%] mx-auto  justify-center gap-2 items-center ">
              <hr className="border-[#989898] w-full" />
        </div>

        {/* <div className='flex flex-col w-[90%] rounded-xl md:max-w-[80%] shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.1)]  justify-center mx-auto items-center py-5  gap-5 px-6 my-10'>
          <div className='text-[18px] font-semibold'>
                 About american Red Cross
          </div>
          <img className='h-15 w-15' src='crwd2.svg'/>
          <div className='flex flex-col gap-1 text-center'>
            <div className='text-[18px] text-center font-semibold'>
                 Causes
            </div>
            <div className='text-[17px] text-center text-[#373737] font-light'>
                Disaster and Emergency mangemet,Blood banks,Safety Education
            </div>
          </div>

          <div className='flex flex-col gap-1 text-center'>
            <div className='text-[18px] text-center font-semibold'>
                 Established
            </div>
            <div className='text-[17px] text-center text-[#373737] font-light'>
                1938
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='text-[18px] font-semibold'>
                 Verified on crwd
            </div>
            <div className='text-[17px] text-center text-[#373737] font-light'>
                2005
            </div>
          </div>

          <div className='flex flex-col items-center gap-1'>

          <div className='text-[18px] font-semibold'>
          <MapPin className="h-5 w-5" />
            </div>
            
            <div className='text-[17px] text-center text-[#373737] font-light'>
            PO Box 37839 Boone IA 50037 US
            </div>
          </div>

        </div> */}

        <About/>


        </div>
        <Footer/>


      
    </div>
  )
}

export default NonProfit
