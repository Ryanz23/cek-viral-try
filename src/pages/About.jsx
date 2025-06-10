import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Syahel Rusi Razaba",
      role: "Machine Learning Engineer",
      image: "/profile.svg",
      description: "UIN Syarif Hidayatulloh Jakarta",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Rifaldi Achmad Faisal",
      role: "Machine Learning Engineer",
      image: "/profile.svg",
      description: "UIN Syarif Hidayatulloh Jakarta",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Deawi Guna Pratiwi",
      role: "Machine Learning Engineer",
      image: "/profile.svg",
      description: "Politeknik Baja Tegal",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ariyan Andryan Aryja",
      role: "Front End Developer",
      image: "/profile.svg",
      description: "Politeknik Baja Tegal",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Zeko Bacharudin Firdaus",
      role: "Full Stack Developer",
      image: "/profile.svg",
      description: "Universitas Ahmad Dahlan Yogyakarta",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const features = [
    {
      icon: "🔍",
      title: "Analisis Mendalam",
      description: "Menggunakan AI untuk menganalisis konten dan mendeteksi potensi misinformasi"
    },
    {
      icon: "⚡",
      title: "Hasil Cepat",
      description: "Mendapatkan hasil verifikasi dalam hitungan detik"
    },
    {
      icon: "🎯",
      title: "Akurasi Tinggi",
      description: "Tingkat akurasi deteksi mencapai 95% berdasarkan riset terkini"
    },
    {
      icon: "📱",
      title: "User-Friendly",
      description: "Interface yang mudah digunakan untuk semua kalangan"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-main to-green-main text-white py-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-white blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Tentang CekViral
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Asisten cerdas untuk verifikasi konten viral.
          </p>
        </div>
      </section>

      {/* About Application Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mengapa CekViral?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Di era informasi yang berkembang pesat, kami hadir untuk membantu masyarakat 
              memverifikasi kebenaran informasi yang mereka terima setiap hari.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Misi Kami</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                CekViral hadir dengan misi untuk menciptakan ekosistem informasi yang lebih sehat 
                dan terpercaya. Kami menggunakan teknologi artificial intelligence terdepan untuk 
                menganalisis konten dan memberikan penilaian objektif tentang kredibilitas informasi.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dengan tim yang berpengalaman dan passionate dalam bidang teknologi dan media, 
                kami berkomitmen untuk terus mengembangkan solusi yang dapat diandalkan oleh masyarakat.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-r from-blue-main to-green-main p-8 text-white">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center justify-center">
                    <div className="text-6xl mb-6">
                      <img src="/protection.svg" alt="protection" className="w-24 mx-auto" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Melindungi dari Misinformasi</h4>
                    <p className="text-white">
                      Membantu masyarakat mendapatkan informasi yang akurat dan terpercaya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tim Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dibalik CekViral, terdapat tim profesional yang berdedikasi untuk menciptakan 
              solusi terbaik dalam verifikasi informasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-main to-green-main p-1">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-main to-green-main rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a href={member.social.github} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-main to-green-main text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pencapaian Kami</h2>
            <p className="text-xl text-blue-100">Angka yang menunjukkan dedikasi tim dalam melayani masyarakat</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-blue-100">Konten Terverifikasi</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Tingkat Akurasi</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5K+</div>
              <p className="text-blue-100">Pengguna Aktif</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Layanan Tersedia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bergabunglah dengan Misi Kami
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Mari bersama-sama menciptakan ekosistem informasi yang lebih sehat dan terpercaya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/regist" className="px-8 py-4 bg-gradient-to-r from-blue-main to-green-main text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Daftar Sekarang
            </Link>
            <Link to="/how-it-works" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-300">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;