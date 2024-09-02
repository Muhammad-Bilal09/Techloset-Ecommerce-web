import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./useCart";
import { Link } from "react-router-dom";
import { tableHeaders } from "../../constants/cart";

const Cart: React.FC = () => {
  const {
    cartItems,
    handleRemoveCart,
    handleRemoveFromCart,
    handleQuantityChange,
    calculateCartTotal,
  } = useCart();

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 mt-8 lg:mx-16">
        <div className="flex-1 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-blue-300">
                {tableHeaders.map((header) => (
                  <th
                    key={header.key}
                    className="px-4 py-2 text-left text-xs md:text-sm font-medium text-gray-700 font-heading"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <img className="w-12 h-12 md:w-16 md:h-16 lg:w-24" src={item.image} alt="" />
                  </td>
                  <td className="px-4 py-2 text-xs md:text-sm">
                    {item.title.slice(0, 20)}
                  </td>
                  <td className="px-4 py-2 text-xs md:text-sm">${item.price}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        <FaMinus />
                      </button>
                      <p className="px-2 text-xs md:text-sm">{item.quantity}</p>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-600 p-1 md:p-2 rounded-lg"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <span className="flex items-center font-heading text-xs md:text-sm">
                        Delete <CiCircleRemove className="ml-1 text-lg md:text-2xl" />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
              <ToastContainer />
            </tbody>
          </table>
          <div className="flex flex-col md:flex-row justify-between mt-8">
            <Link to="/">
              <button className="bg-yellow-400 text-white font-heading rounded-full w-full md:w-auto lg:w-[295px] h-[50px] p-3">
                Continue Shopping
              </button>
            </Link>
            <button className="border-black border w-full md:w-auto lg:w-40 text-gray-400 font-heading rounded-full p-3 mt-4 md:mt-0">
              Update Cart
            </button>
            <button
              onClick={() => handleRemoveCart()}
              className="border-red-600 text-red-600 w-full md:w-auto lg:w-40 border rounded-full font-heading p-3 mt-4 md:mt-0"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Total */}
        <div className="lg:w-[426px] flex-shrink-0 h-auto shadow-md rounded-lg border-5 p-5">
          <div className="bg-blue-300 p-3">
            <h1 className="flex justify-center font-heading text-sm md:text-base">Cart Total</h1>
          </div>
          <div>
            <h2 className="flex justify-between my-5 text-xs md:text-sm">
              <span className="font-heading">Subtotal</span> $
              {calculateCartTotal().toFixed(2)}
            </h2>
            <hr className="my-5 border-2" />
            <div className="relative flex justify-center">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="rounded-lg border border-black w-full lg:w-[333px] h-10 pb-2"
              />
              <button
                type="button"
                className="right-0 bottom- top-1 absolute px-7 font-heading font-medium text-xs md:text-sm"
              >
                Apply
              </button>
            </div>
            <hr className="my-5 border-2" />
            <div className="flex justify-center">
              <select className="rounded-lg border border-black w-full lg:w-96 p-2">
                <option value="">COUNTRY</option>
                <option value="PAKISTAN">PAKISTAN</option>
                <option value="INDIA">INDIA</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <h2 className="text-xs md:text-lg flex justify-between my-5">
              <span>Total</span> ${calculateCartTotal().toFixed(2)}
            </h2>
            <button className="text-xs md:text-lg rounded-lg border border-black font-heading justify-around w-full lg:w-96 h-10 pb-2 bg-yellow-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;