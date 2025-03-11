import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigate();

  const cards = [
    {
      title: "CRWDs Group heading here",
      image: "card1.svg",
    },
    {
      title: "CRWDs Group heading here",
      image: "card2.svg",
    },
    {
      title: "CRWDs Group heading here",
      image: "np1.svg",
    },
    {
      title: "CRWDs Group heading here",
      image: "card1.svg",
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
    <div className="max-w-6xl mx-auto px-4 my-10">
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-4">CRWDs</h1>
      <p className="text-[12px] text-center md:text-[20px] mb-8 text-gray-600 max-w-3xl mx-auto">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
      </p>
      
      <div className="relative md:mx-10 mt-10">
        <div className="overflow-hidden">
        <div
  className="flex transition-transform duration-300 ease-in-out"
  style={{
    transform: `translateX(-${
      window.innerWidth >= 1280 // XL screens (>=1280px)
        ? currentIndex * 33
        : window.innerWidth >= 768 // MD to LG screens (>=768px)
        ? currentIndex * 50
        : currentIndex * 100 // Below MD (<768px)
    }%)`
  }}
>
 
            {cards.map((card, index) => (
              <div key={index} className="w-full  md:w-1/2 xl:w-1/3 flex-shrink-0 px-2">
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                  <img  
                    onClick={()=>{navigation("/crwd", { state: { image: card.image } })}}
                    src={card.image} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-74 object-cover cursor-pointer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <div className="mt-2 bg-green-500 h-2 w-1/3 rounded"></div>
                  </div>
                  <button 
          className=" w-8 h-8 absolute top-4 right-4 cursor-pointer bg-white hover:shadow-xl rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-row justify-center mt-5 items-center gap-4'>

        <button 
          onClick={prevSlide}
          className=" w-10 h-10 cursor-pointer bg-white hover:shadow-xl rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className=" w-10 h-10 cursor-pointer bg-white hover:shadow-xl rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        </div>
      </div>
    </div>
  );
};

export default Slider;