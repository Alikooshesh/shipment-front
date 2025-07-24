"use client";

import { Back, FolderAdd, Home2, Profile2User, Ship } from "iconsax-reactjs";
import HeaderNav from "./headerNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getToken, getUserRank } from "@/utils/token";
import { redirect } from "next/navigation";
import { getProfile } from "@/services/dashboard/profile";
import { getFileUrl } from "@/services/dashboard/file";

const DashboardLayout = ({ children }) => {
  const [navList, setNavList] = useState([
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <Home2 size={24} />,
    },
    {
      name: `Add new B/L`,
      url: "/dashboard/bl/add",
      icon: <FolderAdd size={24} />,
    },
    {
      name: "Ship Tracker",
      url: "/ship",
      icon: <Ship size={24} />,
    }
  ]);

  const [profileImage , setProfileImage] = useState(null)

  useEffect(() => {
    const checkToken = async () => {
      const t = await getToken();
      if (!t) {
        redirect("/login");
      } else {
        const isAdmin = await getUserRank();
        if (isAdmin) {
          setNavList([
            ...navList,

            {
              name: "Users",
              url: "/dashboard/users",
              icon: <Profile2User size={24} />,
            },
          ]);
        }
      }
    };

    const fetchProfile = async ()=>{
      const p = await getProfile()
      setProfileImage(getFileUrl(p.profileImage))
    }

    checkToken();
    fetchProfile()
  }, []);

  return (
    <div className="w-screen min-h-screen bg-[#F5F6FA]">
      <div className="hidden xl:block w-full h-[80px] px-[24px] py-[8px] bg-white">
        <div className="w-full flex items-center justify-between">
          <img className="h-[64px]" src="/images/dashboard/navbar/logo.png"/>
          <div className="flex items-center gap-[32px]">
            <div className="flex items-center gap-[36px]">
              {navList.map((item) => (
                <HeaderNav key={item.url} {...item} />
              ))}
            </div>
            <div className="bg-white w-[311px] h-[44px]" />
          </div>
          <Link
            href={"/dashboard/profile"}
            className="size-[48px] rounded-full"
          >
            <img
              className="size-[48px] rounded-full"
              src={profileImage ?? "https://cdn.mos.cms.futurecdn.net/v2/t:191,l:0,cw:3572,ch:2009,q:80,w:3572/ntFmJUZ8tw3ULD3tkBaAtf.jpg"}
            />
          </Link>
        </div>
      </div>
      <div className="w-full xl:hidden px-[16px] pt-[24px] flex items-center gap-[8px] text-[#6B7BFF]">
        <Back size={24} />
        <p className="font-[500] text-[16px]">Back</p>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
