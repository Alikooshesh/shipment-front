"use client";

import {
  Back,
  DocumentFilter,
  FolderAdd,
  Home2,
  Profile2User,
  Ship,
} from "iconsax-reactjs";
import HeaderNav from "./headerNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getToken, getUserRank } from "@/utils/token";
import { redirect, usePathname } from "next/navigation";
import { getProfile } from "@/services/dashboard/profile";
import { getFileUrl } from "@/services/dashboard/file";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
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
    },
  ]);

  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");

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

    const fetchProfile = async () => {
      const p = await getProfile();
      setProfileImage(getFileUrl(p.profileImage));
      setName(p.fullName);
    };

    checkToken();
    fetchProfile();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-[#F5F6FA]">
      <div className="hidden xl:block w-full h-[80px] px-[24px] py-[8px] bg-white">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[42px]">
            <img className="h-[64px]" src="/images/dashboard/navbar/logo.png" />
            <div className="flex items-center gap-[32px]">
              <div className="flex items-center gap-[36px]">
                {navList.map((item) => (
                  <HeaderNav key={item.url} {...item} />
                ))}
              </div>
              <div className="bg-white w-[311px] h-[44px]" />
            </div>
          </div>
          <div
            className={`size-[64px] flex items-center justify-center rounded-full border-[2px] ${
              pathname === "/dashboard/profile"
                ? "border-[#2996E8]"
                : "border-transparent"
            }`}
          >
            <Link
              href={"/dashboard/profile"}
              className="size-[48px] rounded-full"
            >
              <img
                className="size-[48px] rounded-full"
                src={profileImage ?? "/t.png"}
              />
            </Link>
          </div>
        </div>
      </div>
      {pathname === "/dashboard" ? (
        <DashboardMainPageHeader name={name} profileImage={profileImage} />
      ) : (
        <button
          onClick={() => {
            window.history.back();
          }}
          className="w-full xl:hidden px-[16px] pt-[24px] flex items-center gap-[8px] text-[#6B7BFF]"
        >
          <Back size={24} />
          <p className="font-[500] text-[16px]">Back</p>
        </button>
      )}
      {children}
    </div>
  );
};

export default DashboardLayout;

const DashboardMainPageHeader = ({ name, profileImage }) => {
  return (
    <div className="w-full xl:hidden px-[16px] py-[32px] flex items-center justify-between">
      <Link href={"/dashboard/profile"} className="size-[48px] rounded-full">
        <img
          className="size-[48px] rounded-full"
          src={profileImage ?? "/t.png"}
        />
      </Link>

      <div className="flex flex-col items-center justify-center gap-[4px]">
        <p className="font-[500] text-[16px] text-[#7C7C7C]">Welcome aboard</p>
        <p className="font-[600] text-[14px] text-[#1E1E1E]">{name}</p>
      </div>

      <button className="size-[48px] rounded-full flex items-center justify-center bg-white border-[1px] border-[#2996E8]">
        <DocumentFilter size={24} color="#2996E8" />
      </button>
    </div>
  );
};
