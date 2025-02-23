import { useHomeState } from "../../pages/homePage/useHome";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ItemType } from "../../types/types";
import { IoCartOutline, IoEyeSharp } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";

export default function PopularProduct() {
  const {
    filteredData,
    handleButtonClick,
    itemHeartColors,
    handleCategoryClick,
    handleAddToCart,
    setSelectedCategory,
    categories,
  } = useHomeState();

  const notify = () => {
    toast("Item added to cart");
  };

  const handleShowAll = () => {
    setSelectedCategory(categories);
  };

  return (
    <>
      <div>
        <div className="flex justify-between ml-[61px] mr-[61px]">
          <div className="">
            <span className="text-blog lg:w-[241px] lg:h-[45px] font-extrabold font-heading">
              Popular Product
            </span>
          </div>
          <div className="hidden md:block">
            <button
              onClick={handleShowAll}
              className="text-blog rounded-[20px] mr-3 border border-blog p-2 lg:px-5"
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`text-blog rounded-[20px] mr-3 border border-blog p-2 lg:px-5 ${
                  category === "All" ? "mr-14" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-2 lg:ml-[64px] lg:mr-[61px] mx-10 mt-8">
          {filteredData?.map((item: ItemType) => (
            <div
              key={item?.id}
              className="relative lg:w-[100%] mb-4 lg:h-[313px] shadow-md rounded-[19.67px] border-5 overflow-hidden group"
            >
              <div className="relative flex justify-center items-center mb-4">
                <img
                  className="w-[187px] h-[173px]"
                  src={item?.image}
                  alt={item?.title}
                />

                <button
                  onClick={() => {
                    handleButtonClick(item);
                  }}
                  className="absolute top-2 right-2 rounded-full bg-gray-200 p-2 border-0 inline-flex items-center justify-center text-gray-500"
                >
                  <svg
                    fill={itemHeartColors[item?.id] || "currentColor"}
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
              <div className="transition-transform ml-3 transform group-hover:scale-105 group-hover:opacity-0 duration-300">
                <p className="text-blog font-bold mt-4">
                  {item?.title?.slice(0, 20)}
                </p>
                <p className="font-bold text-star my-4">${item.price}</p>
                <div className="flex mt-2">
                  {[...Array(5)]?.map((_, index) => (
                    <i key={index}>
                      {index < item?.rating ? (
                        <FaStar className="text-star" />
                      ) : (
                        <CiStar className="text-star" />
                      )}
                    </i>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-48">
                <div className="flex  lg:flex-row items-center lg:justify-center space-y-2 lg lg:space-y-0 lg:space-x-4">
                  <button
                    onClick={() => {
                      handleAddToCart(item);
                      notify();
                    }}
                    className="flex items-center rounded-2xl w-full lg:w-44 font-heading h-12 bg-cart font-bold p-2 lg:p-4 lg:ml-2"
                  >
                    Add to Cart
                    <IoCartOutline className="text-xl bg-yellow-400 ml-2 rounded" />
                  </button>
                  <Link to={`/detail/${item?.id}`}>
                    <button className="flex items-center justify-center bg-cart rounded-2xl w-12 h-12 lg:w-16 lg:h-12 p-2 font-extrabold mx-2 mb-1">
                      <IoEyeSharp className="text-2xl lg:text-3xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
