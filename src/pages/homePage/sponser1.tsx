import F55 from "../../assets/Frame 55.png";
import F56 from "../../assets/Frame 56.png";
import F57 from "../../assets/Frame 57.png";

export default function Sponser1() {
  return (
    <div className="mt-[75px] h-40 lg:mx-12 rounded-xl flex flex-wrap justify-center items-center bg-darkblue p-4">
      <img
        src={F55}
        alt="Sponsor 1"
        className="w-24 lg:w-[271px] lg:h-[67px] h-auto sm:w-32 md:w-40  mx-2 mb-2"
      />
      <img
        src={F56}
        alt="Sponsor 2"
        className="w-24 h-auto sm:w-32 ml-28 md:w-40 lg:w-[271px] lg:h-[67px] mx-2 mb-2"
      />
      <img
        src={F57}
        alt="Sponsor 3"
        className="w-24 h-auto sm:w-32 ml-28 md:w-40 lg:w-[271px] lg:h-[67px] mx-2 mb-2"
      />
    </div>
  );
}

