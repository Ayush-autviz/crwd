import { MapPin, UserRound } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigation = useNavigate();

  const navigateNonprofit = ()=>{
        navigation('/nonprofit');
  }
  return (
    <div className='rounded-xl p-4  bg-white'>
        <img src={item.image} className='rounded-xl w-full md:max-h-[500px] object-cover md:object-contain'/>
        <div className='flex flex-col gap-4 mt-6 items-start'>
        <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-[12px] md:text-[16px] text-gray-600">{item.desc}</p>
        </div>
        <div className='flex flex-row items-center gap-5 my-4'>
            <div className='flex flex-row items-center gap-2'>
            <MapPin className="h-3 w-3 md:h-6 md:w-6" />
            <div className="text-[12px] md:text-[16px]">
            {item.location}
            </div>
            </div>

            <div className='flex flex-row items-center gap-2'>
            <img src='people.svg' className="h-3 w-3 md:h-6 md:w-6"/>
            <div  className="text-[12px] md:text-[16px]">
            {item.members} Members
            </div>
            </div>

        </div>
        <button onClick={navigateNonprofit} className="text-[12px] md:text-[18px] px-4 py-2 md:px-8 md:py-3 bg-[#393939] hover:shadow-xl transition-shadow cursor-pointer rounded-full border border-gray-300 text-white font-medium">
          Donate Now
        </button>

        </div>
      
    </div>
  )
}

export default NonProfitCard
