import Gallery from "./gallery"

const About = ()=>{
    return(
        <div id="about" className="w-full mt-[48px] lg:mt-[64px]">
            <p className="w-full text-center font-[700] text-[#2E353A] text-[24px] lg:text-[32px]">
            About Us
            </p>
            <div className="w-full px-[16px] lg:px-[42px] mt-[24px] lg:mt-[48px]">
                <Gallery/>
            </div>
            <div className="w-full mt-[12px] lg:mt-[36px] px-[16px] lg:px-[42px] text-center text-[12px] lg:text-[24px] lg:font-[500]">
            KHAREEF MARITIME is a trusted logistics partner offering comprehensive international shipping solutions. With expertise in both sea and air freight, we deliver cargo efficiently and reliably across the globe.
From port to sky, we handle every shipment with precision and care — whether it's bulk commodities, containerized goods, or time-sensitive air cargo. Our dedicated team ensures smooth operations, clear communication, and timely delivery at every step.
Driven by reliability, speed, and service excellence, KHAREEF MARITIME is committed to helping businesses navigate the complexities of global trade — confidently and seamlessly.
            </div>
        </div>
    )
}

export default About