import {
  Briefcase,
  Call,
  Information,
  Login,
  SearchNormal,
} from "iconsax-reactjs";
import Link from "next/link";

const Header = () => {
  return (
    <>
    <div className="w-full bg-[#F5F6FA] px-[16px] lg:px-[24px] py-[24px]">
      <div className="w-full max-w-[1260px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[42px]">
          <div className="flex items-center gap-[8px]">
            <img
              className="h-[42px] lg:h-[64px]"
              src="/images/dashboard/navbar/logo.png"
            />
            <h1 className="flex flex-col gap-[5px] text-[#2996E8]">
              <p className="font-[700] text-[20px]">KHAREEF MARITIME</p>
              <p className="font-[500] text-[16px]">EXPRESS SHIPPING</p>
            </h1>
          </div>
          <div className="hidden lg:flex items-center gap-[36px]">
            <a href="#tracking" className="flex items-center gap-[12px]">
              <SearchNormal size={24} color="#2E353A" />
              <p className="text-[20px] text-[#2E353A]">Shipment Tracking</p>
            </a>
            <a href="#about" className="flex items-center gap-[12px]">
              <Information size={24} color="#2E353A" />
              <p className="text-[20px] text-[#2E353A]">About us</p>
            </a>
            <a href="#services" className="flex items-center gap-[12px]">
              <Briefcase size={24} color="#2E353A" />
              <p className="text-[20px] text-[#2E353A]">Services</p>
            </a>
            <a href="#contact" className="flex items-center gap-[12px]">
              <Call size={24} color="#2E353A" />
              <p className="text-[20px] text-[#2E353A]">Contact us</p>
            </a>
          </div>
        </div>

        <Link href="/login" className="block">
          <div className="flex items-center gap-[8px] p-[12px] border-1 border-black rounded-full lg:border-0 lg:bg-[#2E353A] lg:rounded-[4px]">
            <p className="hidden lg:block text-white font-[700] text-[16px]">
              Log in
            </p>
            <Login className="hidden lg:block" size={24} color="#FFF" />
            <Login className="lg:hidden" size={24} color="#000" />
          </div>
        </Link>
      </div>

      
    </div>

    <div className="w-full flex items-center justify-center gap-[8px] lg:hidden">

    </div>
    </>
  );
};

export default Header;
