"use client";

import ProfileDocuments from "@/components/pages/dashboard/profile/documents";
import ProfileData from "@/components/pages/dashboard/profile/profileData";
import { useState } from "react";

const ProfilePage = () => {
  const [tab, setTab] = useState("profile");

  return (
    <>
      <div className="w-full flex items-center justify-center gap-[96px]">
        <button
          onClick={() => setTab("profile")}
          className={`p-[16px] border-[#2996E8] cursor-pointer text-[20px] font-[600] ${
            tab === "profile" ? "border-b-[2px] text-[#2996E8]" : "text-[#7C7C7C]"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setTab("document")}
          className={`p-[16px] border-[#2996E8] cursor-pointer text-[20px] font-[600] ${
            tab !== "profile" ? "border-b-[2px] text-[#2996E8]" : "text-[#7C7C7C]"
          }`}
        >
          Document
        </button>
      </div>
      <div className="w-full flex justify-center">
      {tab === "profile" ? <ProfileData /> : <ProfileDocuments />}
      </div>
    </>
  );
};

export default ProfilePage;
