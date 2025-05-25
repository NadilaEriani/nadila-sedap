import { CgMenuLeftAlt } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";

export default function HeaderGuest() {
  const linkClass = "transition uppercase font-Monsterrat-Variable tracking-wider hover:text-teal-300";

  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-white px-6 py-7 shadow-md">
  <div className="flex items-center justify-between max-w-7xl mx-auto">
    <span
      id="logo-title"
      className="flex items-center text-2xl font-bold tracking-wide font-poppins"
    >
      <CgMenuLeftAlt className="mr-1 text-hijau text-3xl" />
      Sedap
      <b id="logo-dot" className="text-hijau ml-1">.</b>
    </span>

    <nav className="hidden md:flex space-x-6 text-sm">
      <a href="#home" className={linkClass}>Home</a>
      <a href="#about" className={linkClass}>Tentang Kami</a>
      <a href="#top-produk" className={linkClass}>Top Produk</a>
      <a href="#testimoni" className={linkClass}>Ulasan Pengguna</a>
      <a href="#cek" className={linkClass}>Cek Keanggotaan</a>
    </nav>

    <div className="flex items-center space-x-5">
      <BiSearchAlt className="text-xl" />
      <a href="./Login" className="text-sm font-medium hover:text-hijau transition">Login</a>
      <a
        href="./Register"
        className="bg-hijau text-sm font-semibold text-gray-800 px-4 py-1.5 rounded-md hover:opacity-90 transition"
      >
        Register
      </a>
    </div>
  </div>
</header>

  );
}
