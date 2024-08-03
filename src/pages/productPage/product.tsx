import React from "react";
import { Link } from "react-router-dom";
import useProduct from "./useProduct";
import Banner from "../homePage/banner";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Product: React.FC = () => {
  const {
    isLoading,
    categories,
    selectedCategories,
    handleCategoryChange,
    filteredData,
  } = useProduct();

  if (isLoading) {
    return <h1 className="flex justify-center text-lg font-bold">Loading...</h1>;
  }

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row lg:flex-row  gap-8">
        <aside className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-blue-400 font-medium font-heading text-lg">Categories</h2>
              <button className="text-blue-500 font-heading">Reset</button>
            </div>
            {categories?.map((category: string, index) => (
              <div key={index} className="flex items-center justify-between py-2">
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
            <h2 className="text-blue-400 font-medium text-lg font-heading mb-2">Availability</h2>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700 font-heading">In stock</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700 font-heading">Out of stock</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
            </div>
          </div>
          <hr className="my-6" />
          <div className="mb-6">
            <h2 className="text-blue-400 font-medium text-lg mb-2 font-heading">Product Type</h2>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700 font-heading">Smart watch</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
            </div>
          </div>
          <hr className="my-6" />
          <div className="mb-6">
            <h2 className="text-blue-400 font-medium text-lg font-heading mb-2">Brand</h2>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700 font-heading">Brand Name</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
            </div>
          </div>
          <hr className="my-6" />
          <div className="mb-6">
            <h2 className="text-blue-400 font-medium text-lg mb-2">Color</h2>
            <div className="flex flex-wrap gap-2">
              {['yellow-300', 'red-500', 'blue-800', 'gray-400', 'orange-500', 'amber-300', 'teal-400', 'green-400'].map(color => (
                <span key={color} className={`p-2 rounded-full bg-${color}`}></span>
              ))}
            </div>
          </div>
          <hr className="my-6" />
          <div>
            <h2 className="text-blue-400 font-medium text-lg mb-2">Size</h2>
            {['M', 'S', 'X', 'XX'].map(size => (
              <div key={size} className="flex items-center justify-between py-2">
                <span className="text-gray-700">{size}</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
              </div>
            ))}
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredData?.slice(0,12).map((item: any) => (
                 <Link to={`/detail/${item.id}`}>
           <div
                key={item.id}
                className="overflow-hidden shadow-md rounded-lg border-2 bg-white flex flex-col items-center p-4"
              >
           
                <div className="flex justify-center mb-4">
                  <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />

                </div>
                <div className="text-center">
                  <p className="text-blue-300 font-bold text-lg">{item.title.slice(0, 20)}</p>
                  <p className="font-bold text-xl">${item.price}</p>
                  <div className="flex justify-center mt-2">
                  <i>
                    <FaStar />
                  </i>
                  <i>
                    <CiStar />
                  </i>
                  <i>
                    <CiStar />
                  </i>
                  <i>
                    <CiStar />
                  </i>
                  <i>
                    <CiStar />
                  </i>
                </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>

<Banner/>

</>

);
};

export default Product;

