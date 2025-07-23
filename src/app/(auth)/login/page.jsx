"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Toggle from "@/components/toggle";
import { login } from "@/services/auth/login";
import { getToken } from "@/utils/token";
import { Login, PasswordCheck, UserOctagon } from "iconsax-reactjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const LoginPage = () => {
  
  const [isToggleActive, setIsToggleActive] = useState(false);

  const [hasError, setHasError] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  function submitForm(e) {
    e.preventDefault();
    if (hasError) return;
    login({ ...formData })
      .then(() => {
        redirect("/dashboard");
      })
      .catch((e) => {
        console.log(e)
        setHasError(true);
      });
  }

  useEffect(() => {
    setHasError(false);
  }, [formData]);

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
              <div className="flex flex-col gap-[24px] mb-[16px]">
                <Input
                  value={formData.userName}
                  onChange={(e) =>
                    setFormData({ ...formData, userName: e.target.value })
                  }
                  icon={<UserOctagon size={24} />}
                  label={"User Name :"}
                  hasError={hasError}
                />
                <Input
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type="password"
                  icon={<PasswordCheck size={24} />}
                  label={"Password :"}
                  hasError={hasError}
                />
              </div>
              <Link href={"/forget"} className="block mb-[24px]">
                <span className="text-[#2996E8]">Forget password ?</span>
              </Link>
              <Toggle
                label={"Remember my login details :"}
                isActive={isToggleActive}
                setIsActive={setIsToggleActive}
              />
              <Button
                className={"mt-[44px]"}
                type="submit"
                icon={<Login size={24} />}
                disabled={!(formData.password && formData.userName) || hasError}
              >
                Log in
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
