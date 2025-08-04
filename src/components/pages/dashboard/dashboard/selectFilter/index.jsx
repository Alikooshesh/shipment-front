import Input from "@/components/input";
import { ArrowDown2, DocumentFilter } from "iconsax-reactjs";
import { useEffect, useState } from "react";
import Select from "react-select";

const options = [
  { value: "vesselName", label: "Vessel Name" },
  { value: "shipper", label: "Company Name" },
  { value: "destination", label: "Destination" },
  { value: "origin", label: "Port of Origin" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "transparent",
    border: "2px solid #2996E8",
    borderRadius: "8px",
    boxShadow: "none",
    paddingLeft: "44px",
    paddingRight: "30px",
    height: "54px",
    minHeight: "54px",
    fontWeight: "600",
    fontSize: "16px",
    color: "#2996E8",
    "&:hover": {
      borderColor: "#2996E8",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#2996E8",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#2996E8",
    fontWeight: 600,
    fontSize: "16px"
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ display: "none" }), // we’ll use custom icon
};

export default function SelectFilter({ setFilter }) {
  const [filterKey, setFilterKey] = useState(null);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    if (filterKey?.value && filterValue) {
      const handler = setTimeout(() => {
        setFilter(`filterKey=${filterKey.value}&filterValue=${filterValue}`);
      }, 700);
      return () => clearTimeout(handler);
    }
  }, [filterKey, filterValue]);

  return (
    <div className="flex items-center gap-[8px]">
      <div className="relative min-w-[160px] max-w-[160px]">
        <DocumentFilter
          size={24}
          color="#2996E8"
          className="absolute top-1/2 left-[12px] translate-y-[-50%] pointer-events-none"
        />
        <ArrowDown2
          size={24}
          color="#2996E8"
          className="absolute top-1/2 right-[12px] translate-y-[-50%] bg-[#F5F6FA] pointer-events-none"
        />
        <Select
          options={options}
          value={filterKey}
          onChange={setFilterKey}
          styles={customStyles}
          isSearchable={false}
          placeholder="Filter by "
        />
      </div>
      {filterKey?.value && (
        <Input
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="w-[240px] h-[54px]"
          placeholder="Search in category . . ."
        />
      )}
    </div>
  );
}
