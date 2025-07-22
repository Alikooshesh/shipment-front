'use client'

import Button from "@/components/button"
import Input from "@/components/input"
import ProfileInput from "@/components/profileInput"
import { PasswordCheck, TickSquare, UserOctagon } from "iconsax-reactjs"
import { useState } from "react"

const EditUser = ()=>{

    const [profile , setProfile] = useState(null)

    return(
        <>
            <h2 className="font-[600] text-center text-[24px] text-[#2E353A] mt-[20px] sm:mt-[42px]">Edit User</h2>
            <div className="flex flex-col gap-[36px] py-[48px] sm:py-[36px]">
                <div className="w-[128px] h-[128px] mx-auto">
                <ProfileInput profile={profile} setProfile={setProfile}/>
                </div>

                <div className="w-full max-w-[378px] mx-auto px-[16px] flex flex-col gap-[24px] mt-[36px]">
                    <Input label={"User Name :"} icon={<UserOctagon size={24}/>}/>
                    <Input label={"User Name :"} icon={<UserOctagon size={24}/>}/>
                    <Input label={"Password :"} icon={<PasswordCheck size={24}/>} type="password"/>

                    <Button className="mt-[160px]" icon={<TickSquare size={24}/>}>
                    Edit Information
                    </Button>
                </div>
            </div>
        </>
    )
}

export default EditUser