

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './screens/Home';
import NonProfit from './screens/NonProfit';

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nonprofit" element={<NonProfit />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App

