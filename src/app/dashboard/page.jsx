"use client";

import Button from "@/components/button";
import BlCard from "@/components/pages/dashboard/dashboard/blCard";
import SelectFilter from "@/components/pages/dashboard/dashboard/selectFilter";
import { getAllBl } from "@/services/dashboard/bl";
import { ArrowDown2, Calendar, CloseCircle, FolderAdd } from "iconsax-reactjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [showNotif, setShowNotif] = useState(true);

  const [blList, setBlList] = useState([]);

  const [filterControl, setFilterControl] = useState("In-Transit");

  const [dateFilter , setDateFilter] = useState(new Date().toISOString().split("T")[0])

  const [filter , setFilter] = useState(null)

  const getBlList = async () => {
    const list = await getAllBl({date : dateFilter , filter});
    setBlList(list);
  };

  useEffect(() => {
    getBlList();
  }, [dateFilter,filter]);

  return (
    <>
      <div className="hidden w-full xl:flex items-center justify-between px-[44px] py-[24px]">
        <div className="flex items-center gap-[24px]">
          <div className="relative">
            <Calendar
              size={24}
              color="#2996E8"
              className="absolute top-1/2 translate-y-[-50%] left-[12px] pointer-events-none"
            />
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              onChange={(e)=> setDateFilter(e.target.value)}
              className="w-[188px] h-[54px] pl-[44px] pr-[12px] text-[#2996E8] border-[2px] border-[#2996E8] rounded-[8px] font-[600] text-[16px]"
            />
            <ArrowDown2
              size={24}
              color="#2996E8"
              className="absolute top-1/2 translate-y-[-50%] right-[12px] bg-[#F5F6FA] pointer-events-none"
            />
          </div>

          <SelectFilter setFilter={setFilter}/>
        </div>
        {showNotif && (
          <div className="w-full max-w-[416px] px-[16px] py-[12px] rounded-[8px] bg-white border-[1px] border-[#1E1E1E]">
            <div className="w-full flex items-center justify-between">
              <p className="font-[600] text-[16px] text-[#1E1E1E]">Yashar :</p>
              <CloseCircle
                size={16}
                color="#FF0000"
                onClick={() => setShowNotif(false)}
              />
            </div>
            <p className="font-[600] text-[12px] text-[#7C7C7C]">
              Welcome back! Don’t forget to check the latest updates and
              complete your pending tasks. If you need any help, feel free to
              contact support.
            </p>
          </div>
        )}
      </div>
      <div className="w-full px-[16px] pt-[42px] flex items-center gap-[12px] xl:hidden">
      <div className="relative">
            <Calendar
              size={24}
              color="#2996E8"
              className="absolute top-1/2 translate-y-[-50%] left-[12px] pointer-events-none"
            />
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              onChange={(e)=> setDateFilter(e.target.value)}
              className="w-[188px] h-[48px] pl-[44px] pr-[12px] text-[#2996E8] border-[2px] border-[#2996E8] rounded-[8px] font-[600] text-[16px]"
            />
            <ArrowDown2
              size={24}
              color="#2996E8"
              className="absolute top-1/2 translate-y-[-50%] right-[12px] bg-[#F5F6FA] pointer-events-none"
            />
          </div>

          <Link className="block w-[173px]" href={"/dashboard/bl/add"}>
          <Button icon={<FolderAdd size={24} className="hidden sm:block"/>} leftIcon>
            Add new B\L
          </Button>
          </Link>
      </div>
      <div className="w-full h-[54px] md:h-[64px] mt-[24px] flex items-center justify-center gap-[18px] md:gap-[128px] bg-white border-y-[1px] border-[#2996E8]">
        <button
          onClick={() => setFilterControl("In-Transit")}
          className={`font-[600] text-[16px] md:text-[20px] ${
            filterControl === "In-Transit" ? "text-[#2996E8]" : "text-[#7C7C7C]"
          }`}
        >
          In-Transit
        </button>
        <div className="w-[2px] bg-[#000000] md:hiddne" />
        <button
          onClick={() => setFilterControl("Completed")}
          className={`font-[600] text-[16px] md:text-[20px] ${
            filterControl !== "In-Transit" ? "text-[#2996E8]" : "text-[#7C7C7C]"
          }`}
        >
          Completed
        </button>
      </div>
      <div className="w-full max-w-screen p-[16px] md:py-[32px] md:px-[64px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-[16px] md:gap-[34px]">
        {blList
          .filter((item) => {
            const now = new Date();
            const r = new Date(item.receiveDate);
            if (filterControl === "In-Transit") {
              if (r > now) {
                return item;
              }
            } else {
              if (r < now) {
                return item;
              }
            }
          })
          .map((item) => (
            <BlCard key={item.id} {...item} />
          ))}
      </div>
    </>
  );
};

export default DashboardPage;
