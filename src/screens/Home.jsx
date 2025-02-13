import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FindCRWD from '../components/FindCRWD'
import FindNNonProfits from '../components/FindNNonProfits'
import WhatIsCRWD from '../components/WhatIsCRWD'
import Footer from '../components/Footer'
import HowCRWD from '../components/HowCRWD'
import Frame from '../components/Frame'

const Home = () => {
  return (
    <div className='mt-[70px]'>   
   <Header/>
   <HeroSection/>
   <FindCRWD/>
   <HowCRWD/>
   <div className='bg-[#F3F3F2]'>
   <FindNNonProfits/>
   </div>
   <Frame/>
   <div className='bg-[#F3F3F2]'>
   <WhatIsCRWD/>
   </div>
   <Footer/>
    </div>
  )
}

export default Home
