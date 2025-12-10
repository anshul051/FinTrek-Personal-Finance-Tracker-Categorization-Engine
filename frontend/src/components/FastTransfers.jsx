import React from "react";
import { CircleEllipsis } from 'lucide-react';

const FastTransfers = () => {
  return (
    <div className="bg-gray-800 h-[380px] w-[550px] mt-7 mb-7 ml-7 p-4 rounded-xl shadow-lg flex flex-col">
      <div className="flex mb-1">
        <h2 className="text-gray-300 font-extralight text-xl">Fast Transfers</h2>
        <CircleEllipsis className="ml-auto text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" size={22} />
      </div>
      <div>

      </div>
      <button className="bg-purple-500 text-white h-10 rounded-full mt-auto cursor-pointer">Transfer</button>
    </div>
  );
};

export default FastTransfers;
