import car1 from "../../images/car1.svg";
import car2 from "../../images/car2.svg";
import car3 from "../../images/car3.svg";
import { Button } from "../button/button";
const Cars = [
  {
    id: 1,
    rent: 12000,
  },
  {
    id: 2,
    rent: 8000,
  },
  {
    id: 3,
    rent: 4000,
  },
];
export const LuxuryRenantals = () => {
  return (
    <div className="bg-primaryMain p-5">
      <div className="text-white divider-y">
        <h2>loram epsam</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {Cars.map((item) => {
          return (
            <div className="card m-5" key={item.id}>
              <img src={car1.src} alt="car 1" className="m-auto" />
              <div className="bg-gray-500 -mt-20 p-5 rounded-xl grid">
                <div className="bg-gray-100 h-16 mt-20 m-5">hello</div>
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
