'use client'

import Button from "@/components/button"
import Input from "@/components/input"
import ProfileInput from "@/components/profileInput"
import { createNewUser } from "@/services/dashboard/users"
import { PasswordCheck, TickSquare, UserOctagon } from "iconsax-reactjs"
import { useEffect, useState } from "react"

const AddUser = ()=>{

    const [profile , setProfile] = useState(null)
    const [profileImageUrl , setProfileImageUrl] = useState("")
    const [data , setData] = useState({
        userName : "",
        fullName : "",
        password : ""
    })

    const onSubmit = async (e)=>{
        e.preventDefault()
        await createNewUser({
            body : {
                ...data,
                profileImage : profileImageUrl
            }
        })
      }

    return(
        <>
            <h2 className="font-[600] text-center text-[24px] text-[#2E353A] mt-[20px] sm:mt-[42px]">Add New User</h2>
            <div className="flex flex-col gap-[36px] py-[48px] sm:py-[36px]">
                <div className="w-[128px] h-[128px] mx-auto">
                <ProfileInput profile={profile} setProfile={setProfile} setProfileImageUrl={setProfileImageUrl}/>
                </div>

                <form className="w-full max-w-[378px] mx-auto px-[16px] flex flex-col gap-[24px] mt-[36px]" onSubmit={onSubmit}>
                <Input label={"Full Name :"} icon={<UserOctagon size={24}/>} value={data.fullName} onChange={((e)=> setData({...data , fullName : e.target.value}))}/>
                    <Input label={"User Name :"} icon={<UserOctagon size={24}/>} value={data.userName} onChange={((e)=> setData({...data , userName : e.target.value}))}/>
                    <Input label={"Password :"} icon={<PasswordCheck size={24}/>} type="password" value={data.password} onChange={((e)=> setData({...data , password : e.target.value}))}/>

                    <Button className="mt-[160px]" icon={<TickSquare size={24}/>} disabled={!(data.password && data.userName)}>
                    Confirm
                    </Button>
                </form>
            </div>
        </>
    )
}

export default AddUser