const { default: Button } = require("@/components/button");
const { UserAdd, UserEdit } = require("iconsax-reactjs");
const { default: Link } = require("next/link");

const users = [
  {
    id: 1,
    name: "reza ardalan",
    userName: "ardalan_r12",
    profile:
      "https://cdn.mos.cms.futurecdn.net/v2/t:191,l:0,cw:3572,ch:2009,q:80,w:3572/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    blCount: 20,
  },
  {
    id: 2,
    name: "reza ardalan",
    userName: "ardalan_r12",
    profile:
      "https://cdn.mos.cms.futurecdn.net/v2/t:191,l:0,cw:3572,ch:2009,q:80,w:3572/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    blCount: 20,
  },
  {
    id: 3,
    name: "reza ardalan",
    userName: "ardalan_r12",
    profile:
      "https://cdn.mos.cms.futurecdn.net/v2/t:191,l:0,cw:3572,ch:2009,q:80,w:3572/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    blCount: 20,
  },
  {
    id: 4,
    name: "reza ardalan",
    userName: "ardalan_r12",
    profile:
      "https://cdn.mos.cms.futurecdn.net/v2/t:191,l:0,cw:3572,ch:2009,q:80,w:3572/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    blCount: 20,
  },
];

const UsersPage = () => {
  return (
    <>
      <h2 className="w-full text-center sm:hidden mx-auto font-[600] text-[24px] text-[#2E353A] mt-[20px] mb-[42px]">
        User
      </h2>
      <div className="flex flex-col gap-[72px] sm:gap-[48px] bg-[#F5F6FA]">
        <Link
          href="/dashboard/users/add"
          className="sm:mt-[32px] w-full px-[16px] order-1 sm:order-0"
        >
          <Button
            icon={<UserAdd size={24} color="white" />}
            className="w-full max-w-[486px] mx-auto h-[48px] sm:h-[54px]"
            color="green"
            leftIcon
          >
            Add New User
          </Button>
        </Link>

        <div className="w-screen flex flex-col">
          {users.map((u, i) => (
            <User key={u.id} bgWhite={i % 2 === 0} {...u} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersPage;

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
