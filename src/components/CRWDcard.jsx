import { Plus, UserRound } from 'lucide-react'
import React from 'react'

const CRWDcard = ({item}) => {
  return (
    <div className='bg-[#F3F2F2] rounded-xl flex flex-col  md:flex-row gap-4  p-5'>
        <div className='rounded-xl flex items-center justify-center  p-5 px-10 bg-white'>
           <img src={item.logo} className='h-[180px] w-[180px]' />
        </div>
        <div className="flex flex-col  justify-center gap-y-6 py-4">
        <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#373737] line-clamp-2">{item.title}</h3>
            <p className="text-[#6B6B6B] font-normal text-[12px] md:text-[16px] ">{item.description}</p>
          </div>
          <div className="flex flex-row items-center flex-wrap  gap-6  ">
              <div className='flex flex-row items-center gap-x-2  '>
            
               <div className='flex flex-row items-center  '>               
                <span className='text-[12px] md:text-[18px] text-nowrap font-[700px] '> {item.memberCount}  Members</span> 
               </div>
               <div class="flex -space-x-3 md:-space-x-4 rtl:space-x-reverse">
    <img class="w-5 h-5 md:w-7  md:h-7 border border-white rounded-full " src="home1.svg" />
    <img class="w-5 h-5 md:w-7  md:h-7 border border-white rounded-full " src="home1.svg" />
    <img class="w-5 h-5 md:w-7  md:h-7 border border-white rounded-full " src="home1.svg" />
    <img class="w-5 h-5 md:w-7  md:h-7 border border-white rounded-full " src="home1.svg" />
</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CRWDcard


