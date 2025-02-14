import { Plus, UserRound } from 'lucide-react'
import React from 'react'

const likedMember = [
  { id: 1, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 1" },
  { id: 2, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 2" },
  { id: 3, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww", alt: "Person 3" },
]

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
               <div className="flex items-center justify-center  space-x-[-7px] md:space-x-[-10px]">
                    {likedMember.map((member) => (
                                                <div key={member.id} className="relative w-5 h-5 md:w-8 md:h-8">
                                                    <img
                                                        src={member.image}
                                                        alt={member.alt}
                                                        className="w-full h-full object-cover rounded-full border-1 md:border-3 border-white shadow-lg"
                                                    />
                                                </div>
                     ))}
               </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CRWDcard


