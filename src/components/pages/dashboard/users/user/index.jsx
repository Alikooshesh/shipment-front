import { UserEdit } from "iconsax-reactjs";
import Link from "next/link";

const User = ({ bgWhite, id, name, userName, profile, blCount }) => {
    return (
      <div
        className={`w-full h-[92px] px-[16px] flex items-center justify-center ${
          bgWhite ? "bg-white" : ""
        }`}
      >
        <div className="w-full max-w-[486px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[12px] sm:gap-[32px]">
            <img
              className="w-[64px] h-[64px] rounded-full bg-[#F6DE9D]"
              src={profile}
            />
            <div className="flex flex-col gap-[8px] sm:gap-[16px]">
              <div className="flex flex-col gap-[8px] sm:flex-row sm:gap-[24px]">
                <p className="font-[500] text-[16px] text-[#2E353A] sm:font-[700] sm:text-[20px]">
                  {name}
                </p>
                <p className="font-[500] text-[12px] text-[#7C7C7C] sm:text-[20px]">
                  {userName}
                </p>
              </div>
              <p className="text-[#6B7BFF] font-[700] text-[12px] sm:font-[600] sm:text-[20px]">
                Submitted BLs : {blCount}
              </p>
            </div>
          </div>
          <Link href={`/dashboard/users/edit/${id}`}>
            <UserEdit size={24} color="#6B7BFF" />
          </Link>
        </div>
      </div>
    );
  };

  
  export default User