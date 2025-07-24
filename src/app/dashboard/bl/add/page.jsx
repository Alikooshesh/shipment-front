"use client";

import Button from "@/components/button";
import FavSelect from "@/components/favSelect";
import Input from "@/components/input";
import DocumentImageInput from "@/components/pages/dashboard/bl/add/documentImageInput";
import Select from "@/components/select";
import {
  AddCircle,
  ArrowCircleDown2,
  ArrowCircleUp2,
  Box,
  CalendarTick,
  Gallery,
  Ship,
  TickSquare,
} from "iconsax-reactjs";
import { useEffect, useMemo, useState } from "react";

const AddBlPage = () => {
  const [data, setData] = useState({
    registerDate: "",
    vesselName: "",
    vesselNumber: "",
    vesselType: "",
    trackingLink: "",
    shipmentDate: "",
    origin: "",
    shipper: "",
    shipperAddress: "",
    receiveDate: "",
    destination: "",
    consignee: "",
    consigneeAddress: "",
    stamp: "",
    signature: "",
    products: [
      {
        category: "",
        productName: "",
        productQuantity: "",
        weight: "",
        unit: "",
        description: "",
      },
    ],
  });

  const [registerAndShipmentDateAreSame, setRegisterAndShipmentDateAreSame] =
    useState(false);

  const addNewProduct = () => {
    const temp = { ...data };
    setData({
      ...temp,
      products: [
        ...temp.products,
        {
          category: "",
          productName: "",
          productQuantity: "",
          weight: "",
          unit: "",
          description: "",
        },
      ],
    });
  };

  const [useDefaultDocuments, setUseDefaultDocuments] = useState(false);

  const [signatureImage , setSignatureImage] = useState(null)
  const [signatureUrl , setSignatureUrl] = useState(null)

  const [stampImage , setStampImage] = useState(null)
  const [stampUrl , setStampUrl] = useState(null)


  const isDataValid = (data) => {
    // Check primitive fields in main data object
    for (const key in data) {
      if (key !== "products" && key !== "trackingLink") {
        if (data[key].trim() === "") {
          return false;
        }
      }
    }
  
    // Check each product field
    for (const product of data.products) {
      for (const key in product) {
        if (product[key].trim() === "") {
          return false;
        }
      }
    }
  
    return true;
  };

  const isFormValid = useMemo(() => isDataValid(data), [data]);



  return (
    <>
      <h2 className="md:hidden w-full text-center mx-auto font-[600] text-[24px] text-[#2E353A] mt-[20px] mb-[42px]">
        ADD New BL
      </h2>
      <div className="w-full flex items-center justify-center pb-[48px]">
        <div className="w-full max-w-[362px] mx-[16px] flex flex-col gap-[24px] md:mt-[40px]">
          <div className="w-full flex flex-col gap-[18px]">
            <Input
              label={"Bl Registration Date :"}
              icon={<CalendarTick size={24} />}
              type="date"
            />
            <div
                className={`flex items-center gap-[10px] ${
                  registerAndShipmentDateAreSame ? "text-[#2996E8]" : "text-[#7C7C7C]"
                }`}
                onClick={() => setRegisterAndShipmentDateAreSame(!registerAndShipmentDateAreSame)}
              >
                <TickSquare size={12} />
                <p className="text-[12px] font-[700]">Use the shipment date as the registration date</p>
              </div>
          </div>

          <div className="w-full mt-[24px] flex flex-col gap-[12px]">
            <div className="w-full flex items-center gap-[4px] mb-[16px] text-[#AAAAAA]">
              <Ship size={24} />
              <p className="font-[600] text-[16px]">Vessel Information :</p>
            </div>
            <Input placeholder="Vessel Name . . ." />
            <Input placeholder="Vessel Number . . ." />
            <Select placeholder="Vessel Type . . ." />
            <Input placeholder="Tracking Link ( Optional )" />
          </div>
          <div className="w-full mt-[24px] flex flex-col gap-[12px]">
            <div className="w-full flex items-center gap-[4px] mb-[16px] text-[#AAAAAA]">
              <ArrowCircleUp2 size={24} />
              <p className="font-[600] text-[16px]">
                Origin & Departure Details :
              </p>
            </div>
            <Input
              type="date"
              placeholder="Shipping Date"
              disabled={registerAndShipmentDateAreSame}
            />
            <FavSelect 
              favType={"origin"} 
              setValue={(e)=> console.log(e)}
              placeholder="Origin . . ."
            />
            <FavSelect 
              favType={"shipper"} 
              setValue={(e)=> console.log(e)}
              placeholder="Shipper . . ."
            />
          </div>

          <div className="w-full mt-[24px] flex flex-col gap-[12px]">
            <div className="w-full flex items-center gap-[4px] mb-[16px] text-[#AAAAAA]">
              <ArrowCircleDown2 size={24} />
              <p className="font-[600] text-[16px]">
                Destination & Arrival Details :
              </p>
            </div>
            <Input type="date" placeholder="Receiving Date" />
            <FavSelect 
              favType={"destination"} 
              setValue={(e)=> console.log(e)}
              placeholder="Destination . . ."
            />
            <FavSelect 
              favType={"consignee"} 
              setValue={(e)=> console.log(e)}
              placeholder="Consignee . . ."
            />
          </div>

          <div className="w-full mt-[24px] flex flex-col">
            <div className="flex items-center justify-between">
              <div className="w-full flex items-center gap-[4px] mb-[16px] text-[#AAAAAA]">
                <Box size={24} />
                <p className="font-[600] text-[16px]">Product</p>
              </div>

              <button onClick={addNewProduct}>
                <AddCircle size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-[24px]">
              {data.products.map((item, index) => (
                <div key={`product-${index}`} className="flex flex-col gap-[12px]">
                  {index > 0 && (
                    <p className="mb-[16px] font-[600] text-[#2996E8]">
                      Product #{index + 1}
                    </p>
                  )}
                  <Select
                    placeholder="Category . . ."
                  />
                  <div className="w-full flex gap-[16px]">
                    <Input 
                      placeholder="Name Of Product . . . "
                    />
                    <Input 
                      placeholder="Product Quantity . . .  "
                    />
                  </div>
                  <div className="w-full flex gap-[16px]">
                    <Input 
                      placeholder="Weight . . ."
                    />
                    <Select 
                      placeholder=" Unit . . ."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mt-[24px] flex flex-col gap-[12px]">
            <div className="w-full flex items-center justify-between mb-[22px]">
              <div className="flex items-center gap-[4px] text-[#AAAAAA]">
                <Gallery size={24} />
                <p className="font-[600] text-[16px]">Upload Document</p>
              </div>
              <div
                className={`flex items-center gap-[10px] ${
                  useDefaultDocuments ? "text-[#2996E8]" : "text-[#7C7C7C]"
                }`}
                onClick={() => setUseDefaultDocuments(!useDefaultDocuments)}
              >
                <p className="text-[12px] font-[700]">Use Default document</p>
                <TickSquare size={12} />
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <DocumentImageInput type="Stamp" documentImage={stampImage} setDocumentImage={setStampImage} setDocumentImageUrl={setStampUrl} disabled={useDefaultDocuments}/>
              <DocumentImageInput type="Signature" documentImage={signatureImage} setDocumentImage={setSignatureImage} setDocumentImageUrl={setSignatureUrl} disabled={useDefaultDocuments}/>
            </div>
          </div>
          <Button leftIcon icon={<TickSquare size={24}/>} disabled={!isFormValid}>
        Confirm
        </Button>
        </div>
      </div>
      
    </>
  );
};

export default AddBlPage;
