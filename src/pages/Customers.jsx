import React, { useState } from "react";
import customers from "../data/customers.json";
import { HiMail, HiPhone, HiUser } from "react-icons/hi";
import { FaMedal } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [searchName, setSearchName] = useState("");
  const [selectedLoyalty, setSelectedLoyalty] = useState("");

  // Filter berdasarkan nama dan loyalty
  const filteredCustomers = customers.filter((customer) => {
    const matchesName = customer.customerName
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesLoyalty = selectedLoyalty
      ? customer.loyalty === selectedLoyalty
      : true;
    return matchesName && matchesLoyalty;
  });

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <PageHeader title="Customers List">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Add Customer
        </button>
      </PageHeader>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select
          className="p-3 border border-gray-300 rounded-xl w-full md:max-w-xs shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-green-400"
          value={selectedLoyalty}
          onChange={(e) => setSelectedLoyalty(e.target.value)}
        >
          <option value="">🎖️ Search Loyalty</option>
          <option value="Bronze">🥉 Bronze</option>
          <option value="Silver">🥈 Silver</option>
          <option value="Gold">🥇 Gold</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCustomers.map((customer, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 
            hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center mb-4 space-x-3">
              <HiUser className="text-green-500 text-3xl" />
              <h3 className="text-xl font-bold text-gray-700">
                {customer.customerName}
              </h3>
            </div>
            <div className="text-gray-600 space-y-2 text-base">
              <p className="flex items-center">
                <HiMail className="mr-2 text-lg" /> {customer.email}
              </p>
              <p className="flex items-center">
                <HiPhone className="mr-2 text-lg" /> {customer.phone}
              </p>
              <p className="flex items-center">
                <FaMedal className="mr-2 text-lg" /> {customer.loyalty}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
