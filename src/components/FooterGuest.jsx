import { CgTwitter } from "react-icons/cg"; 
import { FaInstagram } from "react-icons/fa"; 
import { BsFacebook } from "react-icons/bs"; 
export default function FooterGuest() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-sm">

        {/* Info Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
          <p>Email: info@sedap.com</p>
          <p>Telepon: +62 812 3456 7890</p>
          <p>Alamat: Jl. Merdeka No.123, Jakarta</p>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-hijau transition">
              <BsFacebook />
            </a>
            <a href="#" className="hover:text-hijau transition">
                <FaInstagram />
            </a>
            <a href="#" className="hover:text-hijau transition">
              <CgTwitter />
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Gambar Partner */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Partner Kami</h3>
          <div className="flex items-center space-x-4">
            <img src= "img/org1.jpg" alt="Partner 1" className="bg-white p-2 rounded w-40 h-auto rounded-m" />
            <img src="img/org2.jpg" alt="Partner 2" className="bg-white p-2 rounded w-40 h-auto rounded-m" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-10">
        &copy; 2025 Sedap. All rights reserved.
      </div>
    </footer>
  );
}
