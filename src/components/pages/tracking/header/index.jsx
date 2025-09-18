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
    <div className="w-full px-[16px] lg:px-[24px] py-[24px]">
      <div className="w-full max-w-[1260px] mx-auto lg:flex lg:items-end lg:justify-between">
        <div className="flex-1 flex items-center gap-[42px]">
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
        </div>

        <p className="mt-[36px] lg:mt-0 flex-1 font-[600] text-[24px] lg:text-[36px] text-center">
        Shipment Details
        </p>

        <div className="flex-1 opacity-0 hidden lg:block">.</div>
      </div>

      
    </div>

    </>
  );
};

export default Header;
