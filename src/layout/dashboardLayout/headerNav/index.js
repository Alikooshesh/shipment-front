'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const HeaderNav = ({icon , name , url})=>{
    const path = usePathname()

    const isActive = path === url

    return(
        <Link href={url} className="relative flex gap-[12px] text-[#2996E8]">
            <span>{icon}</span>
            <p>{name}</p>
            {isActive && <div className="w-[70px] h-[4px] bg-[#2996E8] rounded-full absolute bottom-[-30px] left-[50%] translate-[-50%]"/>}
        </Link>
    )
}

export default HeaderNav