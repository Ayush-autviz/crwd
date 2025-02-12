import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./screens/Home";
import NonProfit from "./screens/NonProfit";
import Search from "./screens/Search";
import HelpingPeople from "./screens/HelpingPeople";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nonprofit" element={<NonProfit />} />
          <Route path="/search" element={<Search />} />
          <Route path="/help" element={<HelpingPeople />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
