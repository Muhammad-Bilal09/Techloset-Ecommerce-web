import { CiStar } from "react-icons/ci";
import loudSpeaker from "../../assets/images/speaker.png";
import playGame from "../../assets/images/playGame.png";
import laptop from "../../assets/images/miniLaptop.png";
import { IoCartOutline, IoEyeSharp } from "react-icons/io5";

export default function FeatureProduct() {

  const STARS = 5;

  const stars = [...Array(STARS)].map((_, index) => (
    <CiStar key={index} className="text-yellow-500" />
  ));
  
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-stretch p-4 lg:p-6 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Featured Product Card */}
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-[603px] max-w-full bg-white shadow-md rounded-3xl border-4 border-gray-200 p-4 lg:p-6">
          <div className="flex-shrink-0">
            <img
              className="rounded-full w-24 h-24 lg:w-60 lg:h-60"
              src={loudSpeaker}
              alt="Loud Speaker"
            />
          </div>
          <div className="flex-1 lg:ml-4 mt-4 lg:mt-0 text-center lg:text-left">
            <p className="font-bold text-blue-900 text-xl lg:text-2xl font-heading">
              JBL Bar 2.1 Deep Bass
            </p>
            <p className="mt-2 font-extrabold text-lg lg:text-xl font-heading">
              $11.70
            </p>
            <div className="flex justify-center lg:justify-start mt-2 space-x-1">
              {[...Array(5)].map((_, index) => (
                <CiStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start mt-4 space-x-2">
              {[57, 11, 33, 59].map((number, index) => (
                <button
                  key={index}
                  className="rounded-full bg-blue-300 text-yellow-600 text-lg p-3 mx-1"
                >
                  {number}
                </button>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start mt-6 space-y-2 lg:space-y-0 lg:space-x-4">
              <button className="flex items-center rounded-2xl w-full lg:w-52 font-heading h-12 bg-blue-200 font-bold p-2 lg:p-4">
                Add to Cart
                <IoCartOutline className="text-xl bg-yellow-400 ml-2" />
              </button>
              <button className="flex items-center justify-center bg-blue-200 rounded-2xl w-12 h-12 lg:w-16 lg:h-12 font-extrabold">
                <IoEyeSharp className="text-2xl lg:text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Other Products */}
        <div className="flex flex-col space-y-6 w-full lg:w-[439px] max-w-full">
          {[
            { src: playGame, label: "Play Game" },
            { src: laptop, label: "Laptop" },
          ].map((product, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg border-4 border-gray-200 p-4 lg:p-6"
            >
              <img
                className="w-24 h-24 lg:w-56 lg:h-44"
                src={product.src}
                alt={product.label}
              />
              <div className="ml-4">
                <p className="text-green-600 font-medium text-lg">
                  {product.label}
                </p>
                <p className="font-bold text-lg lg:text-xl">$11.70</p>
                <div className="flex mt-2 space-x-1">
                  {stars}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}






























// import { CiStar } from "react-icons/ci";
// import loudSpeaker from "../../assets/images/speaker.png";
// import playGame from "../../assets/images/playGame.png";
// import laptop from "../../assets/images/miniLaptop.png";
// import { IoCartOutline, IoEyeSharp } from "react-icons/io5";

// export default function FeatureProduct() {

//   const STARS = 5;

//   const stars = [...Array(STARS)].map((_, index) => (
//     <CiStar key={index} className="text-yellow-500" />
//   ));
  
//   return (
//     <>
//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  p-4 lg:ml-[41px] lg:mr-[51px] mt-8 lg:mt-24">
//           <div className="shadow-md lg:w-[603px] rounded-3xl border-4 border-gray-200 p-4 lg:p-6 flex flex-col lg:flex-row justify-between items-center">
//             <div className="flex-shrink-0">
//               <img
//                 className="rounded-full w-24 h-24 lg:w-60 lg:h-60"
//                 src={loudSpeaker}
//                 alt="Loud Speaker"
//               />
//             </div>
//             <div className="flex-1 mt-4 lg:mt-0 lg:ml-4 text-center lg:text-left">
//               <p className="font-bold text-blue-900 text-xl lg:text-2xl font-heading">
//                 JBL Bar 2.1 Deep Bass
//               </p>
//               <p className="mt-2 font-extrabold text-lg lg:text-xl font-heading">
//                 $11.70
//               </p>
//               <div className="flex justify-center lg:justify-start mt-2 space-x-1">
//                 {[...Array(5)].map((_, index) => (
//                   <CiStar key={index} className="text-yellow-500" />
//                 ))}
//               </div>
//               <div className="flex flex-wrap justify-center lg:justify-start mt-4 space-x-2">
//                 {[57, 11, 33, 59].map((number, index) => (
//                   <button
//                     key={index}
//                     className="rounded-full bg-blue-300 text-yellow-600 text-lg p-3 mx-1"
//                   >
//                     {number}
//                   </button>
//                 ))}
//               </div>
//               <div className="flex flex-col  lg:flex-row justify-center lg:justify-start mt-6 space-y-2 lg:space-y-0 lg:space-x-4">
//                 <button className="flex items-center rounded-2xl w-full lg:w-52 font-heading h-12 bg-blue-200 font-bold p-2 lg:p-4">
//                   Add to Cart
//                   <IoCartOutline className="text-xl bg-yellow-400 ml-2" />
//                 </button>
//                 <button className="flex items-center justify-center bg-blue-200 rounded-2xl w-12 h-12 lg:w-16 lg:h-12 font-extrabold">
//                   <IoEyeSharp className="text-2xl lg:text-3xl" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6 lg:space-y-8">
//             {[
//               { src: playGame, label: "Play Game" },
//               { src: laptop, label: "Laptop" },
//             ].map((product, index) => (
//               <div
//                 key={index}
//                 className="shadow-md rounded-lg border-4 lg:w-[439px] border-gray-200 p-4 lg:p-6 flex justify-between items-center"
//               >
//                 <img
//                   className="w-24 h-24 lg:w-56 lg:h-44"
//                   src={product.src}
//                   alt={product.label}
//                 />
//                 <div className="ml-4">
//                   <p className="text-green-600 font-medium text-lg">
//                     {product.label}
//                   </p>
//                   <p className="font-bold text-lg lg:text-xl">$11.70</p>
//                   <div className="flex mt-2 space-x-1">
//                   {stars}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
