import React from 'react'
import CRWDcard from './CRWDcard'

const crwds = [
    {
      logo: "crwd1.svg",
      title: "CRWDs Group heading here",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      memberCount: 56,
    },
    {
      logo: "crwd2.svg",
      title: "CRWDs Group heading here",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      memberCount: 56,
    },
    {
      logo: "crwd3.svg",
      title: "CRWDs Group heading here",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      memberCount: 56,
    },
    {
      logo: "crwd4.svg",
      title: "CRWDs Group heading here",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      memberCount: 56,
    },
  ]

const FindCRWD = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find your CRWD</h1>
        <p className="text-gray-600">
          Check out some CRWD's. If you can't find one that's perfect for you then{" "}
          <a href="#" className="text-gray-900 underline font-medium">
            Start a CRWD
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {
            crwds.map((item,index)=>{
               return <CRWDcard key={index} item={item} />
            })
         }
         
   
      </div>

      <div className="flex justify-center mt-12 ">
        <button className="px-8 py-3 rounded-full border hover:shadow-xl transition-shadow cursor-pointer   border-gray-300 text-gray-700 hover:text-gray-900 font-medium">
          See more
        </button>
      </div>
    </div>
  )
}

export default FindCRWD
