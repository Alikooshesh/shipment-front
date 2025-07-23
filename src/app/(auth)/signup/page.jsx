'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import Toggle from "@/components/toggle";
import { getToken } from "@/utils/token";
import { CallIncoming, PasswordCheck, TickSquare, UserOctagon } from "iconsax-reactjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const SignupPage = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  const [hasError , setHasError] = useState(false)

  const [formData , setFormData] = useState({
    userName : "",
    password : "",
    phoneNumber : ""
  })

  function submitForm(e){
    e.preventDefault()
    if(!hasError){
        setHasError(true)
    }
  }

  useEffect(()=>{
    setHasError(false)
  },[formData])

  useEffect(() => {
    const checkToken = async () => {
      const t = await getToken();
      if (t) {
        redirect("/dashboard");
      }
    };
  
    checkToken();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="flex-1 h-full flex items-center justify-center px-[16px]">
        <div className="w-full h-screen py-[64px] overflow-y-auto no-scrollbar">
          <div className="w-full max-w-[360px] mx-auto">
            <div className="flex flex-col items-center mb-[40px]">
              <img
                className="w-[250px] h-auto mx-auto mb-[36px]"
                src="/images/login/logo.png"
              />
              <p className="font-[700] text-[32px] text-[#2996E8] mb-[8px]">
                KHAREEF MARITIME
              </p>
              <p className="font-[500] text-[#2996E8] text-[20px]">
                EXPRESS SHIPPING
              </p>
            </div>
            <form className="w-full" onSubmit={submitForm}>
              <div className="flex flex-col gap-[24px] mb-[32px]">
                <Input value={formData.userName} onChange={(e)=> setFormData({...formData , userName:e.target.value})} icon={<UserOctagon size={24} />} label={"User Name :"} />
                <Input value={formData.phoneNumber} onChange={(e)=> {
                    if(!isNaN(e.target.value)){
                        setFormData({...formData , phoneNumber:e.target.value})
                    }
                }} icon={<CallIncoming size={24} />} label={"Number :"} />
                <Input
                type="password"
                value={formData.password} onChange={(e)=> setFormData({...formData , password:e.target.value})}
                  icon={<PasswordCheck size={24} />}
                  label={"Password :"}
                />
              </div>
              <Toggle
                label={"Remember my sign up details :"}
                isActive={isToggleActive}
                setIsActive={setIsToggleActive}
              />
              <Button className={"mt-[60px]"} icon={<TickSquare size={24}/>} disabled={!(formData.password && formData.userName && formData.phoneNumber)}>
              Sign Up
              </Button>
            </form>

            <div className="w-full mt-[32px] flex items-center justify-center gap-[8px]">
              <span className="text-[#AAAAAA] font-[500]">
                Don't have an account ?
              </span>
              <Link href={"/signup"} className="text-[#2996E8] font-[500]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
