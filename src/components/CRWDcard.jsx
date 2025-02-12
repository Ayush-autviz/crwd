import { Plus, UserRound } from 'lucide-react'
import React from 'react'

const CRWDcard = ({item}) => {
  return (
    <div className='bg-[#F3F2F2] rounded-xl flex flex-row gap-4 h-[250px] p-5'>
        <div className='rounded-xl flex items-center justify-center w-[38%] p-5 bg-white'>
           <img src={item.logo} className='h-[120px] w-[120px]' />
        </div>

        <div className="flex flex-col w-[65%] justify-center gap-y-6 py-4">
        <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#373737] line-clamp-2">{item.title}</h3>
            <p className="text-[#6B6B6B] font-normal text-[16px] line-clamp-2">{item.description}</p>
          </div>
          <div className="flex items-center gap-x-8  ">
              <div className='flex flex-row items-center gap-x-2  '>
              <UserRound size={15} color="#000" strokeWidth={3} />
               <div className='flex flex-row items-center '>               
                <span className='text-[18px] font-semibold'> {item.memberCount}  Members</span> 
               </div>
              </div>

              <div className='flex flex-row items-center gap-1'>
               <div className='flex flex-row items-center justify-center gap-1' >
                 <span className='text-[18px] font-semibold'>Join CRWD</span>
               </div>
               <Plus size={16} color="#000" strokeWidth={3} />
              </div>

          </div>
        </div>
      
    </div>
  )
}

export default CRWDcard


