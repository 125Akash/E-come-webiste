"use client";
import React, { useState } from "react";
import Image from "next/image";
import initialProducts from "../Components/Data";

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState("price-asc");
  const [filterCategory, setFilterCategory] = useState("");

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);

    let sortedProducts = [...products];

    if (selectedSort === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFilterCategory(selectedCategory);
  };

  const filteredProducts = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <label className="block text-gray-600 font-semibold mb-2">
            Sort by Price:
          </label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="block w-52 p-2 border border-gray-300 rounded-md bg-black text-white focus:outline-none focus:ring focus:ring-blue-400"
          >
            <option value="price-asc" className="bg-black text-white">
              Price Low to High
            </option>
            <option value="price-desc" className="bg-black text-white">
              Price High to Low
            </option>
          </select>
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-gray-600 font-semibold mb-2">
            Filter by Category:
          </label>
          <select
            value={filterCategory}
            onChange={handleCategoryChange}
            className="block w-full p-2 border border-gray-300 rounded-md bg-black text-white focus:outline-none focus:ring focus:ring-blue-400"
          >
            <option value="" className="bg-black text-white">
              All Categories
            </option>
            <option value="men's clothing" className="bg-black text-white">
              Men's Clothing
            </option>
            <option value="women's clothing" className="bg-black text-white">
              Women's Clothing
            </option>
            <option value="jewelery" className="bg-black text-white">
              Jewelry
            </option>
            <option value="electronics" className="bg-black text-white">
              Electronics
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg p-4 rounded-md transform hover:scale-105 transition-transform"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2 text-gray-800">
              {product.title}
            </h3>
            <p className="text-gray-600 h-20 hover:h-auto transition-height duration-300 overflow-hidden">
              {product.description}
            </p>
            <p className="text-blue-600 text-lg font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
