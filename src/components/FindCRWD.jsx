import React from 'react'
import CRWDcard from './CRWDcard'
import { useNavigate } from 'react-router-dom'

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
  const navigation= useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 mt-[30px] md:mt-[100px]">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">Find your CRWD</h1>
        <p className="text-[#393939] text-[12px]  md:text-xl">
          Check out some CRWD's. If you can't find one that's perfect for you then{" "}
          <a href="start" className="text-gray-900 underline font-bold">
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
        <button onClick={()=>{navigation("search")}} className="font-[20px]  cursor-pointer h-11 w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
          See more
        </button>
      </div>
    </div>
  )
}

export default FindCRWD
