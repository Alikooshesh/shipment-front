"use client";

import React, { useState } from "react";
import WorldMap from "react-svg-worldmap";

const targetCountries = {
  CN: {
    name: "China",
    ports: ["Shanghai", "Shenzhen", "Guangzhou", "Tianjin"],
  },
  JP: { name: "Japan", ports: ["Tokyo", "Yokohama", "Osaka", "Kobe"] },
  DE: { name: "Germany", ports: ["Hamburg", "Bremerhaven"] },
  KR: { name: "South Korea", ports: ["Busan", "Incheon"] },
  NL: { name: "Netherlands", ports: ["Rotterdam", "Amsterdam"] },
  FR: { name: "France", ports: ["Marseille", "Le Havre"] },
  SE: { name: "Sweden", ports: ["Gothenburg", "Stockholm"] },
  KW: { name: "Kuwait", ports: ["Shuwaikh Port", "Shuaiba Port"] },
  ZA: { name: "South Africa", ports: ["Durban", "Cape Town"] },
  AE: { name: "UAE", ports: ["Jebel Ali (Dubai)", "Port Khalifa (Abu Dhabi)"] },
  SG: { name: "Singapore", ports: ["Port of Singapore"] },
  IT: { name: "Italy", ports: ["Genoa", "Naples"] },
  AU: { name: "Australia", ports: ["Sydney", "Melbourne", "Brisbane"] },
  QA: { name: "Qatar", ports: ["Hamad Port"] },
  TR: { name: "Turkey", ports: ["Istanbul", "Izmir", "Mersin"] },
  NZ: { name: "New Zealand", ports: ["Auckland", "Wellington", "Lyttelton"] },
};

// Convert to react-svg-worldmap format
const data = Object.keys(targetCountries).map((code) => ({
  country: code,
  value: 1,
}));

const PortsWorldMap = () => {
  const [activeCountry, setActiveCountry] = useState(null);

  const handleClick = ({ countryCode }) => {
    console.log({ countryCode });
    if (targetCountries[countryCode]) {
      setActiveCountry(countryCode);
    }
  };

  return (
    <section id="services" className="w-full mt-[48px] lg:mt-[64px]">
      <p className="w-full text-center font-[700] text-[#2E353A] text-[24px] lg:text-[32px]">
      Our Collaborators
      </p>
      <div className="w-full flex flex-col items-center px-[16px] lg:px-[42px]">
        <WorldMap
          color="#2996E8"
          data={data}
          onClickFunction={handleClick}
          tooltipTextFunction={({countryName}) => countryName}
          tooltipBgColor="black"
          tooltipTextColor="white"
          backgroundColor="#F5F6FA"
          
        />

        {/* Ports list */}
        {activeCountry && (
          <div className="mt-4 w-full max-w-md bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              {targetCountries[activeCountry].name} - Major Sea Ports
            </h2>
            <ul className="list-disc pl-5">
              {targetCountries[activeCountry].ports.map((port) => (
                <li key={port}>{port}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortsWorldMap;
