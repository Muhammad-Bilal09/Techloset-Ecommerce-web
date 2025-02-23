import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useDetail } from "../../pages/detailPage/useDetail";
import Vector from "../../assets/images/good.png";
import Stars from "../../assets/images/star.png";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCartOutline, IoEyeSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ItemType } from "../../types/types";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../redux/slice/wishlistSlice";

export default function Detail() {
  
  const notify = () => toast("Item added to cart");

 const  starCount=5

  const {
    item,
    isLoading,
    state,
    handleButtonClick,
    svgColor,
    handleAddToCart,
  } = useDetail();

  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector(selectWishlistItems);

  const isItemInWishlist = wishlistItems.some(
    (wishlistItem: ItemType) => wishlistItem.id === item.id
  );

  if (isLoading) {
    return <h1 className="flex justify-center">Loading...</h1>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt=""
            className="w-96 border rounded-xl p-4 object-cover object-center"
            src={item.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-blog text-3xl title-font font-medium mb-1">
              {item?.title?.slice(0,20)}
            </h1>
            <span className="title-font font-bold mt-2 text-2xl text-product">
              ${item.price}
            </span>
        
            <div className="flex mb-4">
      <span className="flex items-center mt-2">
        {Array?.from({ length: starCount }, (_, index) => (
          <img
            key={index}
            src={Stars}
            alt="Star"
          />
        ))}
        <span className="text-gray-600 ml-3 mt-3">no Reviews</span>
      </span>
    </div>
            <span className="flex">
              <h2 className="font-bold text-lg">Availability:</h2>
              <img className="ml-3" src={Vector} alt="" />
              <span className="text-green-300 font-medium text-lgs ml-1">
                {" "}
                in stock
              </span>
            </span>
            <p className="leading-relaxed mt-3 text-star font-heading">
              Hurry up only 44 product left in stock!
            </p>
            <hr className="my-4S" />
            <div className=" mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex items-center">
                <div className=" mt-4">
                  <span>Size:</span>
                  <span className="border border-slate-500 px-4 mx-2">30</span>
                  <span className="border border-slate-500 px-4 mx-2">42</span>
                  <span className="border border-slate-500 px-4 mx-2">48</span>
                  <span className="border border-slate-500 px-4 mx-2">56</span>
                </div>
              </div>
            </div>

            <div className="flex">
              <button className="flex font-semibold justify-center font-heading items-center w-40 rounded-3xl  ml-auto text-white bg-orange border-0 p-4 focus:outline-none">
                Buy it Now
              </button>
              <ToastContainer />
              <button
                onClick={() => {
                  handleAddToCart(item);
                  notify();
                }}
                className="flex  font-semibold w-40 rounded-3xl justify-center font-heading items-center ml-auto text-white bg-orange border-0 p-4 focus:outline-none "
              >
                Add to cart
              </button>

              <button
                className="rounded-full mt-3 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                onClick={() => {
                  handleButtonClick();
                  if (isItemInWishlist) {
                    dispatch(removeFromWishlist(item.id));
                    toast("Item removed from wishlist");
                  } else {
                    dispatch(addToWishlist(item));
                    toast("Item added to wishlist");
                  }
                }}
              >
                <svg
                  fill={isItemInWishlist ? "red" : svgColor}
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
            <hr className="my-4" />

            <div className="mt-4">
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className="w-32 h-14 lg:w-[187px] lg:h-[60px] border border-black p-3 rounded-2xl font-heading">
            Description
          </button>
          <button className="w-32 h-14 ml-5 border lg:w-[187px] lg:h-[60px] text-white bg-primary border-black font-heading p-3 rounded-2xl">
            Reviews
          </button>
        </div>
      </div>

      <div className="border border-black rounded-[20px] lg:h-[223px] lg:mx-[63px] p-5 mx-5 mb-5">
        <h1 className="text-primary lg:ml-[49px] lg:mt-[42px] font-bold font-heading">Customers Reviews</h1>
        <p className="text-blog lg:my-[17px] lg:ml-[49px]">No Review yet</p>
        <button className="lg:ml-[49px] bg-primary text-white px-2 mt-2">
        <u>Write a review</u>  
        </button>
      </div>

      <h1 className="underline ml-12 text-blog font-bold text-xl font-heading">Related Products</h1>

<div className="grid grid-cols-1 lg:mt-[53px] lg:mx-[63px] md:grid-cols-2 lg:grid-cols-4 gap-[26px]">
{state?.items.data &&
          state?.items?.data?.slice(0, 4).map((item: ItemType) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden shadow-md rounded-2xl border-2 bg-white flex flex-col p-4 group"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      className="w-full h-48 object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                    <button
                      onClick={() => {
                        handleButtonClick();
                      }}
                      className="absolute top-2 right-2 rounded-full bg-gray-200 p-2 border-0 inline-flex items-center justify-center text-gray-500"
                    >
                      <svg
                        fill={"currentColor"}
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
                    <p className="text-blog font-bold mt-4">
                      {item.title.slice(0, 20)}
                    </p>
                    <p className="font-bold text-product lg:my-[15px]">
                      ${item.price}
                    </p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, index) => (
                        <i key={index}>
                          {index < item.rating ? (
                            <FaStar className="text-star" />
                          ) : (
                            <CiStar className="text-star" />
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
    </section>
  );
}
