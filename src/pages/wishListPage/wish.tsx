import React from "react";
import { Link } from "react-router-dom";
import { ItemType } from "../../types/types";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useWishlist } from "./useWish";

const Wishlist: React.FC = () => {
  const notify = () => toast("item Removed from Wishlist");
  const { wishlist, handleRemoveFromWishlist } = useWishlist();

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <h1 className="flex justify-center text-3xl font-semibold">
        <u>Wishlist Items</u>
      </h1>
      {wishlist && wishlist.length === 0 && (
        <div className="flex justify-center mt-4">
          <Link to="/" className="bg-orange rounded-2xl p-3">
            Continue Shopping
          </Link>
        </div>
      )}
      <div className="container px-5 py-24 mx-auto">
        <div className="grid lg:grid-cols-4 lg:ml-[64px] lg:mr-[61px]">
          {wishlist?.map((item: ItemType) => (
            <div
              key={item.id}
              className="lg:w-[308px] lg:h-[313px] shadow-2xl rounded-[19.67px]  border-1 p-5 mt-3"
            >
              <div className="flex justify-center items-center">
                <img
                  className="w-[187px] h-[173px]"
                  src={item.image}
                  alt={item.title}
                />
                <button
                  onClick={() => {
                    {
                      handleRemoveFromWishlist(item.id);
                      notify();
                    }
                  }}
                  className="rounded-full bg-gray-200 p-0 border-0 inline-flex items-center justify-center mb-24 text-gray-500 ml-4"
                >
                  <svg
                    fill="red"
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
              <Link to={`/detail/${item.id}`} className="flex justify-center">
                <button className=" bg-orange rounded-2xl p-3">
                  Back to detail page
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Wishlist;
