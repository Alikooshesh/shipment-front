'use client'

import { useState } from "react";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(2);

  const images = [
    {
      url: "https://picsum.photos/id/1015/600/400",
      label: {
        top: {
          normal: "Bridging Air &",
          bold: "Ocean",
        },
        sub: "Air and sea, seamlessly connected",
      },
    },
    {
      url: "https://picsum.photos/id/1016/600/400",
      label: {
        top: {
          normal: "Bridging Air &",
          bold: "Ocean",
        },
        sub: "Air and sea, seamlessly connected",
      },
    },
    {
      url: "https://picsum.photos/id/1018/600/400",
      label: {
        top: {
          normal: "Bridging Air &",
          bold: "Ocean",
        },
        sub: "Air and sea, seamlessly connected",
      },
    },
  ];

  return (
    <div className="flex gap-[8px] lg:gap-[24px] w-full h-[108px] lg:h-[288px] overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative h-full transition-all duration-1000 ease-in-out cursor-pointer ${
            activeIndex === i ? "w-full" : "w-[15vw] md:w-[10vw]"
          }`}
          onMouseEnter={() => setActiveIndex(i)}
          onClick={() => setActiveIndex(i)}
        >
          <img
            src={img.url}
            alt={`Gallery ${i}`}
            className="w-full h-full object-cover rounded-[4px]"
          />

          <div className={`w-full h-[60px] lg:h-full rounded-[4px] absolute z-10 bottom-0 left-0 bg-[linear-gradient(360deg,rgba(0,0,0,0.7)_77.71%,rgba(38,38,38,0)_94.79%)] lg:bg-black transition-opacity duration-500 ${
            activeIndex === i 
              ? "opacity-100 lg:opacity-70"
              : "opacity-0"
          }`}/>

          <div className={`absolute text-white font-bold transition-all duration-1000 ease-in-out z-20 ${activeIndex === i ? "left-[8px] lg:left-[16px] bottom-[8px] lg:bottom-[24px]" : "left-[12px] lg:left-[24px] bottom-[-24px] lg:bottom-[-42px]"}`}>
            <div
              className={`text-lg lg:text-2xl origin-left transition-transform duration-700 ease-in-out whitespace-nowrap ${activeIndex === i ? "text-[12px] lg:text-[32px]" : "text-[8px] lg:text-[20px] -rotate-90"}`}
            >
              <span >{img.label.top.normal} </span>
              <span className="text-[#2996E8]">{img.label.top.bold}</span>
            </div>

            <div
              className={`mt-2 text-[10px] lg:text-[24px] transition-all duration-700 ease-in-out whitespace-nowrap ${
                activeIndex === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {img.label.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
