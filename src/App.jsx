import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import PageTransition from "./components/PageTransition";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </PageTransition>
      </div>
    </Router>
  );
};

export default App;
