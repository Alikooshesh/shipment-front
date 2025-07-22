'use client'

import Button from "@/components/button"
import Input from "@/components/input"
import ProfileInput from "@/components/profileInput"
import { PasswordCheck, TickSquare, UserOctagon } from "iconsax-reactjs"
import { useState } from "react"

const ProfileData = ()=>{

    const [profile , setProfile] = useState(null)

    const [isEditMode , setIsEditMode] = useState(false)

    return(
        <>
            <div className="w-full flex flex-col gap-[36px] py-[48px] sm:py-[36px]">
                <div className="w-[128px] h-[128px] mx-auto">
                <ProfileInput profile={profile} setProfile={setProfile}/>
                </div>

                <div className="w-full max-w-[378px] mx-auto px-[16px] flex flex-col gap-[24px] mt-[36px]">
                    <Input label={"User Name :"} icon={<UserOctagon size={24}/>} disabled={!isEditMode}/>
                    <Input label={"User Name :"} icon={<UserOctagon size={24}/>} disabled={!isEditMode}/>
                    <Input label={"Password :"} icon={<PasswordCheck size={24}/>} type="password" disabled={!isEditMode}/>

                    <Button leftIcon className="mt-[160px]" icon={<TickSquare size={24}/>} onClick={()=>{
                        if(!isEditMode){
                            setIsEditMode(true)
                        }else{
                            setIsEditMode(false)
                        }
                    }}>
                        {!isEditMode ? "Edit Information" : "Confirm"}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProfileData