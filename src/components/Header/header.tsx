import logo from "../../assets/images/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import User from "../../assets/images/user.png";
import Heart from "../../assets/images/heart.png";
import ShopingCart from "../../assets/images/shopping-cart.png"
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

  const { handleCategoryChange } = useHandleCategoryChange();
  useFetchItemsEffect();

  return (
    <>
      <nav className="mb-7">
        <div className="max-w-7xl  mt-5  lg:ml-[61px] lg:mr-[49px] mx-auto lg:flex justify-between items-center">
          <div className="flex justify-center items-center">
            <Link to="#" className="text-black w-[273px] h-[21px] font-heading mx-[51px]">
              Need help? Call us (+98) 0234 456 789
            </Link>
          </div>
          <div>
            <ul className="flex space-x-9 mt-2 mx-[36px]">
              <li className="font-heading">
                <Link
                  to="/product"
                  className="flex w-[109px] h-[21px] justify-center text-black-900"
                >
                  <CiLocationOn className="w-[24px] h-[24px]" /> Our Store
                </Link>
              </li>
              <li className="font-heading">
                <Link
                  to="/about"
                  className="flex w-[158px] h-[21px] text-black-900 "
                >
                  <CiDeliveryTruck className="w-[24px] h-[24px]" /> Track Your
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="bg-primary h-[100px]">
        <div className="flex justify-between items-center lg:ml-[61px] lg:mr-[49px]">
          <div>
            <Link
              to="/"
              className=" mt-4 ml-11  flex items-center"
            >
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex relative mt-5 lg:w-[456px] lg:h-[56px]">
            <input
              type="text"
              placeholder="Enter only things"
              className="rounded-[20px] w-60 md:w-96 h-14 p-2"
            />
            <button
              type="button"
              className="absolute w-[132px] h-[56px] right-0 font-heading bottom-0 top-0 py-3 px-7 text-white bg-orange font-medium rounded-3xl text-sm focus:outline-none"
            >
              Search
            </button>
          </div>
          <div className="md:flex items-center">
            <ul className="flex lg:w-[326px] lg:h-[24px] space-x-7 mt-4 mr-1">
              <li className="lg:w-[83px] ml- md:flex">
                <Link
                  to="/signup"
                  className="flex items-center lg:w-[47px] lg:h-[24px] text-white font-heading"
                >
                  <img src={User} alt="User" />
                  <span className="hidden md:flex">
                  Signup
                  </span>
                </Link>
              </li>
              <li className="font-heading lg:w-[100px]">
                <Link
                  to="/wishlist"
                  className="flex lg:w-[47px]  lg:h-[24px]  items-center  text-white"
                >
                 <img src={Heart} alt="User" />
                  {totalWishlistItems > 0 ? (
                    <span className="bg-orange rounded-full text-white text-xs">
                      {totalWishlistItems}
                    </span>
                  ) : (
                    
                    <span className="bg-orange rounded-full  text-white w-[14px] h-[15px] lg:w-[14px] lg:h-[15px]  px-1  text-xs">
                      0
                    </span>
                  )}
                  <span className="hidden md:flex">
                  Wishlist
                  </span>
                </Link>
              </li>
              <li className="font-heading lg:w-[84px]">
                <Link
                  to="/cart"
                  className="flex items-center text-white lg:w-[47px] lg:h-[24px]"
                >
                  <img src={ShopingCart} alt="User" />
                  {totalItems > 0 ? (
                    <span className="bg-orange rounded-full text-white px-1 text-xs">
                      {totalItems}
                    </span>
                  ) : (
                    <span className="bg-orange rounded-full text-white w-[14px] h-[15px] lg:w-[14px] lg:h-[15px]  px-1 text-xs">
                      0
                    </span>
                  )}
                  <span className="hidden md:flex">
                  Cart
                  </span>
                 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="bg-info lg:h-[71px]">
  <div className="flex flex-col sm:flex-row sm:justify-between items-center lg:ml-[61px] lg:mr-[49px] lg:justify-center">
    <div className="mb-4 mx-auto sm:mb-0 lg:mx-0 lg:mr-auto">
      <button
        className="flex nt-5 items-center justify-between outline-none font-heading text-white bg-orange w-[218px] h-[70px] p-2"
        onClick={() =>
          handleCategoryChange({ target: { value: "" } } as any)
        }
      >
        Browse Categories
        <img className="ml-1 text-white" src={arrow} alt="Arrow" />
      </button>
    </div>
    <div className="flex flex-col sm:flex-row sm:space-x-7 lg:space-x-12 lg:ml-auto lg:mr-auto">
      <div className="hidden md:flex">
        <Link to="/" className="flex text-black lg:w-[88px] lg:h-[24px] font-heading">
          Home
          <img className="ml-1" src={arrow} alt="Arrow" />
        </Link>
      </div>
      <div className="hidden sm:flex md:flex">
        <Link
          to="/catalog"
          className="flex text-black font-heading lg:w-[88px] lg:h-[24px]"
        >
          Catalog
          <img className="ml-1" src={arrow} alt="Arrow" />
        </Link>
      </div>
      <div className="hidden sm:flex md:flex">
        <Link
          to="/blogs"
          className="flex text-black font-heading lg:w-[88px] lg:h-[24px]"
        >
          Blogs
          <img className="ml-1" src={arrow} alt="Arrow" />
        </Link>
      </div>
      <div className="hidden md:flex">
        <Link
          to="/product"
          className="flex text-black font-heading lg:w-[88px] lg:h-[24px]"
        >
          Product
          <img className="ml-1" src={arrow} alt="Arrow" />
        </Link>
      </div>
      <div className="hidden md:flex">
        <Link
          to="/about"
          className="flex text-black font-heading lg:w-[88px] lg:h-[24px]"
        >
          About us
        </Link>
      </div>
    </div>
    <span className="font-extrabold text-primary font-heading md:hidden lg:w-auto lg:flex mt-2 mb-5 lg:mb-0 lg:ml-auto lg:mr-0">
      30 Days Free Return
    </span>
  </div>
</nav>
    </>
  );
}
