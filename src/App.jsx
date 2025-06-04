import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import PageTransition from "./components/PageTransition";
import Regist from "./pages/Regist";
import Result from "./pages/Result";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/regist" element={<Regist/>}/>
            <Route path="/result" element={<Result/>}/>
          </Routes>
        </PageTransition>
      </div>
    </Router>
  );
};

export default App;
