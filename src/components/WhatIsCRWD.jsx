import { ChevronRight } from 'lucide-react';
import React from 'react';

const CRWDSection = ({ title, description, onClick }) => (
  <div 
    className="border-b border-gray-200 py-6 cursor-pointer "
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <div className="space-y-1 w-[90%]">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 max-w-2xl">{description}</p>
      </div>
      {/* <div className="h-8 w-8 bg-[#393939] rounded-full flex justify-center items-center">
      <ChevronRight color={"#fff"} />
      </div> */}
    </div>
  </div>
);

const WhatIsCRWD = () => {
  const sections = [
    {
      title: "Yourself",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
    {
      title: "Friends and Family",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
    {
      title: "Charity",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-[#F3F3F2]">

      <div className="text-center mb-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">What is CRWD?</h1>
      </div>

          <div className="flex mx-auto">
            <div className=" p-8">
              <div className="space-y-2 pl-5 flex justify-center   items-center flex-col">
                {sections.map((section, index) => (
                  <CRWDSection
                    key={index}
                    title={section.title}
                    description={section.description}
                    onClick={() => console.log(`Clicked ${section.title}`)}
                  />
                ))}
              </div>
            </div>
          </div>
    </div>
  );
};

export default WhatIsCRWD;