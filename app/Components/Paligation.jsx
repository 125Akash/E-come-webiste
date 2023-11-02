"use client";
import { useState } from "react";
import initialProducts from "./Data";

const PaginationSlider = () => {
  const [images, setImages] = useState(
    initialProducts.map((product) => product.image)
  );
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < images.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8 mb-12 ">
      <div className="slider-container border p-4 shadow-md flex w-full rounded-2xl justify-center items-center h-80">
        {" "}
             <img
          src={images[currentPage]}
          alt={`Image ${currentPage + 1}`}
          className="w-44 max-w-xs transition-transform transform scale-100 rounded-2xl"
        />
      </div>

      <div className="pagination mt-4">
        <button
          onClick={prevPage}
          className="prev-button bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          disabled={currentPage === 0}
        >
          Previous
        </button>

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded-md mx-1 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 ${
              currentPage === index ? "shadow-md" : "shadow"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          className="next-button bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          disabled={currentPage === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationSlider;
