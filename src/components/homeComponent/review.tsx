import reviews from "../../constants/reviews";


export default function Review() {
  return (
    <div className="mx-8 mt-7 lg:ml-[61px] lg:mr-[60px] lg:mt-[75px] bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white lg:w-[100%]  lg:h-[242px] shadow-md rounded-3xl border border-gray-200 overflow-hidden"
            >
              <div className="flex items-center p-2">
                <img
                  className="border-2 p-2 border-dashed rounded-full border-yellow-300 w-16 h-16"
                  src={review.image}
                  alt={`Profile picture of ${review.name}`}
                />
                <p className="font-bold text-green-300 ml-4 text-lg">
                  {review.name}
                </p>
              </div>
              <p className="bg-blue-100 p-4 font-bold rounded-b-xl">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
