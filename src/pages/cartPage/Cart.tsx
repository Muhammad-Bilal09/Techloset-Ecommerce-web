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
      <h1 className="text-2xl md:text-3xl font-heading flex justify-center">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 lg:ml-40">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
          <thead>
        <tr className="bg-blue-300">
          {tableHeaders.map((header) => (
            <th
              key={header.key}
              className="px-4 py-2 text-left text-sm font-medium text-gray-700 font-heading"
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
                    <img className="w-16 lg:w-24" src={item.image} alt="" />
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {item.title.slice(0, 20)}
                  </td>
                  <td className="px-4 py-2 text-sm">${item.price}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        <FaMinus />
                      </button>
                      <p className="px-2">{item.quantity}</p>
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
                      className="bg-red-600 p-2 rounded-lg"
                      onClick={() => {
                        {
                          handleRemoveFromCart(item.id);
                        }
                      }}
                    >
                      <span className="flex items-center font-heading">
                        Delete <CiCircleRemove className="ml-1 text-2xl" />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
              <ToastContainer />
            </tbody>
          </table>
          <div className="flex justify-between mt-8">
            <Link to="/">
              <button className="bg-yellow-400 text-white font-heading rounded-full lg:w-40 p-3">
                continue Shopping
              </button>
            </Link>
            <button className="border-black border lg:w-40 text-gray-400 font-heading rounded-full p-3">
              update cart
            </button>

            <button
              onClick={() => handleRemoveCart()}
              className="border-red-600 text-red-600 lg:w-40 border rounded-full font-heading p-3"
            >
              clear cart
            </button>
          </div>
        </div>
        <div className="lg:w-[426px] h-[400px] overflow-hidden align-middle shadow-md rounded-lg border-5 p-5 ">
          <div className="bg-blue-300 p-3">
            <h1 className="flex justify-center font-heading">Cart Total</h1>
          </div>
          <div>
            <h2 className="flex justify-between my-5">
              <span className="font-heading">Subtotal</span> $
              {calculateCartTotal().toFixed(2)}
            </h2>
            <hr className="my-5" />
            <div className="relative flex justify-center">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="rounded-lg border border-black lg:w-96 w-80 h-10 pb-2"
              />
              <button
                type="button"
                className="right-0 bottom- top-1 absolute px-7 font-heading font-medium"
              >
                Apply
              </button>
            </div>
            <hr className="my-5" />
            <div className="flex justify-center">
              <select className="rounded-lg border border-black lg:w-96 w-80 p-2">
                <option value="">COUNTRY</option>
                <option value="">PAKISTAN</option>
                <option value="">INDIA</option>
                <option value="">USA</option>
              </select>
            </div>
            <h2 className="text-xl flex justify-between my-5">
              <span>Total</span> ${calculateCartTotal().toFixed(2)}
            </h2>
            <button className="text-xl rounded-lg border border-black font-heading justify-around lg:w-96 w-[350px] h-10 pb-2 bg-yellow-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
