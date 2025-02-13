import React from 'react'
import NonProfitCard from './NonProfitCard'

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

const FindNNonProfits = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 ">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">Find Nonprofits</h1>
        <p className="text-[12px] md:text-2xl text-gray-600">
          Check out some CRWD's. If you can't find one that's perfect for you then{" "}
          <a href="#" className="text-gray-900 underline font-medium">
            Start a CRWD
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
            crwds.map((item,index)=>{
              return   <NonProfitCard key={index} item={item}/>
            })
        }
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 rounded-full border hover:shadow-xl transition-shadow cursor-pointer   text-gray-700 hover:text-gray-900 font-medium">
          See more
        </button>
      </div>
      
    </div>
  )
}

export default FindNNonProfits
