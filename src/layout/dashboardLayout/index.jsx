import { Back, Home2 } from "iconsax-reactjs";
import HeaderNav from "./headerNav";
import Link from "next/link";

const navList = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <Home2 size={24} />,
  },
  {
    name: `Add new B/L`,
    url: "/dashboard/bl/add",
    icon: <Home2 size={24} />,
  },
  {
    name: "Ship Tracker",
    url: "/ship",
    icon: <Home2 size={24} />,
  },
  {
    name: "Users",
    url: "/dashboard/users",
    icon: <Home2 size={24} />,
  },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-[#F5F6FA]">
      <div className="hidden xl:block w-full h-[80px] px-[24px] py-[8px] bg-white">
        <div className="w-full flex items-center justify-between">
          <img className="h-[64px]" />
          <div className="flex items-center gap-[32px]">
            <div className="flex items-center gap-[36px]">
              {navList.map((item) => (
                <HeaderNav key={item.url} {...item} />
              ))}
            </div>
            <div className="bg-white w-[311px] h-[44px]" />
          </div>
          <Link href={'/dashboard/profile'} className="size-[48px] rounded-full">
          <img
            className="size-[48px] rounded-full"
            src="https://cdn.mos.cms.futurecdn.net/v2/t:191,l:0,cw:3572,ch:2009,q:80,w:3572/ntFmJUZ8tw3ULD3tkBaAtf.jpg"
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
