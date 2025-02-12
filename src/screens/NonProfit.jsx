import React from 'react'
import Header from '../components/Header'
import { Share } from 'lucide-react'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const NonProfit = () => {
  return (
    <div className='mt-[70px]'>
        <Header/>
        <div className='flex-1 px-2'>
        <div className='h-25 bg-[#616161] relative'>
               <div className='absolute top-[100%] shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 bg-white p-5 rounded-full flex justify-center items-center'>
                    <img className='h-14 w-14' src='crwd2.svg'/>
               </div>
        </div>

        <div className="text-center mt-20 flex flex-col justify-center items-center px-2 md:px-6">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">American Cancer Society</h1>
        <p className="text-[12px] md:text-[20px] text-gray-600 md:w-[50%] line-clamp-2">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
        <a href="#" className="text-[#08A0CA]  font-medium">
             Learn More ...
          </a>
        </p>

        <a href="#" className="text-[#08A0CA] underline mt-7 font-medium">
             Claim  This Nonprofit? 
          </a>
        </div>

       

        <div className='flex  px-2 justify-center items-center my-10  flex-wrap flex-row gap-5'>

        <button  className="cursor-pointer h-11 w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row justify-center  bg-white text-gray-900 transition-shadow duration-200 border border-black">
           <div className="text-nowrap font-[20px] ">Start a</div>
           <img className="h-[13px] ms-[-3px] object-contain" src="crwd.png"/>
         </button>
        
        <button className="font-[20px]  cursor-pointer h-11 w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
          Donate Now
        </button>

        <button className="font-[20px]  cursor-pointer h-11 w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
           <Share />
        </button>

        </div>



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
        </div>

        <div className="mt-6 flex w-[80%] mx-auto  justify-center gap-2 items-center text-[#000]">
              <hr className="border-[#989898] w-full" />
        </div>

        <Slider/>
        </div>
        <Footer/>


      
    </div>
  )
}

export default NonProfit
