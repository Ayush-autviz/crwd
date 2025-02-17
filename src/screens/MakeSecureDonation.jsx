import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Header2 from '../components/Header2';

const MakeSecureDonation = () => {
  const amounts = [5, 10, 15, 20, 25,30];
  const [paymentMethod, setPaymentMethod] = useState('apple-pay');
  const [amount,setAmount] = useState(5);
  const [type,setType] = useState('once');

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    nameOnCard: '',
    month: '',
    year: '',
    cvv: '',
    country: '',
    postalCode: ''
  });
  
  const [useBillingName, setUseBillingName] = useState(false);
  
  // Effect to update name on card whenever first name or last name changes
  useEffect(() => {
    if (useBillingName) {
      setFormData(prev => ({
        ...prev,
        nameOnCard: `${prev.firstName} ${prev.lastName}`.trim()
      }));
    }
  }, [formData.firstName, formData.lastName, useBillingName]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setUseBillingName(checked);
    
    if (checked) {
      // Immediately update name on card when checkbox is checked
      setFormData(prev => ({
        ...prev,
        nameOnCard: `${prev.firstName} ${prev.lastName}`.trim()
      }));
    }
  };
  return (
    <div className='mt-[70px]'>
      <Header2/>
      <div className='relative  w-full flex justify-center items-center flex-col '>
      <img src="background.png" className="absolute -z-10 w-full h-full inset-0"/>
      <div className='flex flex-col justify-center items-center gap-4 '>
      <h1 className=" text-xl md:text-3xl  font-bold text-gray-900 mt-10 ">Choose your donation amount for</h1>
      <img src='crwd1.svg' className='h-25 w-25'/>
      <h1 className=" text-xl md:text-3xl  font-bold text-gray-900 mb-10">Unicef USA</h1>
      </div>

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


         {/* <div className='flex flex-col md:flex-row items-center gap-4 mt-5  '>
            <div className='rounded-xl border border-gray-300 h-[100px] w-full md:w-[150px]    flex justify-center items-center p-4    '>
                  <img className='h-full w-full'  src='crwd1.svg'/>
            </div>
            <div className='flex flex-col md:max-w-[60%]   gap-2 '>
            <h3 className="text-2xl  text-center md:text-left font-semibold text-gray-900 line-clamp-2">You’re supporting Unicef USA</h3>
            </div>

         </div> */}

         {
          type === 'once' ? (
            <h3 className=" text-[17px] md:text-xl font-semibold text-gray-900 mt-5">Choose an amount for 1-time donation</h3>
          ) : (
            <h3 className="text-[17px] md:text-xl font-semibold text-gray-900 mt-5">Choose an amount for recurring donation</h3>
          )
         }


<div className="grid grid-cols-3 gap-2 mt-5">
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

         {/* <div className="mt-6">
        <input 
          type="text"
          value={amount}
          onChange={(e)=>{setAmount(e.target.value)}}
          placeholder="$ Choose a donation amount"
          className="w-full text-[14px] font-semibold md:text-xl px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
        />
        </div> */}

        <div className="mt-6 relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2  font-semibold text-[14px] md:text-xl">
        $
      </span>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Choose a donation amount"
        className="w-full text-[14px] font-semibold md:text-xl pl-8 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
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
            <div className="relative">
              <input
                className="w-full text-[14px] md:text-xl px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="text"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="relative">
              <input
                className="w-full text-[14px] md:text-xl px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="relative">
              <input
                className="w-full text-[14px] md:text-xl px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="flex items-center gap-2 pl-3">
              <input
                type="checkbox"
                checked={useBillingName}
                onChange={handleCheckboxChange}
                className="w-[18px] h-[18px] rounded-[5px] border-2 border-[#393939] accent-[#393939]"
              />
              <div className="text-[15px] md:text-lg">Use as billing name</div>
            </div>
            
            <div className="relative flex flex-row gap-3">
              <input
                className="w-full px-4 py-3 text-[14px] md:text-xl rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="number"
                name="month"
                placeholder="MM"
                value={formData.month}
                onChange={handleInputChange}
              />
              <input
                className="w-full px-4 py-3 text-[14px] md:text-xl rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="number"
                name="year"
                placeholder="YY"
                value={formData.year}
                onChange={handleInputChange}
              />
              <input
                className="w-full px-4 py-3 text-[14px] md:text-xl rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="relative">
              <input
                className="w-full px-4 py-3 text-[14px] md:text-xl rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="text"
                name="nameOnCard"
                placeholder="Name on card"
                value={formData.nameOnCard}
                onChange={handleInputChange}
                readOnly={useBillingName}
              />
            </div>
            
            <div className="relative">
              <input
                className="w-full px-4 text-[14px] md:text-xl py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="relative">
              <input
                className="w-full px-4 text-[14px] md:text-xl py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        }


        </div>

        {
          type === 'month' && (
            <div className='text-[12px] mt-4 px-2 '>
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

        <div className='text-[12px] mt-4 px-2'>
        Your donation is tax deductible to the fullest extent of the law. Grapevine charges no donation fees, but our payment processor charges a discounted 2.2% + 30¢ credit and debit card fee (3.5% for AmEx and +1% for non-US cards), or 0.8% up to $5 for bank transfers.
        </div>



      </div>
      <div className='w-full mt-15 h-10  flex justify-center items-center py-20  bg-[#E4E4E4] '>
            <img src='crwdC.svg' className='h-12 w-12'/>
      </div>

      </div>
    </div>
  )
}

export default MakeSecureDonation
