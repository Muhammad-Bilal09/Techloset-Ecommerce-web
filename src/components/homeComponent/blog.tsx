import bagOne from "../../assets/images/blogOne.png";
import bagTwo from "../../assets/images/blogTwo.png";

export default function Blog() {
  return (
    <>
      <div className="mx-4 lg:mx-14 my-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col lg:flex-row lg:w-[650px] lg:h-[369px]  bg-white shadow-md rounded-lg gap-7 border p-4 lg:p-6">
          <div className="flex-shrink-0">
            <img
              className="w-full lg:w-70 h-auto lg:h-72 object-cover rounded-lg"
              src={bagOne}
              alt="Blog 1"
            />
          </div>
          <div className="lg:ml-6 flex-1 lg:w-[265px] lg:h-[300px] mt-4 lg:mt-0">
            <p className="text-blog border lg:w-[147px] p-2 rounded-lg  font-bold font-heading">
              22 October 2024
            </p>
            <p className="text-blog lg:w-[230px] lg:h-[68px] text-lg font-extrabold  my-3 font-heading">
              Who avoids a pain that produces?
            </p>
            <p className="font-heading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium tenetur nihil quaerat itaque ipsam neque perferendis
              accusamus suscipit cupiditate minima?
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:w-[650px] lg:h-[369px] lg:flex-row bg-white shadow-md rounded-lg border p-4 lg:p-6">
          <div className="flex-shrink-0">
            <img
              className="w-full lg:w-70 h-auto lg:h-72 object-cover rounded-lg"
              src={bagTwo}
              alt="Blog 2"
            />
          </div>
          <div className="lg:ml-6 flex-1 lg:w-[265px] lg:h-[300px] mt-4 lg:mt-0">
            <p className="text-blog border lg:w-[147px] p-2 rounded-lg  font-bold font-heading">
              22 October 2024
            </p>
            <p className="text-blog lg:w-[230px] lg:h-[68px] text-lg font-extrabold my-3 font-heading">
              Who avoids a pain that produces?
            </p>
            <p className="font-heading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium tenetur nihil quaerat itaque ipsam neque perferendis
              accusamus suscipit cupiditate minima?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
