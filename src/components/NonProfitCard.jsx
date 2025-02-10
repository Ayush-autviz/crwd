import { MapPin, UserRound } from 'lucide-react'
import React from 'react'

const crwds = [
    {
title:'Nonprofits Heading',
desc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
image:'np1.svg',
location:'New York',
members:45
    },
    {
        title:'Nonprofits Heading',
        desc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
        image:'np2.svg',
        location:'Paris',
        members:45
    },
    {
        title:'Nonprofits Heading',
        desc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
        image:'np3.svg',
        location:'Nigeria',
        members:40
    }
]

const NonProfitCard = ({item}) => {
  return (
    <div className='rounded-xl p-4  bg-white'>
        <img src={item.image} className='rounded-xl w-full max-h-[500px] object-contain'/>
        <div className='flex flex-col gap-4 mt-6 items-start'>
        <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
        </div>
        <div className='flex flex-row items-center gap-5 my-4'>
            <div className='flex flex-row items-center gap-2'>
            <MapPin size={18} />
            <div>
            {item.location}
            </div>
            </div>

            <div className='flex flex-row items-center gap-2'>
            <UserRound size={18} color="#000" />
            <div>
            {item.members} Members
            </div>
            </div>

        </div>
        <button className="px-8 py-3 bg-[#393939] hover:shadow-xl transition-shadow cursor-pointer rounded-full border border-gray-300 text-white font-medium">
          Donate Now
        </button>

        </div>
      
    </div>
  )
}

export default NonProfitCard
