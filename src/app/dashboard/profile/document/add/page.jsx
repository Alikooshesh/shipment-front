'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import DocumentImageInput from "@/components/pages/dashboard/profile/documents/add/documentImageInput";
import { createDocument } from "@/services/dashboard/documents";
import { Receipt1, TickSquare } from "iconsax-reactjs";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const AddDocumentPage = () => {

    const [signatureData , setSignatureData] = useState({
        name : "",
        image : "",
        docType : "signature"
    })

    const [stampData , setStampData] = useState({
        name : "",
        image : "",
        docType : "stamp"
    })

    const submit = async()=>{
        if(signatureData.name && signatureData.image){
            await createDocument({body : signatureData})
        }

        if(stampData.name && stampData.image){
            await createDocument({body : stampData})
        }

        redirect("/dashboard/profile")
    }

  return (
    <>
      <h2 className="w-full text-center mx-auto font-[600] text-[24px] text-[#2E353A] mt-[20px] mb-[42px]">
      ADD Document
      </h2>
      
      <div className="w-full max-w-[800px] mx-auto px-[16px] flex flex-col md:flex-row justify-center md:justify-between gap-[32px] items-center">
        <Card type="signature" setDocumentData={setSignatureData}/>
        <div className="md:hidden w-full h-[2px] bg-[#2E353A]"/>
        <Card type="stamp" setDocumentData={(setStampData)}/>
      </div>

      <div className="w-full mt-[48px] px-[16px] flex items-center justify-center">
        <Button className="w-full max-w-[362px]" icon={<TickSquare/>} leftIcon onClick={submit} disabled={!((signatureData.image && signatureData.name) || (stampData.image && stampData.name))}>
        Confirm
        </Button>
      </div>
    </>
  );
};

export default AddDocumentPage;


const Card = ({type , setDocumentData})=>{

    const [documentImage , setDocumentImage] = useState(null)
    const [documentImageUrl , setDocumentImageUrl] = useState("")

    const [name , setName] = useState("")

    useEffect(()=>{
        setDocumentData({
            name,
            image : documentImageUrl,
            docType : type
        })
    },[name , documentImageUrl])

    return(
        <div className="w-full flex flex-col gap-[24px]">
            <DocumentImageInput documentImage={documentImage} setDocumentImage={setDocumentImage} setDocumentImageUrl={setDocumentImageUrl}/>
            <Input label={type.charAt(0).toUpperCase() + type.slice(1)} icon={<Receipt1 size={24}/>} value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
    )
}