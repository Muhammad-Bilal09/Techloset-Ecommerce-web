import React from "react";
import { Link } from "react-router-dom";
import useProduct from "./useProduct";
import Banner from "../../components/homeComponent/banner";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoCartOutline, IoEyeSharp } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import { ItemType } from "../../types/types";

const Product: React.FC = () => {
  const {
    handleAddToCart,
    isLoading,
    itemHeartColors,
    handleButtonClick,
    categories,
    selectedCategories,
    handleCategoryChange,
    filteredData,
  } = useProduct();

  const notify = () => {
    toast("item added into cart");
  };
  if (isLoading) {
    return (
      <h1 className="flex justify-center text-lg font-bold">Loading...</h1>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row lg:flex-row  gap-8">
          <aside className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-blue-400 font-medium font-heading text-lg">
                  Categories
                </h2>
                <button className="text-blue-500 font-heading">Reset</button>
              </div>
              {categories?.map((category: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-gray-700">{category}</span>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                </div>
              ))}
            </div>
            <hr className="my-6" />
            <div className="mb-6">
              <h2 className="text-blue-400 font-medium text-lg font-heading mb-2">
                Availability
              </h2>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700 font-heading">In stock</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-500"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700 font-heading">Out of stock</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-500"
                />
              </div>
            </div>
            <hr className="my-6" />
            <div className="mb-6">
              <h2 className="text-blue-400 font-medium text-lg mb-2 font-heading">
                Product Type
              </h2>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700 font-heading">Smart watch</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-500"
                />
              </div>
            </div>
            <hr className="my-6" />
            <div className="mb-6">
              <h2 className="text-blue-400 font-medium text-lg font-heading mb-2">
                Brand
              </h2>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700 font-heading">Brand Name</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-500"
                />
              </div>
            </div>
            <hr className="my-6" />
            <div className="mb-6">
              <h2 className="text-blue-400 font-medium text-lg mb-2">Color</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "yellow-300",
                  "red-500",
                  "blue-800",
                  "gray-400",
                  "orange-500",
                  "amber-300",
                  "teal-400",
                  "green-400",
                ].map((color) => (
                  <span
                    key={color}
                    className={`p-2 rounded-full bg-${color}`}
                  ></span>
                ))}
              </div>
            </div>
            <hr className="my-6" />
            <div>
              <h2 className="text-blue-400 font-medium text-lg mb-2">Size</h2>
              {["M", "S", "X", "XX"].map((size) => (
                <div
                  key={size}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-gray-700">{size}</span>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                </div>
              ))}
            </div>
          </aside>

          <main className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
              {filteredData?.slice(0, 12).map((item: ItemType) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden shadow-md rounded-lg border-2 bg-white flex flex-col items-center p-4 group"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      className="w-full h-48 object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                    <button
                      onClick={() => {
                        handleButtonClick(item);
                      }}
                      className="absolute top-2 right-2 rounded-full bg-gray-200 p-2 border-0 inline-flex items-center justify-center text-gray-500"
                    >
                      <svg
                        fill={itemHeartColors[item.id] || "currentColor"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="transition-transform transform group-hover:scale-105 group-hover:opacity-0 duration-300">
                    <p className="text-blue-300 font-bold mt-4">
                      {item.title.slice(0, 20)}
                    </p>
                    <p className="font-bold">${item.price}</p>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, index) => (
                        <i key={index}>
                          {index < item.rating ? (
                            <FaStar className="text-yellow-400" />
                          ) : (
                            <CiStar className="text-gray-400" />
                          )}
                        </i>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-48">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-4">
                      <button
                        onClick={() => {
                          handleAddToCart(item);
                          notify();
                        }}
                        className="flex items-center rounded-2xl w-full lg:w-44 font-heading h-12 bg-blue-200 font-bold p-2 lg:p-4"
                      >
                        Add to Cart
                        <IoCartOutline className="text-xl bg-yellow-400 ml-2 rounded" />
                      </button>
                      <Link to={`/detail/${item.id}`}>
                        <button className="flex items-center justify-center bg-blue-200 rounded-2xl w-12 h-12 lg:w-16 lg:h-12 font-extrabold">
                          <IoEyeSharp className="text-2xl lg:text-3xl" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <ToastContainer />
            </div>
          </main>
        </div>
      </div>

      <Banner />
    </>
  );
};

export default Product;
