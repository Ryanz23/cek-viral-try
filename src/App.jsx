import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navigation"; // Now imports the modular Nav
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import PageTransition from "./components/PageTransition";
import Regist from "./pages/Regist";
import Result from "./pages/Result";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <Navigation />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/regist" element={<Regist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/result" element={<Result />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
