import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MakeSecureDonation = () => {
  const amounts = [5, 10, 15, 20, 25];
  const [paymentMethod, setPaymentMethod] = useState('apple-pay');
  const [amount,setAmount] = useState(5);
  const [type,setType] = useState('once');
  return (
    <div className='mt-[70px]'>
      <Header/>
      <div className='relative  w-full flex justify-center items-center flex-col '>
      <img src="background.png" className="absolute -z-10 w-full h-full inset-0"/>
      <h1 className=" text-2xl md:text-5xl  font-bold text-gray-900 mt-10 mb-10">Make a secure Donation</h1>

      <div className='rounded-2xl p-5 md:p-7 bg-white w-[95%] md:w-[65%] xl:w-[40%]'>

         <div className='flex flex-row justify-center items-center gap-4'>
         <button onClick={()=>setType('once')}       className={`
        px-8 flex-1 py-3 
        text-[14px]
        text-nowrap
        md:text-xl
        rounded-full border 
        
        transition-shadow 
        cursor-pointer 
        font-semibold
        ${type === 'once' 
          ? 'bg-[#393939] text-white border-gray-300' 
          : 'bg-white text-gray-700 border-gray-300'
        }
      `}
    >
         
         
          Give Once
        </button>
        <button onClick={()=>setType('month')}       className={`
        px-8 flex-1 py-3 
        text-[14px]
        md:text-xl
        rounded-full border 
        
        transition-shadow 
        cursor-pointer 
        font-semibold
        ${type === 'month' 
          ? 'bg-[#393939] text-white border-gray-300' 
          : 'bg-white text-gray-700 border-gray-300'
        }
      `}
    >
          Monthly
        </button>
         </div>


         <div className='flex flex-col md:flex-row items-center gap-4 mt-5  '>
            <div className='rounded-xl border border-gray-300 h-[100px] w-full md:w-[150px]    flex justify-center items-center p-4    '>
                  <img className='h-full w-full'  src='crwd1.svg'/>
            </div>
            <div className='flex flex-col md:max-w-[60%]   gap-2 '>
            <h3 className="text-2xl  text-center md:text-left font-semibold text-gray-900 line-clamp-2">You’re supporting Unicef USA</h3>
            </div>

         </div>

         {
          type === 'once' ? (
            <h3 className=" text-[17px] md:text-xl font-semibold text-gray-900 mt-5">Choose an amount for 1-time donation</h3>
          ) : (
            <h3 className="text-[17px] md:text-xl font-semibold text-gray-900 mt-5">Choose an amount for recurring donation</h3>
          )
         }


<div className="flex flex-wrap gap-2 mt-5">
    {amounts.map((amoun) => (
      <div
        key={amoun}
        onClick={() => setAmount(amoun)}
        className={`
          cursor-pointer rounded-xl py-4 px-5 flex justify-center items-center
          text-[14px] md:text-lg
          ${amoun === amount ? 'bg-[#393939] text-white' : 'bg-[#F3F3F2]'}
        `}
      >
        ${amoun}
      </div>
    ))}
  </div>

         <div className="mt-6">
        <input 
          type="text"
          value={amount}
          onChange={(e)=>{setAmount(e.target.value)}}
          placeholder="USD $"
          className="w-full text-[14px] md:text-xl px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
        />
        </div>

        <h3 className=" text-[17px] md:text-xl font-semibold text-gray-900 my-5">Payment Method</h3>

        <div className='border border-gray-300 p-4 mb-4 rounded-xl'>
        <label className="flex items-center space-x-3  mx-1">
              <input
                type="radio"
                name="payment"
                value="apple-pay"
                checked={paymentMethod === 'apple-pay'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 disabled:border-[#393939] accent-[#393939] "
              />
              <div className='flex flex-row justify-center items-center gap-2'>
              <img src='apple.svg'  className='h-5 w-5 md:h-6 md:w-6 mb-[2px] '/>
              <span className="text-[15px] md:text-lg ">Pay</span>

              </div>
             
        </label>

        </div>

        <div className='border border-gray-300 p-4 rounded-xl'>
        <label className="flex items-center space-x-3  mx-1">
              <input
                type="radio"
                name="payment"
                value="credit-debit"
                checked={paymentMethod === 'credit-debit'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 disabled:border-[#393939] accent-[#393939]"
              />
              <span className="text-[15px] md:text-lg">Credit Or debit card</span>
            </label>
        {
            paymentMethod === 'credit-debit' &&   <div className="flex flex-col gap-4 mt-4">
            <div className="relative ">
            <input
                className="w-full text-[14px] md:text-xl px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                // value={cardNumber}
                // onChange={handleInputChange}
              />
             </div>
             <div className="relative flex  flex-row gap-3 ">
               <input
                 className="w-full px-4 py-3 text-[14px] md:text-xl  rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                 type="number"
                 name="email"
                 placeholder="MM"
               />
               <input
                 className="w-full px-4 py-3 text-[14px] md:text-xl rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                 type="number"
                 name="email"
                 placeholder="YY"
               />
                <input
                 className="w-full px-4 py-3 text-[14px] md:text-xl rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                 type="text"
                 name="text"
                 placeholder="CVV"
               />
             </div>
             <div className="relative">
               <input
                 className="w-full px-4 py-3 text-[14px] md:text-xl rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                 type="text"
                 name="First Name"
                 placeholder="First Name"
               />
             </div>
             <div className="relative">
               <input
                 className="w-full px-4 text-[14px] md:text-xl py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                 type="text"
                 name="Last Name"
                 placeholder="Last Name"
               />
             </div>
        
                </div>
        }


        </div>

        {
          type === 'month' && (
            <div className='text-[12px] mt-4'>
            By choosing the payment method above, you agree to a recurring monthly charge of until it is canceled by you or us as per our Terms.
            </div>
          )
        }





        <button
            //  onClick={()=>{setSuccess(true),setActivated(true)}}
                className="bg-[#393939] mt-5 text-[14px] md:text-xl text rounded-full cursor-pointer text-white py-3 w-full  "
              >
                Donate
        </button>

        <div className='text-[12px] mt-4'>
        Your donation is tax deductible to the fullest extent of the law. Grapevine charges no donation fees, but our payment processor charges a discounted 2.2% + 30¢ credit and debit card fee (3.5% for AmEx and +1% for non-US cards), or 0.8% up to $5 for bank transfers.
        </div>



      </div>

      </div>
    </div>
  )
}

export default MakeSecureDonation
