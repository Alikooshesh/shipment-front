"use client";

import BlCard from "@/components/pages/dashboard/dashboard/blCard";
import { getAllBl } from "@/services/dashboard/bl";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [blList, setBlList] = useState([]);

  const [filterControl, setFilterControl] = useState("In-Transit");

  const getBlList = async () => {
    const list = await getAllBl();
    setBlList(list);
  };

  useEffect(() => {
    getBlList();
  }, []);

  return (
    <>
      <div className="w-screen h-[54px] md:h-[64px] mt-[24px] flex items-center justify-center gap-[18px] md:gap-[128px] bg-white border-y-[1px] border-[#2996E8]">
        <button
            onClick={()=> setFilterControl("In-Transit")}
          className={`font-[600] text-[16px] md:text-[20px] ${
            filterControl === "In-Transit" ? "text-[#2996E8]" : "text-[#7C7C7C]"
          }`}
        >
          In-Transit
        </button>
        <div className="w-[2px] bg-[#000000] md:hiddne" />
        <button
            onClick={()=> setFilterControl("Completed")}
          className={`font-[600] text-[16px] md:text-[20px] ${
            filterControl !== "In-Transit" ? "text-[#2996E8]" : "text-[#7C7C7C]"
          }`}
        >
          Completed
        </button>
      </div>
      <div className="w-full p-[16px] md:py-[32px] md:px-[64px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-[16px] md:gap-[34px]">
        {blList.filter(item => {
            const now = new Date()
            const r = new Date(item.receiveDate)
            if(filterControl === "In-Transit"){
                if(r > now){
                    return item
                }
            }else{
                if(r < now){
                    return item
                }
            }
        }).map((item) => (
          <BlCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
