import React from 'react'
import Header from '../components/Header'
import { Share } from 'lucide-react'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const NonProfit = () => {
  return (
    <div>
        <Header/>
        <div className='flex-1'>
        <div className='h-25 bg-[#616161] relative'>
               <div className='absolute top-[100%] shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 bg-white p-5 rounded-full flex justify-center items-center'>
                    <img className='h-14 w-14' src='crwd2.svg'/>
               </div>
        </div>

        <div className="text-center mt-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">American Cancer Society</h1>
        <p className="text-gray-600 w-[50%] line-clamp-2">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
        <a href="#" className="text-[#08A0CA]  font-medium">
             Learn More ...
          </a>
        </p>

        <a href="#" className="text-[#08A0CA] underline mt-7 font-medium">
             Claim  This Nonprofit? 
          </a>
        </div>

       

        <div className='flex justify-center items-center my-10 flex-col md:flex-row gap-5'>

        <button className="cursor-pointer w-fit items-center px-8 h-12 gap-2 rounded-full flex flex-row bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200">
          Start a<img className="h-11 w-11" src="logo.svg"/>
        </button>        
        
        <button className="cursor-pointer w-fit items-center h-12 px-8 py-2 gap-2 rounded-full flex flex-row bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200">
          Donate Now
        </button>

        <button className="cursor-pointer w-fit items-center h-12 px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200">
           <Share />
        </button>

        </div>



        <div className=' hidden md:flex flex-col md:flex-row justify-center items-center gap-5'>
                <div className='rounded-xl shadow-xl flex flex-col gap-3 p-5 w-[250px] h-[170px] '>
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

                <div className='rounded-xl  shadow-xl flex flex-col gap-3 p-5 w-[250px] h-[170px]  '>
                   <div className='text-[16px] font-semibold'>
                    Address & Contact
                   </div>
                   <div className='text-[16px] text-[#373737] font-light' >
                   PO Box 37839 Boone IA 50037 US
                   +18004357669
                   </div>

                </div>
        </div>

        <Slider/>
        </div>
        <Footer/>


      
    </div>
  )
}

export default NonProfit
