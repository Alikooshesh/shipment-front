import { GalleryAdd } from "iconsax-reactjs"

const ProfileInput = ({profile , setProfile , disabled})=>{
    return(
        <label className="w-full h-full rounded-full overflow-hidden relative">
            {profile ? 
                <img src={URL.createObjectURL(profile)} className="w-full h-full rounded-full"/> :
                <div className="w-full h-full rounded-full border-[2px] border-[#6B7BFF] border-dashed flex items-center justify-center">
                    <GalleryAdd size={32} color="#6B7BFF"/>
                </div>
            }
            <input type="file" disabled={disabled} onChange={(e)=> setProfile(e.target.files[0])} className="absolute top-0 left-0 z-1 w-full h-full opacity-0"/>
        </label>
    )
}

export default ProfileInput