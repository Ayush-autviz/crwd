import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FindCRWD from './components/FindCRWD'
import HowCRWD from './components/HowCRWD'
import FindNNonProfits from './components/FindNNonProfits'
import WhatIsCRWD from './components/WhatIsCRWD'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <HeroSection/>
   <FindCRWD/>
   <HowCRWD/>
   <div className='bg-[#F3F3F2]'>
   <FindNNonProfits/>
   </div>
   <WhatIsCRWD/>
   <Footer/>
    </>
  )
}

export default App
