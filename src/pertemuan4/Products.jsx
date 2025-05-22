import { useState } from "react";
import productsData from "./products.json";

// Mengambil unique dari brand dan tag
const brands = [...new Set(productsData.map((p) => p.brand))];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchQuery =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchTag = activeTag ? product.tags.includes(activeTag) : true;
    
    const matchBrand = selectedBrand ? product.brand === selectedBrand : true;

    return matchQuery && matchTag && matchBrand;
  });

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Search & Filters */}
      <div className="mb-6 flex flex-col lg:flex-row flex-wrap gap-4 items-start lg:items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full lg:w-1/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 w-full lg:w-auto"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Reset Button */}
        <button
          onClick={() => {
            setSearchQuery("");
            setActiveTag(null);
            setSelectedCategory("");
            setSelectedBrand("");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
        >
          Reset Filters
        </button>
      </div>

      {/* Active Tag Filter Display */}
      {activeTag && (
        <div className="mb-4">
          <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2">
            Filtering by tag: {activeTag}
          </span>
          <button
            onClick={() => setActiveTag(null)}
            className="text-sm text-red-500 underline"
          >
            Clear tag filter
          </button>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {product.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              {product.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Category: <b>{product.category}</b>
            </p>

            <div className="mt-3 mb-3">
              <p className="text-green-600 dark:text-green-400 font-semibold text-lg">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-red-500 text-sm">
                Discount: {product.discountPercentage}%
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-1">
              Rating: <b>{product.rating}</b>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              Stock: <b>{product.stock}</b>
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Dimensions: <b>W: {product.dimensions.width}mm</b>,{" "}
              <b>H: {product.dimensions.height}mm</b>,{" "}
              <b>D: {product.dimensions.depth}mm</b>
            </p>

            {/* Clickable Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {product.tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTag(tag)}
                  className={`${
                    activeTag === tag
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                  } px-2 py-1 text-xs rounded-full`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
