

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import React from 'react'
import Home from './screens/Home';
import NonProfit from './screens/NonProfit';
import ScrollToTop from './ScrollToTop';
import MakeSecureDonation from './screens/MakeSecureDonation';
import Login from './screens/Login';
import StartCRWD from './screens/StartCRWD';
import StartCRWD2 from './screens/StartCrwd2';
import Atlanta from './screens/Atlanta';
import SignUp from './screens/SignUp';
import Settings from './screens/Settings';
import About from './screens/AboutUS';

import SearchScreen from './screens/Search';
import ContactUs from './screens/ContactUs';
import DonorProfile from './screens/DonorProfile';
import PrivacyPolicy from './screens/PrivactPolicy';
import TermsConditions from './screens/TermsConditions';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nonprofit" element={<NonProfit />} />
          <Route path="/donation" element={<MakeSecureDonation />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/start" element={<StartCRWD />} />
          <Route path="/start." element={<StartCRWD2 />} />
          <Route path="/crwd" element={<Atlanta />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/natalie-root" element={<DonorProfile />} />
          <Route path="/profile" element={<DonorProfile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
        <ScrollToTop />
      </Router>


    </div>
  )
}

export default App

