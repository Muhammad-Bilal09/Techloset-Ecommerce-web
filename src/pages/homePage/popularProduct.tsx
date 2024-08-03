import { useHomeState } from "./useHome";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ItemType } from "../../types/types";

export default function PopularProduct() {
  const {
    filteredData,
    svgColor,
    handleButtonClick,
    handleCategoryClick,
    categories,
  } = useHomeState();

  return (
    <>
      <div>
        <div className="flex justify-between m-10">
          <div className="ml-5">
            <u className="text-blue-600 font-extrabold ml-10 font-heading">Popular Product</u>
          </div>
          <div className="hidden md:block">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`text-blue-600 hover:bg-info rounded-lg mr-3 border border-blue-600 p-2 lg:px-5 ${
                  category === "All" ? "mr-14" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:ml-[64px] lg:mr-[61px] mx-10">
          {filteredData?.map((item: ItemType) => (
            <div
              key={item.id}
              className="lg:w-[308px] lg:h-[313px] shadow-md mt-5 rounded-[19.67px] border-5 p-5"
            >
              <Link to={`/detail/${item.id}`}>
                <div className="flex justify-center items-center">
                  <img className="w-[187px] h-[173px]" src={item.image} alt={item.title} />

                  <button
                    onClick={handleButtonClick}
                    className="rounded-full bg-gray-200 p-0 border-0 inline-flex items-center justify-center mb-24 text-gray-500 ml-4"
                  >
                    <svg
                      fill={svgColor}
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
                <p className="text-blue-300 font-bold mt-4">
                  {item.title.slice(0, 20)}
                </p>
                <p className="font-bold">${item.price}</p>
                <div className="flex mt-2">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}