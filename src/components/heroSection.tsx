import cameraOne from "../assets/images/cameraOne.png";
import cameraTwo from "../assets/images/cameraTwo.jpg";
import cameraThree from "../assets/images/cameraOne.png";
import { useHomeState } from "../pages/homePage/useHome";
const images = [cameraOne, cameraTwo, cameraThree];

export default function HeroSection() {
  const { currentIndex, handleDotClick } = useHomeState();

  return (
    <div className="w-full lg:h-[394px] grid lg:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-center lg:items-start ml-[109px] mr-[108px]">
        <p className="font-bold lg:w-20 text-primary text-[43px] font-heading">
          Canon Camera
        </p>
        <div className="mt-4 flex flex-col lg:flex-row gap-4">
          <button className="bg-orange w-36 h-[61px] rounded-3xl text-white font-heading">
            Shop now
          </button>
          <button className="border-primary border text-primary w-36 h-[61px] rounded-3xl font-heading">
            View more
          </button>
        </div>
        <div className="flex mt-12 lg:ml-32 space-x-2 justify-center items-center">
          <div
            onClick={() => handleDotClick(0)}
            className={`w-4 h-4 ${
              currentIndex === 0 ? "bg-orange" : "bg-gray"
            } hover:bg-orange rounded-full border border-black cursor-pointer`}
          ></div>
          <div
            onClick={() => handleDotClick(1)}
            className={`w-4 h-4 ${
              currentIndex === 1 ? "bg-orange" : "bg-gray"
            } hover:bg-orange rounded-full border border-black cursor-pointer`}
          ></div>
          <div
            onClick={() => handleDotClick(2)}
            className={`w-4 h-4 ${
              currentIndex === 2 ? "bg-orange" : "bg-gray"
            } hover:bg-orange rounded-full border border-black cursor-pointer`}
          ></div>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <img
          className="w-[289px]  h-auto"
          src={images[currentIndex]}
          alt={`Camera ${currentIndex + 1}`}
        />

        <div className="ml-1 absolute left-56 bottom-6 lg:left-96 lg:bottom-12 md:left-[390px] md:bottom-[35px] rounded-[588.94px] md:w-[104.83px] md:h-[100.12px] sm:w-[99.83px] sm:h-[95.12px] w-[90.81px] h-[86.10px] bg-orange">
          <div className="text-[15px] sm:text-[21.57px] top-6 relative leading-12 text-white text-center items-center justify-center font-semibold">
            <div>only</div>
            <div>$89</div>
          </div>
        </div>
      </div>
    </div>
  );
}
