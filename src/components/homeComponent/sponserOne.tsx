import { sponsorsOne } from "../../constants/sponser";

export default function SponserOne() {
  return (
    <div className="lg:my-[75px] lg:ml-[51px] lg:mr-[61px] rounded-xl flex flex-wrap justify-center items-center bg-darkblue">
      {sponsorsOne.map((sponsor, index) => (
        <img
          key={index}
          src={sponsor.src}
          alt={sponsor.alt}
        className="my-10"
        />
      ))}
    </div>
  );
}
