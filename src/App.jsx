

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import React from 'react'
import Home from './screens/Home';
import NonProfit from './screens/NonProfit';
import ScrollToTop from './ScrollToTop';
import MakeSecureDonation from './screens/MakeSecureDonation';

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nonprofit" element={<NonProfit />} />
        <Route path="/donation" element={<MakeSecureDonation />} />
      </Routes>
      <ScrollToTop />
     </Router>
     
    
    </div>
  )
}

export default App

