

export default function HeroSection() {
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
 
          className="rounded-full border-4 h-[87px] w-[87px]  sm:h-[107px] sm:w-[107px] md:h-[116px] md:w-[116px] xl:h-[126px] xl:w-[126px] border-white shadow-lg"
        />
      </div>
      <div className="absolute left-[7%] top-[33%]  sm:left-[13%] sm:top-[33%]">
        <img
          src="home2.svg"
 
          className="rounded-full border-4 h-[55px] w-[55px] sm:h-[70px] sm:w-[70px] md:h-[83px] md:w-[83px] xl:h-[93px] xl:w-[93px] border-white shadow-lg"
        />
      </div>
      <div className="absolute left-[7%] bottom-[6%]  md:left-[15%] sm:bottom-[10%]">
        <img
          src="home3.svg"
          alt="Group discussion"
    
          className="rounded-full border-4 h-[120px] w-[120px]  sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] xl:h-[180px] xl:w-[180px]  border-white shadow-lg"
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
          className="rounded-full h-[100px] w-[100px] sm:h-[124px] sm:w-[124px] md:h-[134px] md:w-[134px]  xl:h-[144px] xl:w-[144px] border-4 border-white shadow-lg"
        />
      </div>

      <div className="absolute right-[7%] xl:right-[15%] bottom-[32%]">
        <img
          src="home5.svg"
          alt="Group discussion"
    
          className="rounded-full border-4 md:h-[93px] md:w-[93px] h-[70px] w-[70px] border-white shadow-lg"
        />
      </div>
      <div className="absolute right-[10%] bottom-[10%]">
        <img
          src="home6.svg"
          alt="Team collaboration"
          className="rounded-full border-4 md:h-[108px] md:w-[108px]  h-[85px] w-[85px] border-white shadow-lg"
        />
      </div>
      <div className="absolute right-[5%] top-[30%]">
        <img
          src="arrowLeft.png"
          alt="Team collaboration"
          className="w-[60px] sm:w-[80px] md:w-[90px] xl:w-[130px]"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col   items-center justify-center  max-w-[60%] mx-auto text-center">
        <h1 className="text-[30px]  sm:text-[40px] md:text-[50px] lg:text-[70px] font-bold tracking-tight text-gray-900 mb-8">Your World Your Impact</h1>
        <p className="text-xs md:text-sm lg:text-lg text-gray-600 mb-12 mx-auto ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
           ipsa quae  quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <button className="cursor-pointer h-10 w-40 items-center px-6 py-1 gap-2 rounded-full flex flex-row bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200">
          <div className="text-nowrap">Start a</div><img className="h-13 w-13" src="logo.svg"/>
        </button>
      </div>
    </div>
  )
}

