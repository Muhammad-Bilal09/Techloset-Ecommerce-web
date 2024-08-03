import Elicipe from "../../assets/Ellipse 4.png";
import Elicipe2 from "../../assets/Ellipse 4 (2).png";
import Elicipe3 from "../../assets/Ellipse 4 (1).png";

export default function Review() {
  return (
    <div className="py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md rounded-3xl border border-gray-200">
            <div className="flex items-center p-4">
              <img
                className="border-2 p-2 border-dashed rounded-full border-yellow-300 w-16 h-16"
                src={Elicipe}
                alt="Reviewer 1"
              />
              <p className="font-bold text-green-300 ml-4 text-lg font-heading">Sevenya Naguyan</p>
            </div>
            <p className="bg-blue-100 p-4 font-bold rounded-b-xl font-heading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus eum dolor dolorem nostrum sunt itaque alias ut dolorum
              est eos harum, expedita necessitatibus aperiam vero neque.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-3xl border border-gray-200">
            <div className="flex items-center p-4">
              <img
                className="border-2 p-2 border-dashed rounded-full border-yellow-300 w-16 h-16"
                src={Elicipe3}
                alt="Reviewer 2"
              />
              <p className="font-bold text-green-300 ml-4 text-lg font-heading">Esther Howard</p>
            </div>
            <p className="bg-blue-100 p-4 font-bold rounded-b-xl font-heading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus eum dolor dolorem nostrum sunt itaque alias ut dolorum
              est eos harum, expedita necessitatibus aperiam vero neque.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-3xl border border-gray-200">
            <div className="flex items-center p-4">
              <img
                className="border-2 p-2 border-dashed rounded-full border-yellow-300 w-16 h-16"
                src={Elicipe2}
                alt="Reviewer 3"
              />
              <p className="font-bold text-green-300 ml-4 text-lg font-heading">Sevenya Naguyan</p>
            </div>
            <p className="bg-blue-100 p-4 font-bold rounded-b-xl font-heading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus eum dolor dolorem nostrum sunt itaque alias ut dolorum
              est eos harum, expedita necessitatibus aperiam vero neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}