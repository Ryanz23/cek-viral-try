import React from "react";

const Works = () => {
  
  return (
    <div className="max-w-7xl lg:h-svh flex flex-col items-center justify-center py-18 lg:py-auto px-4 m-auto">
      <div className="mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="bg-gradient-to-r from-blue-main to-green-main bg-clip-text text-transparent text-4xl font-bold text-center mb-6">
            CARA KERJA
          </h1>
        </div>

        {/* Three Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-blue-main to-green-main rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-center">Ketik Teks Atau Tempelkan Link Video</h3>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gradient-to-r from-blue-main to-green-main rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-center">Analisis Otomatis</h3>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gradient-to-r from-blue-main to-green-main rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-center">Lihat Hasilnya</h3>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-main to-green-main bg-clip-text mb-8 text-transparent text-center">
            KENAPA PILIH CEK VIRAL
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cepat & Instan</h3>
              <p className="text-gray-600 leading-relaxed">
                Cek informasi dalam hitungan detik. Masukkan teks, klik cek, dan langsung tahu hasilnya— fakta atau hoaks.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Akurat & Terpercaya</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami mencocokkan dengan sumber resmi dan kredibel. Didukung teknologi AI yang terus belajar dan diperbaharui.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Edukatif</h3>
              <p className="text-gray-600 leading-relaxed">
                Selain cek fakta, kami juga menyediakan informasi tambahan untuk membantu mu memahami kenapa sesuatu dikategorikan hoaks atau fakta.
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Works;