import { Plus, UserRound } from 'lucide-react'
import React from 'react'

const CRWDcard = ({item}) => {
  return (
    <div className='bg-[#F3F2F2] rounded-xl flex flex-row gap-4 h-[250px] p-5'>
        <div className='rounded-xl flex items-center justify-center w-[38%] p-5 bg-white'>
           <img src={item.logo} className='h-[120px] w-[120px]' />
        </div>

        <div className="flex flex-col w-[65%] justify-between py-4">
        <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
            <p className="text-gray-600 line-clamp-2">{item.description}</p>
          </div>
          <div className="flex items-center gap-4  ">
              <div className='flex flex-row items-center gap-3'>
              <UserRound size={18} color="#000" />
               <div className='flex flex-row items-center justify-center gap-2'>
                <div>  {item.memberCount} </div>
               
                <span className='hidden sm:block'> Members</span> 
               </div>
              </div>

              <div className='flex flex-row items-center gap-3'>
               <div className='flex flex-row items-center justify-center gap-2' >
                <div>
                Join 
                </div>
              
                 <span className='hidden sm:block'>CRWD</span>
               </div>
               <Plus size={18} color="#000" />
              </div>

          </div>
        </div>
      
    </div>
  )
}

export default CRWDcard
