import { BsFillStarFill } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
import member from "../data/member.json";
import { FaTimesCircle, FaCrown, FaMedal, FaGem } from "react-icons/fa";
import products from "../data/produk.json";
import testimoni from "../data/testimoni.json";
import { FaShoppingCart, FaCreditCard, FaUtensils } from "react-icons/fa";

import { FaQuoteLeft } from "react-icons/fa";

export default function Guest() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi
    if (!email.trim()) {
      setError("Email tidak boleh kosong.");
      setResult(null);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Format email tidak valid.");
      setResult(null);
      return;
    }

    setError("");

    // Cek member
    const found = member.find(
      (m) => m.email.toLowerCase() === email.toLowerCase()
    );
    setResult(found || false);
  };

  const getMemberStyle = (type) => {
    switch (type) {
      case "silver":
        return {
          color: "text-gray-400",
          icon: <FaMedal className="text-gray-400" />,
        };
      case "gold":
        return {
          color: "text-yellow-400",
          icon: <FaCrown className="text-yellow-400" />,
        };
      case "platinum":
        return {
          color: "text-purple-400",
          icon: <FaGem className="text-purple-400" />,
        };
      default:
        return { color: "text-white", icon: null };
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-[#d1ecf3] text-white py-24 px-6 overflow-hidden"
      >
        {/* Panah Kiri */}
        <button className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/80 text-black rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white z-20">
          <span className="text-2xl">
            <BsArrowLeftShort />
          </span>
        </button>

        {/* Panah Kanan */}
        <button className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/80 text-black rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white z-20">
          <span className="text-2xl">
            <BsArrowRightShort />
          </span>
        </button>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Teks */}
            <div className="text-center lg:text-left max-w-xl text-gray-900">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
                <span className="text-gray-900">Nikmati Hidangan Favorit</span>
                <br />
                <span className="text-[#417c9b]">
                  Langsung dari Dapur Terbaik
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Jelajahi berbagai pilihan menu lezat dari restoran terpercaya.
                Kami antar ke pintumu dengan cepat, hangat, dan penuh rasa.
              </p>
              <a
                href="#top-produk"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Lihat Menu
              </a>
            </div>

            {/* Gambar */}
            <div className="max-w-md">
              <img
                src="/img/cover1.webp"
                alt="Ilustrasi Makanan"
                className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 text-black py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Tentang Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            <span className="font-bold text-gray-900">Sedap</span> adalah
            platform makanan berbasis aplikasi dan website yang memudahkan kamu
            dalam memesan dan menerima makanan. Kami menghubungkan konsumen
            dengan berbagai pilihan menu dari restoran terpercaya untuk
            pengalaman kuliner yang
            <span className="font-bold text-pink-500"> lezaatt</span> dan
            praktis, langsung dari rumahmu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fitur 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group">
              <FaShoppingCart className="text-4xl text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Pemesanan Online
              </h3>
              <p className="text-gray-600">
                Pesan makanan favoritmu kapan saja tanpa harus datang langsung
                ke restoran.
              </p>
            </div>

            {/* Fitur 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group">
              <FaCreditCard className="text-4xl text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Pembayaran Mudah
              </h3>
              <p className="text-gray-600">
                Gunakan berbagai metode pembayaran, mulai dari e-wallet, kartu,
                hingga bayar di tempat.
              </p>
            </div>

            {/* Fitur 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group">
              <FaUtensils className="text-4xl text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Menu Beragam
              </h3>
              <p className="text-gray-600">
                Jelajahi beragam menu makanan dari restoran lokal hingga kuliner
                internasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Produk */}
      <section
        id="top-produk"
        className="bg-[#e6f0fb] text-gray-800 py-24 px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Produk Unggulan Kami
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                {/* Gambar */}
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Informasi */}
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Menu favorit pelanggan setia kami.
                  </p>
                </div>

                {/* Label Harga */}
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  Rp {product.price.toLocaleString("id-ID")}
                </div>

                {/* Tombol Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button className="bg-blue-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-all">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}

      <section id="testimoni" className="bg-gradient-to-br from-gray-300 via-white to-blue-300 text-gray-900 py-24 px-6">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
      Apa Kata Pengguna
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {testimoni.map((item) => (
        <div
          key={item.id}
          className="relative bg-white p-8 rounded-2xl border border-blue-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/40 hover:border-blue-300 hover:ring-2 hover:ring-blue-200 overflow-hidden"
        >
          {/* Background "Sedap" */}
          <span className="absolute text-[25px] font-extrabold text-blue-300 opacity-40 bottom-4 right-4 pointer-events-none select-none z-0">
            Sedap
          </span>

          {/* Konten utama */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-400 shadow"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <BsFillStarFill key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed italic mt-2">
              “{item.review}”
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Cek Keanggotaan */}
      <section className="bg-gradient-to-b from-blue-200 to-gray-100 text-gray-900 py-24 px-6">
  <div className="max-w-xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4 text-gray-900">Cek Keanggotaan</h2>
    <p className="text-gray-800 mb-8">
      Masukkan email kamu di bawah untuk mengetahui status keanggotaanmu di platform <span className="font-bold text-blue-700">Sedap</span>. Dapatkan info eksklusif sesuai tipe member kamu!
    </p>

    {/* Form */}
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Masukkan email Anda"
        className="p-3 rounded-md bg-white text-gray-900 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition-all shadow"
      >
        Cek Sekarang
      </button>
    </form>

    {/* Error */}
    {error && <p className="text-red-500 mt-4">{error}</p>}

    {/* Member Ditemukan */}
    {result && (
      <div className="mt-6 p-4 border-l-4 border-blue-600 bg-white text-left rounded-md shadow-md">
        <div className="flex items-center gap-3 mb-2">
          {getMemberStyle(result.tipe_member).icon}
          <p
            className={`font-semibold ${getMemberStyle(result.tipe_member).color}`}
          >
            Selamat datang, {result.nama}! Anda adalah member{" "}
            <b>{result.tipe_member}</b>.
          </p>
        </div>
      </div>
    )}

    {/* Member Tidak Ditemukan */}
    {result === false && (
      <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-500 text-left rounded-md flex items-center gap-3 shadow-md">
        <FaTimesCircle className="text-red-500 text-xl" />
        <p className="text-red-600">
          Email tidak terdaftar sebagai member.
        </p>
      </div>
    )}
  </div>
</section>


    </div>
  );
}
