import { ChevronRight } from 'lucide-react';
import React from 'react';

const CRWDSection = ({ title, description, onClick }) => (
  <div 
    className="border-b border-gray-200 py-6 cursor-pointer "
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <div className="space-y-1 w-[100%]">
        <h2 className="text-center md:text-left text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-center md:text-left  text-gray-600 ">{description}</p>
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
      description: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      title: "Friends and Family",
      description: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      title: "Charity",
      description: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-[#F3F3F2]">

      <div className="text-center mb-1">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2">What is CRWD?</h1>
      </div>

          <div className="flex mx-auto">
          <div className="space-y-2 md:pl-5 flex justify-center   items-center flex-col">
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
  );
};

export default WhatIsCRWD;