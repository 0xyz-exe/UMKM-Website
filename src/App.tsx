import { useState, useEffect } from 'react';
import { ChevronDown, Phone, MapPin, Clock, Star, Menu, X, ShoppingBag, Coffee } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const foodItems = [
    { name: 'Risol Mayo', price: 'Rp 3.000', image: '🥟', description: 'Risol isi mayones yang lumer di mulut' },
    { name: 'Risol Sayur', price: 'Rp 2.500', image: '🥬', description: 'Risol isi sayuran segar dan bergizi' },
    { name: 'Tahu Jupe', price: 'Rp 2.000', image: '🧈', description: 'Tahu goreng isi bumbu kacang pedas' },
    { name: 'Pisang Coklat', price: 'Rp 4.000', image: '🍌', description: 'Pisang goreng berlapis coklat manis' },
    { name: 'Martabak Mini', price: 'Rp 5.000', image: '🥞', description: 'Martabak mini dengan berbagai topping' },
    { name: 'Lumpia', price: 'Rp 3.500', image: '🌯', description: 'Lumpia goreng isi sayuran dan tauge' },
    { name: 'Putu Ayu', price: 'Rp 2.000', image: '🧁', description: 'Kue tradisional pandan dengan kelapa' },
    { name: 'Kue Cucur', price: 'Rp 1.500', image: '🥮', description: 'Kue tradisional manis berwarna kuning' },
    { name: 'Tahu Isi', price: 'Rp 2.500', image: '🟨', description: 'Tahu goreng isi tauge dan bumbu' },
    { name: 'Tempe Menjes', price: 'Rp 2.000', image: '🟤', description: 'Tempe goreng dengan bumbu menjes' },
    { name: 'Ote-Ote', price: 'Rp 3.000', image: '🥒', description: 'Gorengan sayur dengan tepung crispy' }
  ];

  const beverageItems = [
    { name: 'Es Teh', price: 'Rp 3.000', image: '🧊', description: 'Teh manis dingin yang menyegarkan' },
    { name: 'Teh Hangat', price: 'Rp 2.500', image: '☕', description: 'Teh hangat manis untuk bersantai' },
    { name: 'Jus Jambu', price: 'Rp 8.000', image: '🍓', description: 'Jus jambu merah segar tanpa bahan pengawet' },
    { name: 'Jus Alpukat', price: 'Rp 10.000', image: '🥑', description: 'Jus alpukat creamy dengan susu' },
    { name: 'Jus Sirsak', price: 'Rp 9.000', image: '🍃', description: 'Jus sirsak manis dan menyegarkan' },
    { name: 'Jus Buah Naga', price: 'Rp 9.500', image: '🐉', description: 'Jus buah naga kaya antioksidan' },
    { name: 'Jus Mangga', price: 'Rp 8.500', image: '🥭', description: 'Jus mangga manis dan segar' },
    { name: 'Jus Stroberi', price: 'Rp 11.000', image: '🍓', description: 'Jus stroberi asam-manis yang segar' },
    { name: 'Jus Anggur', price: 'Rp 10.000', image: '🍇', description: 'Jus anggur ungu kaya vitamin' },
    { name: 'Jus Apel', price: 'Rp 8.000', image: '🍎', description: 'Jus apel segar dan menyehatkan' },
    { name: 'Jus Nanas', price: 'Rp 7.500', image: '🍍', description: 'Jus nanas asam-manis menyegarkan' },
    { name: 'Jus Semangka', price: 'Rp 6.000', image: '🍉', description: 'Jus semangka merah segar tanpa biji' },
    { name: 'Jus Melon', price: 'Rp 7.000', image: '🍈', description: 'Jus melon hijau manis dan segar' },
    { name: 'Capcin', price: 'Rp 5.000', image: '🥤', description: 'Minuman penyegar tradisional yang unik' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Risol LUMER
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Kontak
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg">
              <nav className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="px-4 py-2 text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-4 py-2 text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                >
                  Tentang
                </button>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="px-4 py-2 text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                >
                  Menu
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                >
                  Kontak
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Risol LUMER
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Cemilan Tradisional Indonesia yang Lumer di Mulut
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Nikmati kelezatan risol dan berbagai cemilan tradisional Indonesia terbaik, 
              dibuat dengan resep turun temurun dan bahan-bahan berkualitas tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('menu')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Lihat Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <ChevronDown 
              onClick={() => scrollToSection('about')}
              className="w-8 h-8 text-orange-500 animate-bounce cursor-pointer hover:text-orange-600 transition-colors duration-200" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              Tentang <span className="text-orange-600">Risol LUMER</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Risol LUMER adalah usaha keluarga yang telah menghadirkan cita rasa autentik cemilan Indonesia 
              sejak tahun 2015. Kami berkomitmen untuk menyajikan makanan dan minuman berkualitas tinggi 
              dengan harga terjangkau untuk semua kalangan. Kami menerima pesanan, dan juga pesanan frozen 
              untuk kemudahan penyimpanan dan distribusi.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Kualitas Terbaik</h3>
                <p className="text-gray-600">Menggunakan bahan-bahan segar dan berkualitas tinggi untuk setiap produk</p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Selalu Fresh</h3>
                <p className="text-gray-600">Diproduksi fresh setiap hari untuk memastikan kualitas dan kesegaran</p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Resep Turun Temurun</h3>
                <p className="text-gray-600">Mempertahankan cita rasa autentik dengan resep keluarga yang terpercaya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Menu <span className="text-orange-600">Pilihan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan cemilan dan minuman segar yang dibuat dengan penuh cinta untuk Anda
            </p>
          </div>

          {/* Food Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
              <ShoppingBag className="w-8 h-8 text-orange-600" />
              Makanan & Cemilan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {foodItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                      {item.image}
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 text-center">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-3 text-center leading-relaxed">{item.description}</p>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beverages Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
              <Coffee className="w-8 h-8 text-green-600" />
              Minuman Segar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {beverageItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                      {item.image}
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 text-center">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-3 text-center leading-relaxed">{item.description}</p>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-green-600">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Hubungi Kami</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Siap melayani pesanan Anda! Hubungi kami untuk pemesanan atau informasi lebih lanjut
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
              <Phone className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="opacity-90">+62 812-3456-7890</p>
              <p className="opacity-90">+62 856-7890-1234</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Alamat</h3>
              <p className="opacity-90 text-center">
                Jl. Cemilan Nusantara No. 123<br />
                Jakarta Selatan, DKI Jakarta
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jam Buka</h3>
              <p className="opacity-90">Senin - Minggu</p>
              <p className="opacity-90">08:00 - 21:00 WIB</p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Risol LUMER</h3>
          </div>
          <p className="text-gray-400 mb-4">Cemilan Tradisional Indonesia Terbaik</p>
          <p className="text-gray-500">© 2024 Risol LUMER. Semua hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;