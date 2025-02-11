import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FindCRWD from '../components/FindCRWD'
import FindNNonProfits from '../components/FindNNonProfits'
import WhatIsCRWD from '../components/WhatIsCRWD'
import Footer from '../components/Footer'
import HowCRWD from '../components/HowCRWD'

const Home = () => {
  return (
    <div>
         
   <Header/>
   <HeroSection/>
   <FindCRWD/>
   <HowCRWD/>
   <div className='bg-[#F3F3F2]'>
   <FindNNonProfits/>
   </div>
   <WhatIsCRWD/>
   <Footer/>
    
    </div>
  )
}

export default Home
