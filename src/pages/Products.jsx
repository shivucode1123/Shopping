import React from "react";
import { useState } from "react";
import { products } from "../Data/ProductsData";
import { brands, categories, priceRanges } from "../Data/data";

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);

  const filteredProducts = products.filter((product) => {
    const brandMatch =
      selectedBrand === "All Brands" || product.brand === selectedBrand;

    const categoryMatch =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    const priceMatch =
      product.price >= selectedPrice.min &&
      product.price <= selectedPrice.max;

    return brandMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="text-white">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-1">Products</h1>
      <p className="text-gray-400 mb-6">
        Browse and filter products ({filteredProducts.length} products)
      </p>

      {/* Filters */}
      <div className="bg-[#0f172a] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div>
            <label className="block text-sm mb-2">Brand</label>
            <select
              className="w-full bg-[#020617] border border-gray-700 rounded px-3 py-2"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option>All Brands</option>
              {brands.map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm mb-2">Category</label>
            <select
              className="w-full bg-[#020617] border border-gray-700 rounded px-3 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm mb-2">Price Range</label>
            <select
              className="w-full bg-[#020617] border border-gray-700 rounded px-3 py-2"
              onChange={(e) =>
                setSelectedPrice(priceRanges[e.target.selectedIndex])
              }
            >
              {priceRanges.map((range) => (
                <option key={range.label}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#020617] rounded-xl overflow-hidden shadow"
          >
            {/* Image with Brand Badge */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-black/70 text-xs px-2 py-1 rounded">
                {product.brand}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-400">{product.category}</p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold">₹{product.price}</span>
                <span className="text-sm text-yellow-400">
                  ⭐ {product.rating}
                </span>
              </div>

              <button className="mt-4 w-full bg-white text-black py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;