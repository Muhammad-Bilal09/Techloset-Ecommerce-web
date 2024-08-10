import logo from "../../assets/images/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import User from "../../assets/images/user.png";
import { BsCart } from "react-icons/bs";
import arrow from "../../assets/images/arrowDown.png";
import { useSelector } from "react-redux";
import { useFetchItemsEffect, useHandleCategoryChange } from "./useHeader";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectTotalItems } from "../../redux/slice/cartSlice";
import { selectWishlistItems } from "../../redux/slice/wishlistSlice";
import { LuHeart } from "react-icons/lu";
export default function Header() {
  const wishlistItems = useSelector(selectWishlistItems);
  const totalWishlistItems = wishlistItems.length;
  const totalItems = useAppSelector(selectTotalItems);

  const { handleCategoryChange, categories } = useHandleCategoryChange();
  useFetchItemsEffect();

  return (
    <>
      <nav className=" ml-4 lg:ml-[61px] lg:mr-[49px] mt-5 mb-7">
        <div className="max-w-7xl mx-auto lg:flex justify-between items-center ">
          <div className="flex items-center">
            <a href="#" className="text-black text-lg font-heading">
              Need help? Call us (+98) 0234 456 789
            </a>
          </div>
          <div>
            <ul className="flex space-x-9 ml-10">
              <li className="mx-2 mt-2 font-heading">
                <Link
                  to="/product"
                  className="flex items-center justify-center text-black-900   hover:text-green-900"
                >
                  <CiLocationOn style={{ fontSize: "24px" }} /> Our Store
                </Link>
              </li>
              <li className="mx-2 mt-2 font-heading">
                <a
                  className="flex items-center lg:mr-20 text-black-900 hover:text-green-900"
                  href="/about"
                >
                  <CiDeliveryTruck style={{ fontSize: "24px" }} /> Track Your
                  Order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="bg-primary h-[100px]">
        <div className="flex justify-between items-center px-4 lg:ml-[61px] lg:mr-[49px]">
          <div>
            <Link
              to="/"
              className="text-white text-lg mt-4  font-semibold flex items-center"
            >
              <img src={logo} alt="" className="h-8 md:h-10" />
            </Link>
          </div>
          <div className="hidden lg:flex relative mt-5">
            <input
              type="text"
              placeholder="Enter only things"
              className="rounded-3xl w-60 md:w-96 h-14 p-2"
            />
            <button
              type="button"
              className="absolute right-0 font-heading bottom-0 top-0 py-3 px-7 text-white bg-orange font-medium rounded-3xl text-sm focus:outline-none"
            >
              Search
            </button>
          </div>
          <div className="md:flex items-center">
            <ul className="flex space-x-4 mt-4">
              <li className="hidden md:flex mx-2 ">
                <a
                  className="flex items-center text-white font-heading hover:text-gray-300"
                  href="/"
                >
                  <img src={User} alt="" />
                  Signup
                </a>
              </li>
              <li className="mx-2 font-heading">
                <Link
                  className="flex items-center text-white hover:text-gray-300"
                  to="/wishlist"
                >
                  <LuHeart className="text-2xl" />
                  {totalWishlistItems > 0 ? (
                    <span className="bg-orange rounded-full text-white px-1 text-xs">
                      {totalWishlistItems}
                    </span>
                  ) : (
                    <span className="bg-orange rounded-full text-white px-1 text-xs">
                      0
                    </span>
                  )}
                  Wishlist
                </Link>
              </li>
              <li className="mx-2 font-heading">
                <Link
                  to="/cart"
                  className="flex items-center text-white hover:text-gray-300"
                >
                  <BsCart className="text-2xl" />
                  {totalItems > 0 ? (
                    <span className="bg-orange rounded-full text-white px-1 text-xs">
                      {totalItems}
                    </span>
                  ) : (
                    <span className="bg-orange rounded-full text-white px-1 text-xs">
                      0
                    </span>
                  )}
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="bg-info px-5 h-[71px]">
        <div className="flex justify-between items-center lg:ml-[61px] lg:mr-[49px]">
          <div>
            <button
              className="flex items-center justify-between outline-none bg-orange lg:w-[218px] h-[70px] p-2"
              onClick={() =>
                handleCategoryChange({ target: { value: "" } } as any)
              }
            >
              categories
              <img className="ml-1" src={arrow} alt="" />
            </button>
          </div>
          <div className="flex space-x-7">
            <div className="hidden md:flex">
              <Link
                to="/"
                className="flex text-black font-medium
               font-heading "
              >
                Home
                <img className="ml-1" src={arrow} alt="" />
              </Link>
            </div>
            <div className="hidden sm:flex md:flex">
              <a href="" className="flex text-black font-heading font-medium ">
                Catalog
                <img className="ml-1" src={arrow} alt="" />
              </a>
            </div>
            <div className="hidden sm:flex md:flex">
              <a href="" className="flex text-black font-heading font-medium">
                Blogs
              </a>
            </div>
            <div className="hidden md:flex">
              <Link
                to="/product"
                className="flex text-black font-heading font-medium"
              >
                product
                <img className="ml-1" src={arrow} alt="" />
              </Link>
            </div>
            <div className="hidden md:flex">
              <a href="" className="flex text-black font-heading font-medium">
                About us
              </a>
            </div>
          </div>
          <span className="font-bold ml-4  font-heading md:hidden flex lg:flex">
            30 Days Free Return
          </span>
        </div>
      </nav>
    </>
  );
}
