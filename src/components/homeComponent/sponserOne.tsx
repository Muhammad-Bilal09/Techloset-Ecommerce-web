import { sponsorsOne } from "../../constants/sponser";

export default function SponserOne() {
  return (
    <div className="mt-[75px] h-40 lg:mx-12 rounded-xl flex flex-wrap justify-center items-center bg-darkblue p-4">
      {sponsorsOne.map((sponsor, index) => (
        <img
          key={index}
          src={sponsor.src}
          alt={sponsor.alt}
          className={`w-24 h-auto sm:w-32 md:w-40 lg:w-[271px] lg:h-[67px] mx-2 mb-2 ${
            index > 0 ? "ml-28" : ""
          }`}
        />
      ))}
    </div>
  );
}
