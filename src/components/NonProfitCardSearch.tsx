import { MapPin, UserRound } from "lucide-react";
import React from "react";
import location from "../assets/images/location.svg";
const NonProfitCardSearch = ({ item }) => {
  return (
    <div className="bg-[#F3F2F2] rounded-xl flex flex-row gap-4 h-[300px] p-5">
      <div className="rounded-xl flex items-center justify-center h-[100%] w-[38%] ">
        <img
          src={item.image}
          alt=""
          className="h-[100%] object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col w-[65%] justify-center py-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#373737] line-clamp-2">
            CRWDs Group heading here{" "}
          </h3>
          <p className="text-[#6B6B6B] font-normal text-[16px] line-clamp-2">
            {" "}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
        </div>
        <div className="flex items-center gap-x-8  ">
          <div className="flex gap-2 pt-6 items-center">
            <div className="flex gap-2 items-center">
              <span>
                <img src={location} width={20} alt="" />
              </span>
              <p className="text-[18px] font-semibold">New York</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <img src={item.icon} width={20} alt="" />
              </span>
              <p className="text-[18px] font-semibold">56 Members</p>
            </div>
          </div>
        </div>
        <button className="rounded-full mt-8 p-2 py-3 w-[160px] cursor-pointer bg-[#393939] text-[#FFFFFF] text-sm font-light">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default NonProfitCardSearch;
