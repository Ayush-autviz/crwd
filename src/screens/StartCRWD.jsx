import React, { useState } from 'react'

const StartCRWD = () => {
  const [other,setOther] = useState(false);
  return (
    <div className='h-screen  relative flex justify-center items-center'>
        <img src='authbg.svg' className='h-full -z-10 w-full absolute inset-0'/>

        <div className='bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-center items-center w-[50%] md:w-[30%]'>
            <img src='crwd.png' className='h-10'/>
            <div className="mt-6 flex w-full  justify-center gap-2 items-center text-[#000]">
              <hr className="border-[#989898] w-full" />
            </div>
            <div className='flex flex-col w-full mt-2'>
            <div className='text-[40px] font-semibold  '>Start a CRWD</div>
            <div className='text-[#393939] text-[20px]'>Create a philanthropy movement powered by your community. It’s  simple: choose a cause, invite friends, and make an impact together—all with small,  recurring $5 donations.</div>
            </div>

           <div className='flex flex-col mt-5 '>
            <div className='text-[#393939] text-[24px] font-semibold'>What is the name of your CRWD?</div>
            <input
                className="w-full px-4 mt-2 py-2 text-[20px] rounded-full border  focus:outline-none "
                type="text"
                name="cardNumber"
                placeholder="Your CRWD name"
            />

            <div className='text-[#393939] text-[24px] mt-5 font-semibold'>What is the purpose of your group?</div>
            <input
                className="w-full px-4 mt-2 py-2 text-[20px] rounded-full border  focus:outline-none "
                type="text"
                name="cardNumber"
                placeholder="Briefly describe your group and why you are fundraising."
            />

        <div className='text-[#393939] text-[24px] mt-5 font-semibold'>What would you like people to donate monthly?</div>

        <div  className='flex flex-row  items-center gap-2 mt-4'>
            <div onClick={()=>setOther(false)}  className={`rounded-xl px-5 py-4  flex items-center justify-center bg-[#EEE] ${!other ? 'border border-black' : ''}`}>
                 $5
            </div>
            <div onClick={()=>setOther(true)} className={`rounded-xl p-4 flex items-center justify-center bg-[#EEE] ${other ? 'border border-black' : ''}`}>
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
                className="bg-[#393939] mt-5 text-[20px] rounded-full cursor-pointer text-white py-3 w-full  hover:shadow-xl "
              >
                Continue
            </button>

        
            </div>





        </div>
      
    </div>
  )
}

export default StartCRWD;
