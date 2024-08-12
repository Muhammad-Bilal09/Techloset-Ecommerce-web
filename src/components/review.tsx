import reviews from "../constants/reviews";


export default function Review() {
  return (
    <div className="py-10 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-md rounded-3xl border border-gray-200 overflow-hidden"
            >
              <div className="flex items-center p-4">
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
