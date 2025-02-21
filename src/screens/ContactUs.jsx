import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const ContactUs = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className='mt-[70px]'>
        <Header/>
        <div className='bg-[#393939] opacity-95  flex justify-center items-center p-15'>
        <div className="text-2xl text-center text-white md:text-5xl font-bold  mb-2">Contact Us</div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20  p-7 md:p-16  xl:p-25'>
            <div className='flex flex-col '>
                <div className='text-2xl text-left md:text-3xl xl:text-5xl font-bold text-[#393939] '>
                We are always ready to help you and answer your questions
                </div>
                <div className='text-sm text-left md:text-[16px] xl:text-xl font-light mt-4 text-[#393939]'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.Sed ut perspiciatis
                </div>
                {/* <div className='flex flex-row  flex-wrap gap-10 md:gap-13  xl:gap-25 mt-10 md:mt-5  xl:mt-10'>
                    <div className='flex flex-col md:gap-2 xl:gap-4'>
                    <div className='text-left text-[18px] md:text-xl font-semibold  text-[#373737]'>
                        Phone
                    </div>
                    <div className='text-left text-[12px] md:text-[16px] text-[#373737] '>
                    +94545475745
                    </div>
                    </div>

                    <div className='flex flex-col  md:gap-2 xl:gap-4'>
                    <div className=' text-left text-[18px] md:text-xl font-semibold  text-[#373737]'>
                    Our Location
                    </div>
                    <div className='text-left text-[12px] md:text-[16px] text-[#373737] '>
                    Atlanta, GA     
                    </div>
                    </div>

                    <div className='flex flex-col md:gap-2 xl:gap-4 '>
                    <div className=' text-left text-[18px] md:text-xl font-semibold  text-[#373737]'>
                    Email
                    </div>
                    <div className=' text-left text-[12px] md:text-[16px] text-[#373737] '>
                    abc@gmail.com
                    </div>
                </div>
                </div> */}


            </div>
            <div className='bg-white ml-auto  shadow-[0px_0px_24px_1px_rgba(0,_0,_0,_0.1)] h-fit rounded-2xl px-4 py-6 md:px-10 md:py-6 flex flex-col justify-center items-center w-[100%]'>
              
                <div className='text-[16px]  mb-1 sm:text-xl md:text-3xl font-semibold  text-[#373737]'>Get In Touch</div>
                <div className='text-[#393939] text-[10px] md:text-[20px] mb-4 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem </div>
                <input
                    className="w-full px-4 mt-4 py-3 md:py-3 text-[12px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none"
                    type="text"
                    name="cardNumber"
                    placeholder="First Name"
                />

                <input
                    className="w-full px-4 mt-4 py-3 md:py-3 text-[12px]   md:text-[16px] rounded-full border border-[#989898]  focus:outline-none"
                    type="text"
                    name="cardNumber"
                    placeholder="Email Address"
                />

       <textarea
      className="w-full px-4 mt-4 py-3 md:py-3 text-[10px] md:text-[16px] resize-none rounded-4xl border border-[#989898] focus:outline-none h-28"
      name="message"
      placeholder="Message"
    />

                <button
                    className="bg-[#393939] mt-5 text-[10px] md:text-[16px] px-5 rounded-full cursor-pointer text-white py-3 md:py-3 w-full  "
                >
                    Submit
                </button>   
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default ContactUs
