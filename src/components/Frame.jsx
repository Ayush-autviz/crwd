import React from 'react'

const Frame = () => {
  return (
    <div className='my-10 mx-10'>
        <div className='w-full relative h-[200px] flex justify-center items-center '>
              <img className='w-full h-full absolute -z-10  inset-0 ' src='Frame.png'/>
              <div className='flex flex-col justify-center items-center gap-7'>
                <div className='text-center w-[60%] text-2xl text-white font-semibold'>
                  Lead With Purpose Make an impact
                </div>

                <button className="cursor-pointer w-fit items-center px-8 h-12 gap-2 rounded-full flex flex-row bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200">
                 Start a<img className="h-12 w-12 object-contain" src="crwd.png"/>
                </button>   

              </div>
        </div>
    </div>
  )
}

export default Frame
