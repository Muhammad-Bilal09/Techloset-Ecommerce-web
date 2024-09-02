import { sponsors } from "../../constants/sponser";

export default function SponsorTwo() {
  return (
    <div className="mt-[75px] lg:ml-[51px] lg:mr-[61px] rounded-xl flex lg:flex-row flex-col  justify-center items-center bg-darkblue p-4">
      {sponsors.map((sponsor, index) => (
        <img
          key={index}
          src={sponsor.src}
          alt={sponsor.alt}
          className="mx-20 lg:mx-4 lg:my-[47px] my-12 mt-[46px] "
        />
      ))}
    </div>
  );
}

