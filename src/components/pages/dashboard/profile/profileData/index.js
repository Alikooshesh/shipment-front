'use client'

import Button from "@/components/button"
import Input from "@/components/input"
import ProfileInput from "@/components/profileInput"
import { getProfile, updateProfile } from "@/services/dashboard/profile"
import { PasswordCheck, TickSquare, UserOctagon } from "iconsax-reactjs"
import { useEffect, useState } from "react"

const ProfileData = ()=>{

    const [profileImage , setProfileImage] = useState(null)
    const [profileImageUrl , setProfileImageUrl] = useState("")
    const [data , setData] = useState({
        userName : "",
        fullName : "",
        password : ""
    })

    const [isEditMode , setIsEditMode] = useState(false)

    const getUser = async ()=>{
        const user = await getProfile()
        setProfileImageUrl(user.profileImage)
        setData({
            userName : user.userName,
            fullName : user.fullName,
            password : ""
        })
      }
    
      useEffect(()=>{
        getUser()
      },[])

      const onSubmit = async (e)=>{
        e.preventDefault()
        if(!isEditMode){
            setIsEditMode(true)
        }else{
            await updateProfile({body : {
                ...data,
                profileImage : profileImageUrl
            }})
            setIsEditMode(false)
        }
      }

    return(
        <>
            <div className="w-full flex flex-col gap-[36px] py-[48px] sm:py-[36px]">
                <div className="w-[128px] h-[128px] mx-auto">
                <ProfileInput profile={profileImage || profileImageUrl} setProfile={setProfileImage} setProfileImageUrl={setProfileImageUrl}/>
                </div>

                <form className="w-full max-w-[378px] mx-auto px-[16px] flex flex-col gap-[24px] mt-[36px]" onSubmit={onSubmit}>
                <Input label={"Full Name :"} icon={<UserOctagon size={24}/>} disabled={!isEditMode} value={data.fullName} onChange={((e)=> setData({...data , fullName : e.target.value}))}/>
                    <Input label={"User Name :"} icon={<UserOctagon size={24}/>} disabled={!isEditMode} value={data.userName} onChange={((e)=> setData({...data , userName : e.target.value}))}/>
                    <Input label={"Password :"} icon={<PasswordCheck size={24}/>} disabled={!isEditMode} type="password" value={data.password} onChange={((e)=> setData({...data , password : e.target.value}))}/>

                    <Button leftIcon className="mt-[160px]" icon={<TickSquare size={24}/>}>
                        {!isEditMode ? "Edit Information" : "Confirm"}
                    </Button>
                </form>
            </div>
        </>
    )
}

export default ProfileData