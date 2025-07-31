"use client";

import Button from "@/components/button";
import FavSelect from "@/components/favSelect";
import FavTextarea from "@/components/favTextarea";
import Input from "@/components/input";
import DocumentImageInput from "@/components/pages/dashboard/bl/add/documentImageInput";
import Select from "@/components/select";
import { productCategoryList, productUnitByCategortList, vesselTypeList } from "@/data/staticLists";
import { createNewBl } from "@/services/dashboard/bl";
import { getActiveDocuments } from "@/services/dashboard/documents";
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
import { redirect } from "next/navigation";
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
    useState(true);

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

  const [useDefaultDocuments, setUseDefaultDocuments] = useState(true);

  const [defaultDocuments , setDefaultDocuments] = useState({
    stamp : "",
    signature : ""
  })

  const [signatureImage, setSignatureImage] = useState(null);
  const [signatureUrl, setSignatureUrl] = useState(null);

  const [stampImage, setStampImage] = useState(null);
  const [stampUrl, setStampUrl] = useState(null);

  const isDataValid = (data) => {
    // Check primitive fields in main data object
    for (const key in data) {
      if (key !== "products" && key !== "trackingLink") {
        if (data[key]?.trim() === "") {
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

  const handleInputChange = (e) => {
    const temp = { ...data };
    temp[e.target.name] = e.target.value;

    setData(temp);
  };

  const handleSelectChange = (name , value) => {
    const temp = { ...data };
    temp[name] = value;

    setData(temp);
  }

  const handleProductInputChange = (index,e) => {
    const temp = { ...data };
    temp.products[index][e.target.name] = e.target.value;

    setData(temp);
  };

  const handleProductSelectChange = (index,name , value) => {
    const temp = { ...data };
    temp.products[index][name] = value;

    setData(temp);
  }

  useEffect(()=>{
    if(useDefaultDocuments){
      setData({...data , stamp : defaultDocuments.stamp , signature : defaultDocuments.signature})
    }else{
      setData({...data , stamp : stampUrl , signature : signatureUrl})
    }
  },[stampUrl , signatureUrl , defaultDocuments , useDefaultDocuments])

  useEffect(()=>{
    if(registerAndShipmentDateAreSame && data.shipmentDate !== data.registerDate){
      setData({...data,shipmentDate : data.registerDate})
    }
  },[data,registerAndShipmentDateAreSame])

  useEffect(()=>{
    const fetchDefaultDocuments = async ()=>{
      const data = await getActiveDocuments()
      const stamp = data.find(item => item.docType === "stamp")?.image ?? null
      const signature = data.find(item => item.docType === 'signature')?.image ?? null
      setDefaultDocuments({
        stamp,
        signature
      })
    }

    fetchDefaultDocuments()
  },[])


  const submit = async ()=>{
    await createNewBl({body : data})
    redirect("/dashboard")
  }

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
              name="registerDate"
              value={data.registerDate}
              onChange={handleInputChange}
            />
            <button
              className={`flex items-center gap-[10px] text-[#7C7C7C]`}
              onClick={() =>
                setRegisterAndShipmentDateAreSame(
                  !registerAndShipmentDateAreSame
                )
              }
            >
              <div className="size-[16px] border-2 border-[#7C7C7C] flex items-center justify-center rounded-[2px]">
                <svg width="12" height="12" className={registerAndShipmentDateAreSame ? "" : "opacity-0"} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.4458 6.63435L4.5829 8.77135L9.35424 4" stroke="#7C7C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
              <p className="text-[12px] font-[700]">
                Use the shipment date as the registration date
              </p>
            </button>
          </div>

          <div className="w-full mt-[24px] flex flex-col gap-[12px]">
            <div className="w-full flex items-center gap-[4px] mb-[16px] text-[#AAAAAA]">
              <Ship size={24} />
              <p className="font-[600] text-[16px]">Vessel Information :</p>
            </div>
            <Input
              placeholder="Vessel Name . . ."
              name="vesselName"
              value={data.vesselName}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Vessel Number . . ."
              name="vesselNumber"
              value={data.vesselNumber}
              onChange={handleInputChange}
            />
            <Select
              placeholder="Vessel Type . . ."
              name="vesselType"
              options={vesselTypeList}
              value={{label : data.vesselType , value : data.vesselType}}
              onChange={(e) => handleSelectChange("vesselType" , e.value)}
            />
            <Input
              placeholder="Tracking Link ( Optional )"
              name="trackingLink"
              value={data.trackingLink}
              onChange={handleInputChange}
            />
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
              name="shipmentDate"
              value={data.shipmentDate}
              onChange={handleInputChange}
            />
            <FavSelect
              favType={"origin"}
              placeholder="Origin . . ."
              name="origin"
              value={{label : data.origin , value : data.origin}}
              onChange={(e) => handleSelectChange("origin" , e.value)}
            />
            <FavSelect
              favType={"shipper"}
              placeholder="Shipper . . ."
              name="shipper"
              value={{label : data.shipper , value : data.shipper}}
              onChange={(e) => handleSelectChange("shipper" , e.value)}
            />
            <FavTextarea
                    favType={"shipperAddress"}
                    placeholder="Shipper’s Address . . ."
                    name="shipperAddress"
                    value={data.shipperAddress}
                    onChange={(val)=>handleSelectChange("shipperAddress" , val)}
                  />
          </div>

          <div className="w-full mt-[24px] flex flex-col gap-[12px]">
            <div className="w-full flex items-center gap-[4px] mb-[16px] text-[#AAAAAA]">
              <ArrowCircleDown2 size={24} />
              <p className="font-[600] text-[16px]">
                Destination & Arrival Details :
              </p>
            </div>
            <Input
              type="date"
              placeholder="Receiving Date"
              name="receiveDate"
              value={data.receiveDate}
              onChange={handleInputChange}
            />
            <FavSelect
              favType={"destination"}
              placeholder="Destination . . ."
              name="vesselName"
              value={{label : data.destination , value : data.destination}}
              onChange={(e) => handleSelectChange("destination" , e.value)}
            />
            <FavSelect
              favType={"consignee"}
              placeholder="Consignee . . ."
              name="consignee"
              value={{label : data.consignee , value : data.consignee}}
              onChange={(e) => handleSelectChange("consignee" , e.value)}
            />
                  <FavTextarea
                    favType={"consigneeAddress"}
                    placeholder="Consignee’s Address . . ."
                    name="consigneeAddress"
                    value={data.consigneeAddress}
                    onChange={(val)=>handleSelectChange("consigneeAddress" , val)}
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
                <div
                  key={`product-${index}`}
                  className="flex flex-col gap-[12px]"
                >
                  {index > 0 && (
                    <p className="mb-[16px] font-[600] text-[#2996E8]">
                      Product #{index + 1}
                    </p>
                  )}
                  <Select
                    placeholder="Category . . ."
                    name="Category"
                    options={productCategoryList}
                    value={{label : item.category , value : item.category}}
                    onChange={(e) => handleProductSelectChange(index,"category" , e.value)}
                  />
                  <div className="w-full flex gap-[16px]">
                    <Input
                      placeholder="Name Of Product . . . "
                      name="productName"
                      value={item.name}
                      onChange={(e) => handleProductInputChange(index , e)}
                    />
                    <Input
                      placeholder="Product Quantity . . .  "
                      name="productQuantity"
                      value={item.productQuantity}
                      onChange={(e) => handleProductInputChange(index , e)}
                    />
                  </div>
                  <div className="w-full flex gap-[16px]">
                    <Input
                      placeholder="Weight . . ."
                      name="weight"
                      value={item.weight}
                      onChange={(e) => handleProductInputChange(index , e)}
                    />
                    <Select
                      placeholder=" Unit . . ."
                      name="unit"
                      disabled={!item.category}
                      options={item.category ? productUnitByCategortList[item.category] : []}
                      value={{label : item.unit , value : item.unit}}
                      onChange={(e) => handleProductSelectChange(index,"unit" , e.value)}
                    />
                  </div>
                  <FavTextarea
                    favType={"productDescription"}
                    placeholder="Product Description . . ."
                    name="description"
                    value={item.description}
                    onChange={(e) => handleProductSelectChange(index, "description", e)}
                  />
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
              <button
                className={`flex items-center gap-[10px] text-[#7C7C7C]`}
                onClick={() => setUseDefaultDocuments(!useDefaultDocuments)}
              >
                <p className="text-[12px] font-[700]">Use Default document</p>
                
                <div className="size-[16px] border-2 border-[#7C7C7C] flex items-center justify-center rounded-[2px]">
                <svg width="12" height="12" className={useDefaultDocuments ? "" : "opacity-0"} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.4458 6.63435L4.5829 8.77135L9.35424 4" stroke="#7C7C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
              </button>
            </div>
            <div className="flex items-center gap-[12px]">
              <DocumentImageInput
                type="Stamp"
                documentImage={stampImage}
                setDocumentImage={setStampImage}
                setDocumentImageUrl={setStampUrl}
                disabled={useDefaultDocuments}
              />
              <DocumentImageInput
                type="Signature"
                documentImage={signatureImage}
                setDocumentImage={setSignatureImage}
                setDocumentImageUrl={setSignatureUrl}
                disabled={useDefaultDocuments}
              />
            </div>
          </div>
          <Button
            leftIcon
            icon={<TickSquare size={24} />}
            disabled={!isFormValid}
            onClick={submit}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddBlPage;
