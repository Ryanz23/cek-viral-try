import React, { useState } from "react";
import { useValidation } from "../hooks/useValidation";

const Home = () => {
  const [value, setValue] = useState("");
  const { validateText, loading } = useValidation();

  const handleInput = (e) => setValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await validateText(value);
    setValue(""); // Clear input after submission
  };

  return (
    <section
      id="hero-section"
      className="w-full h-svh flex items-center justify-center"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-blue-main to-green-main bg-clip-text text-transparent">
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
            placeholder="Masukkan teks disini..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !value.trim()}
            className="px-6 py-2 bg-gradient-to-r from-blue-main to-green-main text-white font-semibold rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white">
                  {/* SVG spinner */}
                </svg>
                Menganalisis...
              </>
            ) : (
              "Cek"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
