"use client";

import { useState } from "react";

const Textarea = ({ icon, label , hasError , onFocus , onBlur , ...props }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="w-full flex flex-col gap-[13px]">
      {(icon || label) && (
        <div className="flex items-center gap-[4px]">
          {icon && (
            <span className={!isFocus ? !hasError ? "text-[#AAAAAA]" : "text-[#FF0000]" : "text-[#2996E8]"}>
              {icon}
            </span>
          )}
          {label && (
            <label
              className={`font-[500] text-[16px] ${
                !isFocus ? !hasError ? "text-[#AAAAAA]" : "text-[#FF0000]" : "text-[#2996E8]"
              }`}
            >
              {label}
            </label>
          )}
        </div>
      )}
      <textarea
        rows={4}
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
        className={`w-full pt-[16px] rounded-[8px] outline-0 border-[2px] border-[#AAAAAA] focus:border-[#2996E8] bg-white disabled:bg-[#F5F6FA] px-[12px] font-[500] text-[#2E353A] resize-none placeholder:font-[500] placeholder:text-[12px] placeholder:text-[#AAAAAA] ${hasError && !isFocus ? '!border-[#FF0000]' : ''}`}
      />
    </div>
  );
};

export default Textarea;
