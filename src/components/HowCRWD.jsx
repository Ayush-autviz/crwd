import React from 'react'

const HowCRWD = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
       <div className="text-center flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find your CRWD</h1>
        <p className="text-gray-600 text-center w-[80%]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className='xl:flex hidden  flex-row items-center justify-center gap-5'>
          <div className='flex flex-col justify-center items-center w-[18%]'>
            <img src='how1.svg' className='w-34 h-34 rounded-full'/>
            <div className="text-center flex flex-col justify-center items-center ">
            <h3 className="text-xl font-semibold mb-2">Choose Nonprofits</h3>
            <p className="text-gray-600  text-center">Choose from thousands of nonprofits to support</p>
        </div>
          </div>
          <img src='arrowup.svg' className='h-10 w-[23%] -mt-10 '/>
          <div className='flex flex-col justify-center items-center w-[18%]'>
            <img src='how1.svg' className='w-34 h-34 rounded-full'/>
            <div className="text-center flex flex-col justify-center items-center ">
            <h3 className="text-xl font-semibold mb-2">Create a Purpose</h3>
            <p className="text-gray-600  text-center">Tell the communnity why</p>
        </div>
          </div>
          <img src='arrowdown.svg' className='h-10 w-[23%] -mt-10  '/>
          <div className='flex flex-col justify-center items-center w-[18%]'>
            <img src='how1.svg' className='w-34 h-34 rounded-full'/>
            <div className="text-center flex flex-col justify-center items-center ">
            <h3 className="text-xl font-semibold mb-2">Celebrate and Grow</h3>
            <p className="text-gray-600  text-center">Track the impact of the group through updates.</p>
        </div>
          </div>

      </div>
   
      <div className='flex   xl:hidden flex-col mx-auto w-fit  items-start justify-center '>

          <div className='flex flex-row gap-5   justify-center items-center '>
            <img src='how1.svg' className='w-34 h-34 rounded-full'/>
            <div className=" flex flex-col   ">
            <h3 className="text-xl font-semibold mb-2">Choose Nonprofits</h3>
            <p className="text-gray-600  ">Choose from thousands of nonprofits to support</p>
        </div>
          </div>
          <div className='flex relative flex-row gap-5 justify-center  overflow-hidden  w-34 items-center'>
          <img src='Line.svg' className='h-30  '/>

          </div>
          <div className='flex flex-row gap-5 justify-center items-center'>
            <img src='how1.svg' className='w-34 h-34 rounded-full'/>
            <div className="flex flex-col  ">
            <h3 className="text-xl font-semibold mb-2">Create a Purpose</h3>
            <p className="text-gray-600  ">Tell the communnity why</p>
        </div>
          </div>
          <div className='flex flex-row gap-5 justify-center w-34 items-center'>
          <img src='Line.svg' className='h-30  '/>

          </div>
          <div className='flex flex-row gap-5 justify-center items-center'>
            <img src='how1.svg' className='w-34 h-34 rounded-full'/>
            <div className="flex flex-col ">
            <h3 className="text-xl font-semibold mb-2">Celebrate and Grow</h3>
            <p className="text-gray-600  ">Track the impact of the group through updates.</p>
        </div>
          </div>

      </div>
      


    </div>
  )
}

export default HowCRWD
