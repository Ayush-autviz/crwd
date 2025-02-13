import React, { useState } from 'react'

const StartCRWD = () => {
  const [other, setOther] = useState(false);
  return (
    <div className='h-screen w-screen  relative flex justify-center items-center'>
      <img src='authbg.svg' className='h-full -z-10 w-full absolute inset-0' />
      <div className='bg-white shadow-xl rounded-2xl px-4 py-6 md:p-10 flex flex-col justify-center items-center w-[90%] md:w-[55%] xl:w-[32%]'>
        <img src='crwd.png' className='h-8 sm:h-9 md:h-10' />
        <div className="mt-6 flex w-full  justify-center gap-2 items-center text-[#000]">
          <hr className="border-[#989898] w-full" />
        </div>
        <div className='flex flex-col w-full mt-2'>
          <div className='text-[14px]  sm:text-xl md:text-2xl font-semibold mt-4 '>Start a CRWD</div>
          <div className='text-[#393939] text-[11px] mt-4  sm:text-[14px] md:text-xl'>Create a philanthropy movement powered by your community. It’s  simple: choose a cause, invite friends, and make an impact together—all with small,  recurring $5 donations.</div>
        </div>
        <div className='flex flex-col mt-5 w-full '>
          <div className='text-[#393939] text-[14px]  sm:text-xl md:text-2xl font-semibold'>What is the name of your CRWD?</div>
          <input
            className="w-full px-4 mt-2 py-2 text-[13px] sm:text-[16px] md:text-xl rounded-full border  focus:outline-none "
            type="text"
            name="cardNumber"
            placeholder="Your CRWD name"
          />
          <div className='text-[#393939]  mt-5 text-[14px]  sm:text-xl md:text-2xl font-semibold'>What is the purpose of your group?</div>
          <input
            className="w-full px-4 mt-2 py-2 text-[13px] sm:text-[16px] md:text-xl rounded-full border  focus:outline-none "
            type="text"
            name="cardNumber"
            placeholder="Briefly describe your group and why you are fundraising."
          />
          <div className='text-[#393939]  mt-5 text-[14px]  sm:text-xl md:text-2xl font-semibold'>What would you like people to donate monthly?</div>
          <div className='flex flex-row  items-center gap-2 mt-4'>
            <div onClick={() => setOther(false)} className={`rounded-xl px-5 py-4 text-[14px]  sm:text-xl md:text-2xl  flex items-center justify-center bg-[#EEE] ${!other ? 'border border-black' : ''}`}>
              $5
            </div>
            <div onClick={() => setOther(true)} className={`rounded-xl p-4 text-[14px]  sm:text-xl md:text-2xl  flex items-center justify-center bg-[#EEE] ${other ? 'border border-black' : ''}`}>
              Other
            </div>
            {
              other && (<input
                className="w-full px-4  py-2 text-[20px] rounded-full border  focus:outline-none "
                type="text"
                name="cardNumber"
                placeholder="$"
              />)
            }
          </div>
          <button
            className="bg-[#393939] mt-5 text-[14px]  sm:text-xl md:text-2xl rounded-full cursor-pointer text-white py-3 w-full  hover:shadow-xl "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartCRWD;
