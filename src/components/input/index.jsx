"use client";

import { useState } from "react";

const Input = ({ icon, label, ...props }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="w-full flex flex-col gap-[13px]">
      {(icon || label) && (
        <div className="flex items-center gap-[4px]">
          {icon && (
            <span className={!isFocus ? "text-[#AAAAAA]" : "text-[#2996E8]"}>
              {icon}
            </span>
          )}
          {label && (
            <label
              className={`font-[500] text-[16px] ${
                !isFocus ? "text-[#AAAAAA]" : "text-[#2996E8]"
              }`}
            >
              {label}
            </label>
          )}
        </div>
      )}
      <input
        {...props}
        onFocus={(e) => {
          setIsFocus(true);
          if (onFocus) {
            onFocus(e);
          }
        }}
        onBlur={(e) => {
          setIsFocus(false);
          if (onBlur) {
            onBlur(e);
          }
        }}
        className="w-full h-[48px] rounded-[8px] outline-0 border-[2px] border-[#AAAAAA] focus:border-[#2996E8] px-[12px] font-[500] text-[#2E353A]"
      />
    </div>
  );
};

export default Input;
