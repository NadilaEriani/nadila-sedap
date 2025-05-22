import React, { useState } from "react";
import orders from "../data/orders.json";
import { HiCalendar, HiCurrencyDollar } from "react-icons/hi";
import { MdOutlineAssignment, MdPerson } from "react-icons/md";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [searchName, setSearchName] = useState("");
  const [searchDate, setSearchDate] = useState("");

  // Filter berdasarkan nama dan tanggal
  const filteredOrders = orders.filter((order) => {
    const matchesName = order.customerName
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesDate = searchDate ? order.orderDate === searchDate : true;
    return matchesName && matchesDate;
  });

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <PageHeader title="Orders List">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add Orders
        </button>
      </PageHeader>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search by date */}
        <div className="flex flex-col w-full md:max-w-xs">
          <label
            htmlFor="searchDate"
            className="mb-1 text-gray-600 font-medium"
          >
            Search Date
          </label>
          <input
            id="searchDate"
            type="date"
            className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none 
            focus:ring-2 focus:ring-blue-400"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredOrders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 
            hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center mb-4 space-x-3">
              <MdPerson className="text-purple-500 text-3xl" />
              <h3 className="text-xl font-bold text-gray-700">
                {order.customerName}
              </h3>
            </div>
            <div className="text-gray-600 space-y-2 text-base">
              <p className="flex items-center">
                <MdOutlineAssignment className="mr-2 text-lg" /> Status:{" "}
                {order.status}
              </p>
              <p className="flex items-center">
                <HiCurrencyDollar className="mr-2 text-lg" /> $
                {order.totalPrice}
              </p>
              <p className="flex items-center">
                <HiCalendar className="mr-2 text-lg" /> {order.orderDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
