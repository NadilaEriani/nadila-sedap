import React from "react";
import { useParams } from "react-router-dom";

const errorContent = {
  400: { desc: "Permintaan tidak valid", img: "/img/error400.jpeg" },
  401: { desc: "Akses ditolak. Anda belum login.", img: "/img/error401.png" },
  403: {
    desc: "Anda tidak memiliki izin untuk mengakses halaman ini.",
    img: "/img/error403.png",
  },
  404: { desc: "Halaman tidak ditemukan", img: "/img/error404.jpg" },
};

const ErrorPage = () => {
  const { code } = useParams();
  const errorCode = parseInt(code) || 404;
  const content = errorContent[errorCode] || {
    desc: "Terjadi kesalahan",
    img: "/img/error.webp",
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br 
    from-indigo-300 to-purple-200 p-4"
    >
      <div
        className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-2xl 
      text-center border border-white/40"
      >
        <img
          src={content.img}
          alt={`Ilustrasi Error ${errorCode}`}
          className="mx-auto mb-6 max-h-60 object-contain drop-shadow"
        />
        <h1 className="text-6xl font-bold text-red-500 drop-shadow">
          {errorCode}
        </h1>
        <p className="mt-4 text-xl text-gray-700">{content.desc}</p>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-blue-600 text-white text-lg 
          font-semibold shadow hover:bg-blue-700 transition"
        >
          ⬅️ Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
