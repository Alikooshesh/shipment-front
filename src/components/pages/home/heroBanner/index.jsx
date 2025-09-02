'use client'

import { Typewriter } from 'react-simple-typewriter'

const HeroBanner = () => {
  return (
    <div className="w-full h-fit relative bg-black">
      {/* <img className="w-full h-auto" src="/images/dashboard/navbar/logo.png" /> */}
      <div className='w-full h-[600px] bg-black'/>
      <div className="flex flex-col font-bespoke font-[700] text-[24px] text-white absolute top-[26px] left-[16px] md:top-[32px] md:left-[10%]">
        <p className="flex items-center gap-[8px]">
          Your{" "}
          <span className="text-[#2996E8]">
            <Typewriter
              words={["Shipment", "Goods", "Freight", "Consignment!" , "Package", "Delivery", "Cargo", "Load", "Parcel!" , "Products" ]}
              loop={0}
              typeSpeed={110}
              deleteSpeed={100}
              delaySpeed={3500}
            />
          </span>
        </p>
        <p>Our Priority</p>
      </div>
    </div>
  );
};

export default HeroBanner;
