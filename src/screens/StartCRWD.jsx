import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const StartCRWD = () => {
  const [other, setOther] = useState(false);
  const navigation = useNavigate();
  return (
    <div className='h-screen flex justify-center items-center bg-[url(authbg.svg)] bg-cover bg-no-repeat'>
    
      <div className='bg-white shadow-[0px_0px_24px_1px_rgba(0,_0,_0,_0.1)] rounded-2xl px-4 py-6 md:px-10 md:py-6 flex flex-col justify-center items-center w-[90%] md:w-[55%] xl:w-[35%]'>
        <img src='crwd.png' className='h-6 sm:h-7 md:h-8' />
        <div className="mt-4 flex w-full  justify-center gap-2 items-center text-[#000]">
          <hr className="border-[#989898] w-full" />
        </div>
        <div className='flex flex-col w-full '>
          <div className='text-[12px]  mb-1 sm:text-sm md:text-xl font-semibold mt-4 text-[#373737] '>Start a CRWD</div>
          <div className='text-[#393939] text-[10px] md:text-[14px]'>Create a philanthropy movement powered by your community. It’s  simple: choose a cause, invite friends, and make an impact together—all with small,  recurring $5 donations.</div>
        </div>
        <div className='flex flex-col mt-4 w-full '>
          <div className='text-[#393939] text-[10px] md:text-[14px] font-semibold'>What is the name of your CRWD?</div>
          <input
            className="w-full px-4 mt-2 py-3 md:py-3 text-[10px]   md:text-[14px] rounded-full border border-[#989898]  focus:outline-none "
            type="text"
            name="cardNumber"
            placeholder="Your CRWD name"
          />
          <div className='text-[#393939] mt-4 text-[10px] md:text-[14px] font-semibold'>What is the purpose of your group?</div>
          <input
            className="w-full px-4 mt-2 py-3 md:py-3 text-[10px]   md:text-[14px] rounded-full border border-[#989898]  focus:outline-none  "
            type="text"
            name="cardNumber"
            placeholder="Briefly describe your group and why you are fundraising."
          />
          <div className='text-[#393939] mt-4 text-[10px] md:text-[14px] font-semibold'>What would you like people to donate monthly?</div>
          <div className='flex flex-row  items-center gap-2 mt-4'>
            <div onClick={() => setOther(false)} className={`rounded-xl px-5 py-3 md:py-3 text-[10px]  cursor-pointer  md:text-[14px]  flex items-center justify-center bg-[#EEE] ${!other ? 'border border-[#989898]' : ''}`}>
              $5
            </div>
            <div onClick={() => setOther(true)} className={`rounded-xl px-5 py-3 md:py-3 text-[10px] cursor-pointer   md:text-[14px]  flex items-center justify-center bg-[#EEE] ${other ? 'border border-[#989898]' : ''}`}>
              Other
            </div>
            {
              other && (<input
                className="w-full px-4 mt-2 py-2 md:py-3 text-[10px]   md:text-[14px] rounded-full border border-[#989898]  focus:outline-none "
                type="number"
                name="cardNumber"
                placeholder="$"
              />)
            }
          </div>
          <button
           onClick={()=>{navigation("/start.")}}
            className="bg-[#393939] mt-4 text-[10px] md:text-[14px]  rounded-full cursor-pointer text-white py-3 md:py-3 w-full  hover:shadow-xl"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartCRWD;
