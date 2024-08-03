import Brand4 from "../../assets/brand-4.png";
import Brand5 from "../../assets/brand-5.png";
import Brand6 from "../../assets/brand-6.png";
import Brand7 from "../../assets/brand-7.png";
import Brand8 from "../../assets/brand-8.png";

export default function Sponser2() {
  return (
    <div className="mt-[75px] h-40 lg:mx-12 rounded-xl flex flex-wrap justify-center items-center bg-darkblue p-4">
      <img
        src={Brand4}
        alt="Sponsor 1"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
      <img
        src={Brand5}
        alt="Sponsor 2"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
      <img
        src={Brand6}
        alt="Sponsor 3"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
      <img
        src={Brand7}
        alt="Sponsor 4"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
      <img
        src={Brand8}
        alt="Sponsor 5"
        className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
      />
    </div>
  );
}
