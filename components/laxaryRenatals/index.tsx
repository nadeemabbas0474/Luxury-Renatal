import car1 from "../../images/car1.svg";
import car2 from "../../images/car2.svg";
import car3 from "../../images/car3.svg";
import { Button } from "../button/button";
import { AiFillStar } from "react-icons/ai";
const Cars = [
  {
    id: 1,
    rent: 12000,
    img: car1,
  },
  {
    id: 2,
    rent: 8000,
    img: car2,
  },
  {
    id: 3,
    rent: 4000,
    img: car3,
  },
];
export const LuxuryRenantals = () => {
  return (
    <div className="bg-primaryMain p-5">
      <div className="text-white divider-y">
        <h2>loram epsam</h2>
        <p className="text-gray-500 py-5 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <hr className="border-gray-600"/>
      <div className="grid grid-cols-1 gap-8 p-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {Cars.map((item) => {
          return (
            <div className="card m-5 h-30 w-30" key={item.id}>
              <img src={item.img.src} alt="car 1" className="m-auto" />
              <div className="bg-gray-900 -mt-20 p-5 rounded-xl grid">
                <div className="start-box bg-slate-800 rounded-xl flex leading-10 items-center text-4xl font-semibold text-yellow-500 justify-center h-40 mt-20 m-5">
                 < AiFillStar/> <p className="leading-10 tracking-wider">{item.rent} / <span className="text-white text-lg text-gray-400">day</span></p>
                </div>
                <div className="flex justify-center">
                  <Button sm>Continue</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
