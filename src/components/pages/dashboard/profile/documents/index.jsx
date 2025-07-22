import Button from "@/components/button"
import Textarea from "@/components/textArea"
import { ArchiveAdd, CloseCircle } from "iconsax-reactjs"

const documents = [
    {
        id : 1,
        name : "test",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9h4fU35Nb2lGTCcT-GS1pVkWd5gqV0yegw&s",
        isActive : true
    },
    {
        id : 2,
        name : "test2",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9h4fU35Nb2lGTCcT-GS1pVkWd5gqV0yegw&s",
        isActive : false
    }
]

const ProfileDocuments = ()=>{
    return(
        <div className="flex flex-col gap-[36px] px-[16px] w-full max-w-[378px] mx-auto my-[36px]">
            <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[700] text-[16px] text-[#2E353A]">
                Preview Stamp
                </p>

                {documents.map(item => <DocumentCard key={item.id} {...item}/>)}
            </div>

            <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[700] text-[16px] text-[#2E353A]">
                Preview Signature 
                </p>

                {documents.map(item => <DocumentCard key={item.id} {...item}/>)}
            </div>

            <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[700] text-[16px] text-[#2E353A]">
                System Notice ( Dashboard Message )
                </p>

                <Textarea />
            </div>

            <Button leftIcon color="green" className="mt-[48px]" icon={<ArchiveAdd size={24}/>}>
            Add Document
            </Button>
        </div>
    )
}

export default ProfileDocuments

const DocumentCard = ({id, type , image , name , isActive})=>{
    return(
        <div className={`w-full h-[64px] flex items-center justify-between py-[12px] pl-[12px] pr-[16px] border-[2px] rounded-[8px] cursor-pointer ${isActive ? "border-[#38B000]" : "border-[#AAAAAA]"}`}>
            <div className="h-full flex items-center gap-[8px]">
                <img src={image} className="h-full"/>
                <p className="font-[500] text-[16px] text-[#2E353A]">{name}</p>
            </div>
            <span>
                <CloseCircle size={20} color={isActive ? "#FF0000" : "#AAAAAA"}/>
            </span>
        </div>
    )
}