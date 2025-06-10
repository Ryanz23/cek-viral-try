<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Nav";
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
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <Navigation />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/regist" element={<Regist/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Form from "./components/form";
import Result from "./components/result";
import "./output.css";

function App() {
  const [urlResult, setUrlResult] = useState("");

  const handleFormSubmit = (url) => {
    setUrlResult(url);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100 gap-4 p-6">
        <div className="max-w-2xl">
          <Form onSubmit={handleFormSubmit} />
        </div>

        {/* Result selalu tampil, tapi teksnya tergantung urlResult */}
        <div className="flex-grow">
          <Result value={urlResult} />
        </div>
      </div>

      <div className="App flex justify-center pt-16">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-gray-900">Vite + React</h1>
      <div className="card text-gray-900">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-gray-900">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
>>>>>>> main
