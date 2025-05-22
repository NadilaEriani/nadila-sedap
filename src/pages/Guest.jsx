import { useState } from "react";
import member from "../data/member.json";
import { FaTimesCircle, FaCrown, FaMedal, FaGem } from "react-icons/fa";
import products from "../data/produk.json";

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
        className="relative bg-gray-200 text-white py-20 px-6 overflow-hidden"
      >
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Teks */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-4xl text-black md:text-5xl font-extrabold mb-4 drop-shadow">
              Temukan Produk Favorit & Lihat Apa Kata Pelanggan Kami
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-6">
              Jelajahi pilihan produk unggulan dan lihat langsung pesanan serta
              testimoni dari pelanggan kami.
            </p>
          </div>
          {/* Gambar */}
          <div className="max-w-md">
            <img src="/img/cover1.webp" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-black py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Kami</h2>
          <p className="text-lg md:text-xl font-Monsterat-Variable text-gray-700 leading-relaxed">
            <span className="font-poppins-extrabold text-gray-900">Sedap</span>{" "}
            adalah Platform makanan berbasis aplikasi atau website yang
            memfasilitasi pemesanan dan pengiriman makanan. Platform ini
            menghubungkan konsumen dengan berbagai jenis makanan, sehingga
            memungkinkan kamu untuk memilih dan mencoba berbagai menu makanan
            <span className="font-poppins-extrabold text-gray-900 ">
              {" "}
              lezaatt
            </span>
            , Platform ini menyediakan fitur pengantaran makanan sehingga kamu
            dapat melakukan pemesanan, dan membayar dengan mudah, serta menerima
            pesanan di rumah atau lokasi yang diinginkan.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className=" bg-gray-200 p-6 rounded-lg shadow-md hover:bg-cyan-500 hover:font-extrabold ">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Pemesanan Online</h3>
              <p className="text-gray-800">
                Platform ini memungkinkan pemesanan makanan secara online,
                sehingga konsumen tidak perlu datang langsung ke restoran.
              </p>
            </div>
            <div className=" bg-gray-200 p-6 rounded-lg shadow-md  hover:bg-cyan-500 hover:font-extrabold">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Pembayaran yang Mudah
              </h3>
              <p className="text-gray-800">
                Platform ini menyediakan metode pembayaran yang beragam, seperti
                pembayaran online, kartu kredit, atau uang tunai saat
                pengiriman.
              </p>
            </div>
            <div className=" bg-gray-200 p-6 rounded-lg shadow-md  hover:bg-cyan-700 hover:font-extrabold">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Pilihan Menu yang Beragam
              </h3>
              <p className="text-gray-800">
                Platform ini menyediakan berbagai jenis makanan yang berbeda
                beda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Produk */}
      <hr
        id="top-produk"
        className="border-0 h-[8px] bg-gray-700 my-4 rounded-sm"
      />
      <section id="top-produk" className="bg-white text-white py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-12 text-center">
            Produk Unggulan Kami
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 rounded-xl shadow-lg overflow-hidden relative hover:shadow-indigo-500/30 transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <h3 className="text-gray-800 text-xl font-bold mb-1">{product.name}</h3>
                </div>
                <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  Rp {product.price.toLocaleString("id-ID")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Cek Keanggotaan */}
      <hr id="cek" className="border-0 h-[8px] bg-gray-700 my-4 rounded-sm" />
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Cek Keanggotaan</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md">
              Cek Sekarang
            </button>
          </form>

          {error && <p className="text-red-400 mt-4">{error}</p>}

          {result && (
            <div className="mt-6 p-4 border-l-4 border-indigo-500 bg-gray-800 text-left rounded-md">
              <div className="flex items-center gap-3 mb-2">
                {getMemberStyle(result.tipe_member).icon}
                <p
                  className={`font-semibold ${
                    getMemberStyle(result.tipe_member).color
                  }`}
                >
                  Selamat datang, {result.nama}! Anda adalah member{" "}
                  <b>{result.tipe_member}</b>.
                </p>
              </div>
            </div>
          )}

          {result === false && (
            <div className="mt-6 p-4 bg-red-800 text-left rounded-md flex items-center gap-3">
              <FaTimesCircle className="text-red-300 text-xl" />
              <p className="text-red-300">
                Email tidak terdaftar sebagai member.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
