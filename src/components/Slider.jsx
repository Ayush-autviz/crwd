import { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "CRWDs Group heading here",
      image: "/api/placeholder/400/300",
    },
    {
      title: "CRWDs Group heading here",
      image: "/api/placeholder/400/300",
    },
    {
      title: "CRWDs Group heading here",
      image: "/api/placeholder/400/300",
    },
    {
      title: "CRWDs Group heading here",
      image: "/api/placeholder/400/300",
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-4">CRWDs</h1>
      <p className="text-center mb-8 text-gray-600 max-w-3xl mx-auto">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
      </p>
      
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-2">
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <div className="mt-2 bg-green-500 h-2 w-1/3 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;