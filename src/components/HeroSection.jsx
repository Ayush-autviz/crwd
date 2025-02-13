import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
  const [isSticky, setIsSticky] = useState(false)
  const buttonRef = useRef(null)
  const navigation = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set sticky on mobile screens (max-width: 768px)
        if (window.innerWidth <= 768) {
          setIsSticky(!entry.isIntersecting)
        }
      },
      { threshold: 0 },
    )

    if (buttonRef.current) {
      observer.observe(buttonRef.current)
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current)
      }
    }
  }, [])
  return (
    <div className="relative flex justify-center items-center bg-gradient-to-b from-gray-50 h-[700px] to-white px-4 ">
      <div>
        <img src="background.png" className="absolute w-full h-full inset-0"/>
      </div>
      {/* Decorative curved lines */}

      {/* Floating circular images */}
      <div className="absolute left-[7%] top-[10%]">
        <img
          src="home1.svg"
 
          className="h-[87px] w-[87px]  sm:h-[107px] sm:w-[107px] md:h-[116px] md:w-[116px] xl:h-[126px] xl:w-[126px]"
        />
      </div>
      <div className="absolute left-[6%] top-[33%]  sm:left-[13%] sm:top-[33%]">
        <img
          src="home2.svg"
 
          className=" h-[55px] w-[55px] sm:h-[70px] sm:w-[70px] md:h-[83px] md:w-[83px] xl:h-[93px] xl:w-[93px] "
        />
      </div>
      <div className="absolute left-[7%] bottom-[6%]  md:left-[15%] sm:bottom-[10%]">
        <img
          src="home3.svg"
          alt="Group discussion"
    
          className=" h-[120px] w-[120px]  sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] xl:h-[180px] xl:w-[180px]"
        />
      </div>
      <div className="absolute left-[5%] top-[47%]">
        <img
          src="arrowRight.png"
          alt="Team collaboration"
          className="w-[40px] sm:w-[60px] md:w-[80px]"
        />
      </div>
      <div className="absolute right-[7%] top-[8%] sm:top-[10%]">
        <img
          src="home4.svg"
          alt="Team meeting"
          className="h-[100px] w-[100px] sm:h-[124px] sm:w-[124px] md:h-[134px] md:w-[134px]  xl:h-[144px] xl:w-[144px]"
        />
      </div>

      <div className="absolute right-[5%] xl:right-[15%] bottom-[32%]">
        <img
          src="home5.svg"
          alt="Group discussion"
    
          className="md:h-[93px] md:w-[93px] h-[70px] w-[70px]"
        />
      </div>
      <div className="absolute right-[10%] bottom-[10%]">
        <img
          src="home6.svg"
          alt="Team collaboration"
          className="md:h-[108px] md:w-[108px]  h-[85px] w-[85px]"
        />
      </div>
      <div className="absolute right-[5%] top-[30%]">
        <img
          src="arrowLeft.png"
          alt="Team collaboration"
          className="w-[50px] sm:w-[80px] md:w-[90px] xl:w-[130px]"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col   items-center justify-center  max-w-[60%] mx-auto text-center">
        <h1 className="text-[30px]  sm:text-[40px] md:text-[50px] lg:text-[70px] font-extrabold  text-gray-900 mb-8">Your World Your Impact</h1>
        <p className="text-xs md:text-sm lg:text-lg text-gray-600 font-semibold mb-12 mx-auto ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
           ipsa quae  quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <button onClick={()=>{navigation('/start')}} ref={buttonRef} className="cursor-pointer h-11 w-fit items-center px-8 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 transition-shadow duration-200 border border-black">
          <div className="text-nowrap font-bold text-[16px] ">Start a</div>
          <img className="h-[13px] ms-[-3px] object-contain" src="crwd.png"/>
        </button>
      </div>
      {
        isSticky && <div className="w-full md:hidden shadow-xl fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-white flex justify-center items-center p-4">
        <button onClick={()=>{navigation('/start')}}  className="cursor-pointer h-11 w-full items-center px-8 py-1 gap-2 rounded-full flex flex-row justify-center  bg-white text-gray-900 transition-shadow duration-200 border border-black">
           <div className="text-nowrap font-[20px] ">Start a</div>
           <img className="h-[13px] ms-[-3px] object-contain" src="crwd.png"/>
         </button>
       </div>
      }

    </div>
  )
}

