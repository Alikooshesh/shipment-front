"use client";

import { Calendar } from "iconsax-reactjs";
import { useState } from "react";

const Input = ({
  icon,
  label,
  hasError,
  onFocus,
  onBlur,
  showCalendarIcon = true,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="w-full flex flex-col gap-[13px]">
      {(icon || label) && (
        <div className="flex items-center gap-[4px]">
          {icon && (
            <span
              className={
                !isFocus
                  ? !hasError
                    ? "text-[#AAAAAA]"
                    : "text-[#FF0000]"
                  : "text-[#2996E8]"
              }
            >
              {icon}
            </span>
          )}
          {label && (
            <label
              className={`font-[500] text-[16px] ${
                !isFocus
                  ? !hasError
                    ? "text-[#AAAAAA]"
                    : "text-[#FF0000]"
                  : "text-[#2996E8]"
              }`}
            >
              {label}
            </label>
          )}
        </div>
      )}
      <div className="w-full relative">
        {showCalendarIcon && props.type === "date" && (
          <span
            className={`absolute right-[12px] top-[50%] translate-y-[-50%] ${
              !isFocus
                ? !hasError
                  ? "text-[#AAAAAA]"
                  : "text-[#FF0000]"
                : "text-[#2996E8]"
            }`}
          >
            <Calendar size={24} />
          </span>
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
          className={`w-full h-[48px] rounded-[8px] outline-0 border-[2px] border-[#AAAAAA] focus:border-[#2996E8] bg-white disabled:bg-[#F5F6FA] px-[12px] font-[500] text-[#2E353A] placeholder:text-[#AAAAAA] placeholder:text-[12px] placeholder:font-[500] ${
            hasError && !isFocus ? "!border-[#FF0000]" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Input;
