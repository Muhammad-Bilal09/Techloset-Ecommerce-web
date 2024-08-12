import { sponsors } from "../../constants/sponser";

export default function SponsorTwo() {
  return (
    <div className="mt-[75px] h-40 lg:mx-12 rounded-xl flex flex-wrap justify-center items-center bg-darkblue p-4">
      {sponsors.map((sponsor, index) => (
        <img
          key={index}
          src={sponsor.src}
          alt={sponsor.alt}
          className="w-24 h-auto mx-2 mb-2 sm:w-32 md:w-40 lg:w-52 lg:h-auto"
        />
      ))}
    </div>
  );
}

