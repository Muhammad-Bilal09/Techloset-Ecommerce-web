import BrandOne from "../assets/images/brandFour.png";
import BrandTwo from "../assets/images/brandFive.png";
import BrandThree from "../assets/images/brandSix.png";
import BrandFour from "../assets/images/brandSeven.png";
import BrandFive from "../assets/images/brandEight.png";

export default function SponserTwo() {
  return (
    <div className="mt-[75px] h-40 lg:mx-12 rounded-xl flex flex-wrap justify-center items-center bg-darkblue p-4">
      <img
        src={BrandOne}
        alt="Sponsor 1"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
      <img
        src={BrandTwo}
        alt="Sponsor 2"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
      <img
        src={BrandThree}
        alt="Sponsor 3"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
      <img
        src={BrandFour}
        alt="Sponsor 4"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
      <img
        src={BrandFive}
        alt="Sponsor 5"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
    </div>
  );
}
