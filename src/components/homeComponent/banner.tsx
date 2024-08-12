import LaptopBanner from "../../assets/images/banner.png";

export default function banner() {
  return (
    <>
      <div className="flex justify-center items-center lg:w-[1340px} lg:h-[417px] lg:ml-[64px] lg:mr-[61px] mt-[51px] mx-10">
        <div className="relative">
          <img src={LaptopBanner} alt="" />
        </div>
        <div className="absolute lg:left-[770px]   lg:mt-24">
          <button className="w-32  lg:h-11 bg-orange text-white font-heading rounded-full">
            New Laptop
          </button>
          <h1 className="text-blue-400 font-bold lg:text-5xl lg:mt-2 font-heading">
            Sale upto 50% off
          </h1>
          <p className=" text-white lg:mt-2">12 inch hd display</p>
          <button className="w-32 lg:h-11 bg-orange rounded-full lg:mt-2 text-white font-heading">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
}
