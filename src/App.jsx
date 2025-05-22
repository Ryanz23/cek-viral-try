import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import Result from './components/result';
import './output.css';

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
      <h1 className='text-gray-900'>Vite + React</h1>
      <div className="card">
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