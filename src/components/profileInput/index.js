import { getFileUrl, uploadImage } from "@/services/dashboard/file"
import { GalleryAdd } from "iconsax-reactjs"
import { useEffect, useState } from "react"

const ProfileInput = ({profile , setProfile, setProfileImageUrl , disabled})=>{

    const [loading , setLoading] = useState(false)

    const upload = async ()=>{
        const url = await uploadImage({file : profile})
        setProfileImageUrl(url)
    }

    useEffect(()=>{
        if(profile && typeof profile !== "string"){
            upload()
        }
    },[profile])

    return(
        <label className="w-full h-full rounded-full overflow-hidden relative">
            {profile ? 
                <img src={typeof profile === 'string' ? getFileUrl(profile) :URL.createObjectURL(profile)} className="w-full h-full rounded-full"/> :
                <div className="w-full h-full rounded-full border-[2px] border-[#6B7BFF] border-dashed flex items-center justify-center">
                    <GalleryAdd size={32} color="#6B7BFF"/>
                </div>
            }
            <input type="file" disabled={disabled || loading} onChange={(e)=> setProfile(e.target.files[0])} className="absolute top-0 left-0 z-1 w-full h-full opacity-0"/>
        </label>
    )
}

export default ProfileInput