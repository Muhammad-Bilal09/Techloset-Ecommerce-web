import { useHomeState } from "../../pages/homePage/useHome";
import { ItemType } from "../../types/types";
import { Link } from "react-router-dom";
import  leftArrow from "../../assets/images/arrowleft.png"
import rightArrow from '../../assets/images/arrowRight.png'; 




export default function Carousel() {
  const { state, currentIndex, handlePrevClick, handleNextClick, windowWidth } =
    useHomeState();

    const itemsToShow = windowWidth < 670 ? 1 : windowWidth < 1024 ? 2 : 3;

  return (
    <div className="flex justify-center mx-auto ">
      <div className="relative lg:mx-[109px] ">
        <div className="flex overflow-x-auto p-4 lg:mt-[55.5px] lg:mb-[101px]" style={{ gap: '43.35px' }}>
          {state?.items.data
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((item: ItemType, index: number) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[308px] md:w-[320px] lg:w-[381.63px] h-[147px] border border-reviewBorder rounded-[20px] bg-white shadow-md transition-transform transform hover:scale-105`}
              >
                <Link to={`/detail/${item.id}`}>
                  <div className="flex justify-between items-center h-full">
                    <img
                      className="w-[110px] h-[118px] mx-4 object-cover rounded-t-3xl"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="flex flex-col p-2 mx-10">
                      <p className="font-bold text-blue-900 font-heading text-lg lg:text-xl">
                        {item.title.slice(0, 12)}
                      </p>
                      <p className="font-bold text-blue-900 text-sm font-heading lg:text-lg">
                        (6 items)
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className="flex absolute w-full top-1/2 sm:transform -translate-y-5 lg:transform lg:-translate-y-10 justify-between">
          <button
            className=" flex items-center justify-center rounded-full shadow-lg"
            onClick={handlePrevClick}
          >
            <img src={leftArrow} alt="Previous" className=" text-primary" />
          </button>
          <button
            className=" flex items-center justify-center text-primary rounded-full shadow-lg"
            onClick={handleNextClick}
          >
            <img src={rightArrow} alt="Next" className=" text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}