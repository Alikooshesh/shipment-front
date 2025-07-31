import Button from "@/components/button"
import Textarea from "@/components/textArea"
import { deleteDocument, getAllDocuments, updateDocument } from "@/services/dashboard/documents"
import { getFileUrl } from "@/services/dashboard/file"
import { ArchiveAdd, CloseCircle } from "iconsax-reactjs"
import Link from "next/link"
import { useEffect, useState } from "react"

const ProfileDocuments = ()=>{

    const [documents , setDocuments] = useState([])

    const [systemNotice , setSystemNotice] = useState("")

    const getDocuments = async ()=>{
        const documentList = await getAllDocuments()
        setDocuments(documentList)
    }

    useEffect(()=>{
        getDocuments()
    },[])

    const setActive = async (id,type)=>{
        if(!id) return;
        const temp = [...documents]
        const active = temp.find(item => (item.isActive && item.docType === type))?.id
        console.log({type , active})
        if(active){
            await updateDocument({id : active , body : {isActive : false}})
        }else{
            await updateDocument({id , body : {isActive : true}})
        }
        
        
        setDocuments([...temp.map(item => {
            if(item.id === active){
                return ({...item , isActive : false})
            }
            if(item.id === id){
                return ({...item , isActive : true})
            }

            return item
        })])
    }

    const removeDocument = async (id)=>{
        if(!id) return;
        await deleteDocument({id})
        setDocuments([...documents.filter(item => item.id !== id)])
    }

    return(
        <div className="flex flex-col gap-[36px] px-[16px] w-full max-w-[378px] mx-auto my-[36px]">
            <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[700] text-[16px] text-[#2E353A]">
                Preview Stamp
                </p>

                {documents.filter(item => item.docType === "stamp").map(item => <DocumentCard key={item.id} remove={()=> removeDocument(item.id)} setActive={()=> setActive(item.id , item.docType)} {...item}/>)}
            </div>

            <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[700] text-[16px] text-[#2E353A]">
                Preview Signature 
                </p>

                {documents.filter(item => item.docType === "signature").map(item => <DocumentCard key={item.id} remove={()=> removeDocument(item.id)} setActive={()=> setActive(item.id , item.docType)} {...item}/>)}
            </div>

            <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[700] text-[16px] text-[#2E353A]">
                System Notice ( Dashboard Message )
                </p>

                <Textarea value={systemNotice} onChange={(e)=> setSystemNotice(e.target.value)} maxLength={150}/>
            </div>

            <Link href="/dashboard/profile/document/add">
            <Button leftIcon color="green" className="mt-[48px]" icon={<ArchiveAdd size={24}/>}>
            Add Document
            </Button>
            </Link>
        </div>
    )
}

export default ProfileDocuments

const DocumentCard = ({image , name , isActive, setActive , remove})=>{

    return(
        <div className={`w-full h-[64px] flex items-center justify-between py-[12px] pl-[12px] pr-[16px] border-[2px] rounded-[8px] cursor-pointer ${isActive ? "border-[#38B000]" : "border-[#AAAAAA]"}`} onClick={setActive}>
            <div className="h-full flex items-center gap-[8px]">
                <img src={getFileUrl(image)} className="h-full"/>
                <p className="font-[500] text-[16px] text-[#2E353A]">{name}</p>
            </div>
            <span onClick={()=>{
                if(!isActive){
                    remove()
                }
            }}>
                <CloseCircle size={20} color={!isActive ? "#FF0000" : "#AAAAAA"}/>
            </span>
        </div>
    )
}