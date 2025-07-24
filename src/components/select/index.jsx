"use client";

import { ArrowCircleDown } from "iconsax-reactjs";
import { useState } from "react";
import ReactSelect from "react-select";
import { components } from "react-select";

const reformatOptions = (o)=>{
    return o.map(item => {

        if(typeof item === "string"){
            return {label : item , value : item}
        }

        if(item.value && item.label){
            return item
        }
    })
}

const Select = ({ icon, label, hasError, onFocus, onBlur, showIcon = true,options, ...props }) => {
  const [isFocus, setIsFocus] = useState(false);

  const labelColor = !isFocus
    ? hasError
      ? "#FF0000"
      : "#AAAAAA"
    : "#2996E8";

  const borderColor = !isFocus
    ? hasError
      ? "#FF0000"
      : "#AAAAAA"
    : "#2996E8";

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: 48,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: borderColor,
      boxShadow: "none",
      paddingLeft: 2,
      backgroundColor: state.isDisabled ? "#F5F6FA" : "white",
      "&:hover": {
        borderColor: borderColor,
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#AAAAAA",
      fontWeight: 500,
      fontSize : "12px"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#2E353A",
      fontWeight: 500,
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: labelColor,
      "&:hover": {
        color: labelColor,
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 8,
      zIndex: 100,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#E8F4FD" : "white",
      color: "#2E353A",
      fontWeight: 500,
      cursor: "pointer",
    }),
  };

  return (
    <div className="w-full flex flex-col gap-[13px]">
      {(icon || label) && (
        <div className="flex items-center gap-[4px]">
          {icon && <span className={`text-[16px]`} style={{ color: labelColor }}>{icon}</span>}
          {label && (
            <label
              className={`font-[500] text-[16px]`}
              style={{ color: labelColor }}
            >
              {label}
            </label>
          )}
        </div>
      )}
      <ReactSelect
        {...props}
        isDisabled={props.disabled}
        options={reformatOptions(options)}
        value={props.value?.value || props.value?.label ? props.value : null}
        components={{
            DropdownIndicator: (props) => {
                if(!showIcon) return;
                return (
                    <components.DropdownIndicator {...props}>
                      <ArrowCircleDown size={24} color={labelColor} />
                    </components.DropdownIndicator>
                  )
            },
          }}
        styles={customStyles}
        onFocus={(e) => {
          setIsFocus(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocus(false);
          if (onBlur) onBlur(e);
        }}
      />
    </div>
  );
};

export default Select;
