import cameraOne from "../../assets/images/cameraOne.png";
import cameraTwo from "../../assets/images/cameraTwo.jpg";
import cameraThree from "../../assets/images/cameraOne.png";
import { useHomeState } from "../../pages/homePage/useHome";
const images = [cameraOne, cameraTwo, cameraThree];

export default function HeroSection() {
  const { currentIndex, handleDotClick } = useHomeState();

  return (
    <div className="w-full lg:h-[394px] grid lg:grid-cols-2 gap-4 px-4 lg:px-0">
      <div className="relative flex justify-center items-center lg:order-2 lg:mr-44 order-1">
        <img
          className="my-[22px] w-[200px] lg:w-[289px] h-auto"
          src={images[currentIndex]}
          alt={`Camera ${currentIndex + 1}`}
        />
         <div className="ml-1 absolute left-[230px] bottom-11 lg:left-80 lg:bottom-12 md:left-[390px] md:bottom-[35px] rounded-[588.94px] md:w-[104.83px] md:h-[100.12px] sm:w-[99.83px] sm:h-[95.12px] w-[90.81px] h-[86.10px] bg-orange">
           <div className="text-[15px] sm:text-[21.57px] top-6 relative leading-12 text-white text-center items-center justify-center font-semibold">
             <div>only</div>
             <div>$89</div>
           </div>
         </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start ml-0 lg:ml-[173px] mr-0 lg:mr-[108px] order-2 lg:order-1 text-center lg:text-left">
        <p className="font-bold text-primary text-[30px] lg:text-[43px] font-heading">
          Canon Camera
        </p>
        <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start">
          <button className="my-2 lg:my-4 w-[327px] mx-0  bg-orange lg:w-36 h-[50px] lg:h-[61px] rounded-3xl text-white font-heading">
            Shop now
          </button>
          <button className="my-2 lg:my-4 mx-0 lg:ml-[21px] border-primary border text-primary w-full lg:w-36 h-[50px] lg:h-[61px] rounded-3xl font-heading">
            View more
          </button>
        </div>
        <div className="flex mt-8 lg:mt-12 lg:ml-32 space-x-2 justify-center items-center">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 lg:w-4 lg:h-4 ${
                currentIndex === index ? "bg-orange" : "bg-gray"
              } hover:bg-orange rounded-full border border-black cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}