import React from "react";
import { CirclePlus } from "lucide-react";

const BalanceCard = () => {
  return (
    <div className="bg-gray-800 h-[380px] w-[350px] m-7 p-4 rounded-xl shadow-lg flex flex-col cursor-pointer hover:scale-101 transition-transform duration-200">
      <div className="flex mb-1">
        <h2 className="text-gray-400 font-extralight">Total Balance</h2>
        <CirclePlus
          className="ml-auto text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
          size={22}
        />
      </div>
      <h2 className="text-white text-3xl font-semibold">$1,52,759.19</h2>
      <div className="flex">
        
      </div>
    </div>
  );
};

export default BalanceCard;
