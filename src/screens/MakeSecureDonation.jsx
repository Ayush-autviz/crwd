import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MakeSecureDonation = () => {
  return (
    <div>
      <Header/>
      <div className='relative  w-full flex justify-center items-center flex-col '>
      <img src="background.png" className="absolute -z-10 w-full h-full inset-0"/>
      <h1 className="text-4xl font-bold text-gray-900 mt-10 mb-4">Make a secure Donation</h1>

      <div className='rounded-2xl p-7 bg-white w-[50%]'>

         <div className='flex flex-row justify-center items-center gap-4'>
         <button className="px-8 flex-1 py-3 rounded-full border hover:shadow-xl bg-[#393939] transition-shadow cursor-pointer   border-gray-300 text-white font-medium">
          Give Once
        </button>
        <button className="px-8 py-3 flex-1 rounded-full border hover:shadow-xl transition-shadow cursor-pointer   border-gray-300 text-gray-700 hover:text-gray-900 font-medium">
          Monthly
        </button>
         </div>


         <div className='flex flex-row justify-center items-center gap-4 mt-5'>
            <div className='rounded-xl border border-gray-300 flex justify-center items-center p-3 w-[40%] '>
                  <img className='h-18 w-18' src='crwd1.svg'/>
            </div>
            <div className='flex flex-col gap-2'>
            <h3 className="text-xl font-semibold text-gray-900">You’re supporting Unicef USA</h3>
            <p className="text-gray-600 text-sm line-clamp-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
            </div>

         </div>

         <h3 className="text-xl font-semibold text-gray-900 mt-5">Choose an amount</h3>

         <div className='flex flex-row items-center gap-4  mt-5'>
             <div className='bg-[#F3F3F2] rounded-xl w-14 h-14 flex justify-center items-center'>
                    $5
             </div>
             <div className='bg-[#F3F3F2] rounded-xl w-14 h-14 flex justify-center items-center'>
                    $10
             </div>
             <div className='bg-[#F3F3F2] rounded-xl w-14 h-14 flex justify-center items-center'>
                    $15
             </div>
             <div className='bg-[#F3F3F2] rounded-xl w-14 h-14 flex justify-center items-center'>
                    $20
             </div>
         </div>

         <div className="mt-6">
        <input 
          type="text"
          placeholder="USD $"
          className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
        />
        </div>

      </div>

      </div>
      <Footer/>
    </div>
  )
}

export default MakeSecureDonation
