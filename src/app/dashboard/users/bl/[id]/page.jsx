'use client'

import BlCard from "@/components/pages/dashboard/dashboard/blCard"
import { getAllBl } from "@/services/dashboard/bl"
import { getFileUrl } from "@/services/dashboard/file"
import { getUserData } from "@/services/dashboard/users"
import { useEffect, useState } from "react"

const UserBlPage = ({params})=>{

    const [userData , setUserData] = useState(null)
    const [blList , setBlList] = useState([])

    useEffect(()=>{
        const fetchUser = async()=>{
            const data = await getUserData({id : params.id})
            setUserData(data)
        }

        const getBlList = async () => {
            const list = await getAllBl();
            setBlList(list);
          };

          fetchUser()
          getBlList()
    },[])

    return(
        <>
        <div className="w-full mt-[24px] flex flex-col items-center justify-center">
            {userData?.profileImage && <img className="size-[64px] rounded-full" src={getFileUrl(userData.profileImage)}/>}
            <p className="mt-[24px] md:mt-[16px] font-[500] text-[16px] text-[#2E353A]">{userData?.fullName}</p>
            <p className="font-[500] text-[12px] mt-[8px]">
                {userData?.userName}
            </p>
        </div>
        <div className="w-full p-[16px] md:py-[32px] md:px-[64px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-[16px] md:gap-[34px]">
        {blList.map((item) => (
          <BlCard key={item.id} {...item} />
        ))}
      </div>
        </>
    )
}

export default UserBlPage