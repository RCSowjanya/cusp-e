import React from "react";
import { FaRegUser } from "react-icons/fa";
const Installation = ({ formData, handleChange }) => {
  return (
    <div>
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
          Roof/Site Of Installation Located at Floor Number
        </h2>
        <div className="flex items-center border w-full rounded-md  border-[#CDC4B1] bg-[#FFFDF9] quote">
          <div className="border-r  border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="number"
            name="floorNumber"
            value={formData.floorNumber}
            onChange={handleChange}
            placeholder="Enter Floor Number"
            className="w-full px-4 py-5 rounded-md font-[400] text-[16px] shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Installation;