import FrameOne from "../assets/images/frameFiftyFive.png";
import FrameTwo from "../assets/images/frameFiftySix.png";
import FrameThree from "../assets/images/frameFiftySeven.png";

export default function SponserOne() {
  return (
    <div className="mt-[75px] h-40 lg:mx-12 rounded-xl flex flex-wrap justify-center items-center bg-darkblue p-4">
      <img
        src={FrameOne}
        alt="Sponsor 1"
        className="w-24 lg:w-[271px] lg:h-[67px] h-auto sm:w-32 md:w-40  mx-2 mb-2"
      />
      <img
        src={FrameTwo}
        alt="Sponsor 2"
        className="w-24 h-auto sm:w-32 ml-28 md:w-40 lg:w-[271px] lg:h-[67px] mx-2 mb-2"
      />
      <img
        src={FrameThree}
        alt="Sponsor 3"
        className="w-24 h-auto sm:w-32 ml-28 md:w-40 lg:w-[271px] lg:h-[67px] mx-2 mb-2"
      />
    </div>
  );
}
