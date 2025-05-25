import { CgTwitter } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

export default function FooterGuest() {
  return (
    <footer className="relative bg-gradient-to-b from-blue-800 to-black text-white px-8 pt-32 pb-10 mt-0 overflow-hidden">
      {/* SVG Segitiga Putih */}
      <svg
        className="absolute top-0 left-0 w-full h-20 z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 50,100 100,0" fill="#f5f7fa" /> {/* putih */}
      </svg>

      {/* Tombol ke atas */}
      <div className="absolute top-[64px] left-1/2 transform -translate-x-1/2 z-20">
        <a
          href="#top"
          className="bg-sky-500 hover:bg-sky-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </a>
      </div>

      {/* Isi Footer */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-sm mt-16">
        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-200">
            Kontak Kami
          </h3>
          <p className="text-gray-300">Email: info@sedap.com</p>
          <p className="text-gray-300">Telepon: +62 812 3456 7890</p>
          <p className="text-gray-300">Alamat: Jl. Merdeka No.123, Jakarta</p>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-200">
            Ikuti Kami
          </h3>
          <div className="flex space-x-6 text-2xl">
            <a
              href="#"
              className="hover:text-blue-400 transition hover:scale-110 duration-300"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition hover:scale-110 duration-300"
            >
              <CgTwitter />
            </a>
          </div>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-200">
            Partner Kami
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <img
              src="img/org1.jpg"
              alt="Partner 1"
              className="bg-white p-2 rounded-xl w-32 h-auto shadow hover:scale-105 transition-all duration-300"
            />
            <img
              src="img/org2.jpg"
              alt="Partner 2"
              className="bg-white p-2 rounded-xl w-32 h-auto shadow hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-12 border-t border-gray-700 pt-6 relative z-10">
        &copy; 2025 <span className="font-semibold text-white">Sedap</span>. All
        rights reserved. Designed with ❤️ by{" "}
        <span className="text-blue-300 font-semibold">Nadila</span>.
      </div>
    </footer>
  );
}
