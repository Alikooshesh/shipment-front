const Toggle = ({ label, isActive, setIsActive }) => {
  return (
    <div className="w-full flex items-center justify-between gap-2">
      <span className="font-[500] text-[#AAAAAA]">{label}</span>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`w-[64px] h-[32px] rounded-[32px] flex p-[4px] cursor-pointer ${
          !isActive ? "bg-[#2996E8] justify-end" : "bg-[#D9D9D9] justify-start"
        }`}
      >
        <div className="size-[24px] rounded-full bg-white" />
      </div>
    </div>
  );
};

export default Toggle;
