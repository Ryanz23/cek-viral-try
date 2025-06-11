import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${value}`);
    navigate("/result", { state: { value } });
    setValue("");
  };

  return (
    <section
      id="hero-section"
      className="w-full h-svh  flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-300 opacity-40 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[250px] h-[250px] bg-green-300 opacity-30 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-pink-300 opacity-20 rounded-full blur-2xl z-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="p-10 max-w-6xl w-full flex flex-col items-center">
        <h1
          className="text-4xl font-semibold mb-4 text-center
    bg-gradient-to-r from-blue-main to-green-main bg-clip-text text-transparent"
        >
          CEK FAKTA DALAM SEKEJAP!
        </h1>
        <p className="text-gray-700 mb-8 text-center">
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
