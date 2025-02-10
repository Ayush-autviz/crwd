import { Plus, UserRound } from 'lucide-react'
import React from 'react'

const CRWDcard = ({item}) => {
  return (
    <div className='bg-[#F3F2F2] rounded-xl flex flex-row gap-4 h-[250px] p-5'>
        <div className='rounded-xl flex items-center justify-center w-[35%] bg-white'>
           <img src={item.logo} className='h-[120px] w-[120px]' />
        </div>

        <div className="flex flex-col w-[65%] justify-between py-4">
        <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className="flex items-center gap-4  ">
              <div className='flex flex-row items-center gap-3'>
              <UserRound size={18} color="#000" />
               <div>
                {item.memberCount} Members
               </div>
              </div>

              <div className='flex flex-row items-center gap-3'>
               <div>
                 Join CRWD
               </div>
               <Plus size={18} color="#000" />
              </div>

          </div>
        </div>
      
    </div>
  )
}

export default CRWDcard
