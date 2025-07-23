import { getFileUrl, uploadImage } from "@/services/dashboard/file"
import { GalleryAdd } from "iconsax-reactjs"
import { useEffect, useState } from "react"

const DocumentImageInput = ({documentImage , setDocumentImage, setDocumentImageUrl , disabled})=>{

    const [loading , setLoading] = useState(false)

    const upload = async ()=>{
        setLoading(true)
        const url = await uploadImage({file : documentImage})
        setDocumentImageUrl(url)
        setLoading(false)
    }

    useEffect(()=>{
        if(documentImage && typeof documentImage !== "string"){
            upload()
        }
    },[documentImage])

    return(
        <label className="w-full h-[208px] rounded-[8px] overflow-hidden relative cursor-pointer">
            {documentImage ? 
                <img src={typeof documentImage === 'string' ? getFileUrl(documentImage) :URL.createObjectURL(documentImage)} className="w-full h-full rounded-[8px]"/> :
                <div className="w-full h-full rounded-[8px] border-[2px] border-[#AAAAAA] border-dashed flex items-center justify-center gap-[8px] bg-white">
                    <GalleryAdd size={24} color="#6B7BFF"/>
                    <span className="text-[#6B7BFF] font-[700]">
                    Add 
                    </span>
                </div>
            }
            <input type="file" disabled={disabled || loading} onChange={(e)=> setDocumentImage(e.target.files[0])} className="absolute top-0 left-0 z-1 w-full h-full opacity-0"/>
        </label>
    )
}

export default DocumentImageInput