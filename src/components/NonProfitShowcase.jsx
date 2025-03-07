import React, { useState, useRef } from 'react';

const NonprofitShowcase = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef(null);

  const nonprofits = [
    {
      id: 1,
      name: 'C5 Youth Foundation of Georgia',
      location: 'Atlanta, GA',
      logo: '/logos/georgia.png',
      gradient: 'from-rose-100 to-orange-50'
    },
    {
      id: 2,
      name: 'C5 Youth Foundation of Georgia',
      location: 'Atlanta, GA',
      logo: '/logos/silence.png',
      gradient: 'from-violet-100 to-purple-50'
    },
    {
      id: 3,
      name: 'C5 Youth Foundation of Georgia',
      location: 'Atlanta, GA',
      logo: '/logos/camp.png',
      gradient: 'from-emerald-100 to-green-50'
    },
    {
      id: 4,
      name: 'C5 Youth Foundation of Georgia',
      location: 'Atlanta, GA',
      logo: '/logos/georgia.png',
      gradient: 'from-blue-100 to-sky-50'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <div className="text-center mb-12">
      <h1 className="text-2xl text-center md:text-5xl font-bold text-[#393939] mb-2">Nonprofits we support</h1>

      </div>

      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 opacity-100 group-hover:opacity-100 transition-opacity z-20 hover:bg-gray-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 opacity-100 group-hover:opacity-100 transition-opacity z-20 hover:bg-gray-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* <div className="absolute inset-y-0 left-0 w-22 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-22 bg-gradient-to-l from-white to-transparent z-10" /> */}
        
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseEnter={() => setIsScrolling(true)}
          onMouseLeave={() => setIsScrolling(false)}
        >
          <div className="flex space-x-8 pb-8 pt-4 px-6">
            {nonprofits.map((nonprofit) => (
              <div
                key={nonprofit.id}
                className="flex-none w-76 md:w-96 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`rounded-2xl overflow-hidden  bg-[#F3F3F2]`}>
                  <div className="p-8">
                    <div className="w-20 h-20 mb-6 rounded-xl overflow-hidden bg-white p-3 shadow-md transform  transition-transform">
                      <img
                        src={nonprofit.logo}
                        alt={`${nonprofit.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-[#373737] font-semibold text-sm md:text-xl my-4">
                      {nonprofit.name}
                    </h3>
                    <div className="flex items-center text-gray-600 bg-white/50 w-fit px-4 py-2 rounded-full">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {nonprofit.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonprofitShowcase;