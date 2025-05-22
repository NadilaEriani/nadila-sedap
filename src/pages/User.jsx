import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => setUsers(res.data.users))
      .catch(err => console.error("Gagal ambil data user:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">👤 Daftar Pengguna</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => {
          const bgColor =
            user.gender === "male"
              ? "bg-blue-50 border-blue-200"
              : user.gender === "female"
              ? "bg-pink-50 border-pink-200"
              : "bg-gray-50 border-gray-200";

          return (
            <div
              key={user.id}
              className={`rounded-2xl shadow hover:shadow-xl transition duration-300 p-6 border ${bgColor}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.gender === 'male' ? 'bg-blue-200 text-blue-800' :
                  user.gender === 'female' ? 'bg-pink-200 text-pink-800' :
                  'bg-gray-200 text-gray-800'
                }`}>
                  {user.gender}
                </span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                  Blood: {user.bloodGroup}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div><strong>Username:</strong> {user.username}</div>
                <div><strong>Phone:</strong> {user.phone}</div>
                <div><strong>Age:</strong> {user.age}</div>
                <div><strong>Birth:</strong> {user.birthDate}</div>
                <div><strong>Eye:</strong> {user.eyeColor}</div>
                <div><strong>Hair:</strong> {user.hair.color} ({user.hair.type})</div>
                <div><strong>Height:</strong> {user.height} cm</div>
                <div><strong>Weight:</strong> {user.weight} kg</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
