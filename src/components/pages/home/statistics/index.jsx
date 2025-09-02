const Statistics = ()=>{
    return(
        <div className="w-full px-[16px] mt-[48px]">
            <p className="w-full text-center font-[700] text-[#2E353A] text-[24px] lg:text-[32px]">
            At a Glance
            </p>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-[64px]">
                <div className="w-full flex flex-col gap-[12px] items-center justify-center">
                    <p className="text-[#2E353A] font-[800] text-[24px] lg:text-[36px]">
                    24/7
                    </p>
                    <p className="text-[#7C7C7C] text-[16px] lg:text-[20px]">
                    Customer Support
                    </p>
                </div>

                <div className="w-full flex flex-col gap-[12px] items-center justify-center">
                    <p className="text-[#2E353A] font-[800] text-[24px] lg:text-[36px]">
                    250+
                    </p>
                    <p className="text-[#7C7C7C] text-[16px] lg:text-[20px]">
                    Countries Served
                    </p>
                </div>

                <div className="w-full flex flex-col gap-[12px] items-center justify-center">
                    <p className="text-[#2E353A] font-[800] text-[24px] lg:text-[36px]">
                    99.8%
                    </p>
                    <p className="text-[#7C7C7C] text-[16px] lg:text-[20px]">
                    On-time Delivery
                    </p>
                </div>

                <div className="w-full flex flex-col gap-[12px] items-center justify-center">
                    <p className="text-[#2E353A] font-[800] text-[24px] lg:text-[36px]">
                    50K+
                    </p>
                    <p className="text-[#7C7C7C] text-[16px] lg:text-[20px]">
                    Shipments Delivered
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Statistics