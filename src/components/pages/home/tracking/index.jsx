'use client'

import { SearchNormal1 } from "iconsax-reactjs"
import Link from "next/link"
import { useState } from "react"

const Tracking = ()=>{

    const [code , setCode] = useState("")

    return(
        <div className="w-full px-[16px] mt-[48px]">
            <p className="w-full text-center font-[700] text-[#2E353A] text-[24px] lg:text-[32px]">
            Shipment Tracking
            </p>

            <div className="w-full mt-[64px] md:mt-[48px] px-[16px] lg:px-[42px] flex flex-col md:flex-row gap-[24px]">
                <input
                    className="w-full h-[48px] md:h-[64px] px-[12px] md:px-[24px] rounded-[4px] border-[2px] border-[#AAAAAA] font-[700] md:text-[24px] text-[#7C7C7C] placeholder:text-[#AAAAAA] active:border-[#2E353A]"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Please enter your BL "
                />
                <Link href={`/tracking?code=${code}`} className="w-full md:max-w-[376px] cursor-pointer" disabled={!code}>
                <button className="cursor-pointer w-full h-[48px] md:h-[64px] rounded-[4px] bg-[#2E353A] disabled:bg-[#DCD8E0] flex items-center justify-center gap-[12px] text-[20px] md:text-[24px] text-white disabled:text-[#A4A0A7]" disabled={!code}>
                    <SearchNormal1 size={32}/>
                    <span>Find B/L</span>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Tracking