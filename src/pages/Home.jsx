import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { handleLoadingSubmit } = Loading();

  const handleInput = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gunakan loading handler
    handleLoadingSubmit(() => {
      navigate("/result", { state: { value } });
      setValue("");
    });
  };


  return (
    <section
      id="hero-section"
      className="w-full h-svh flex items-center justify-center"
    >
      <div className="p-10 max-w-6xl w-full flex flex-col items-center">
        <h1
          className="text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-blue-main to-green-main bg-clip-text text-transparent"
        >
          CEK FAKTA DALAM SEKEJAP!
        </h1>
        <p className="text-gray-700 text-md mb-8 text-center">
          Masukkan berita, rumor, atau informasi yang kamu temukan,
          <br />
          dan biarkan kami bantu cek apakah itu fakta atau hoaks.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md gap-3 items-center"
        >
          <input
            type="text"
            value={value}
            onChange={handleInput}
            placeholder="Maukkan teks disini..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-main to-green-main text-white font-semibold rounded-lg cursor-pointer"
          >
            Cek
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
