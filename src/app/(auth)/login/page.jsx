"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Toggle from "@/components/toggle";
import { Login, PasswordCheck, UserOctagon } from "iconsax-reactjs";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="flex-1 h-full flex items-center justify-center px-[16px]">
        <div className="w-full h-screen py-[64px] overflow-y-auto">
        <div className="w-full max-w-[360px] mx-auto">
            <div className="flex flex-col items-center mb-[40px]">
                <img className="w-[250px] h-auto mx-auto mb-[36px]" src="/images/login/logo.png"/>
                <p className="font-[700] text-[32px] text-[#2996E8] mb-[8px]">KHAREEF MARITIME</p>
                <p className="font-[500] text-[#2996E8] text-[20px]">EXPRESS SHIPPING</p>
            </div>
          <form className="w-full">
            <div className="flex flex-col gap-[24px] mb-[16px]">
              <Input icon={<UserOctagon size={24} />} label={"User Name :"} />
              <Input icon={<PasswordCheck size={24} />} label={"Password :"} />
            </div>
            <Link href={"/forget"} className="block mb-[24px]">
              <span className="text-[#2996E8]">Forget password ?</span>
            </Link>
            <Toggle
              label={"Remember my login details :"}
              isActive={isToggleActive}
              setIsActive={setIsToggleActive}
            />
            <Button className={"mt-[44px]"} icon={<Login size={24} />}>
              Log in
            </Button>
          </form>

          <div className="w-full mt-[32px] flex items-center justify-center gap-[8px]">
            <span className="text-[#AAAAAA] font-[500]">
            Don't have an account ? 
            </span>
            <Link href={'/signup'} className="text-[#2996E8] font-[500]">
            Sign up
            </Link>
          </div>
        </div>
        </div>
      </div>
      <div className="hidden lg:block flex-1 h-full">
        <img
          src="/images/login/bg.jpg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
