const Services = () => {
  return (
    <section id="services" className="w-full mt-[48px] lg:mt-[64px]">
      <p className="w-full text-center font-[700] text-[#2E353A] text-[24px] lg:text-[32px]">
        Services
      </p>

      <div className="w-full mt-[26px] lg:mt-[62px] flex flex-col gap-[32px] lg:gap-[64px]">
        <div
          className="w-full px-[16px] lg:px-[42px] h-fit flex items-stretch gap-[8px] lg:gap-[24px]"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <img
            className="w-1/3 md:w-1/2 object-cover rounded-[4px] hidden lg:block"
            src="/images/home/services/desktop/1.png"
          />
          <img
            className="w-1/3 md:w-1/2 object-cover rounded-[4px] lg:hidden"
            src="/images/home/services/mobile/1.png"
          />
          <div className="w-2/3 md:w-1/2 h-full flex flex-col gap-[8px] lg:gap-[16px]">
            <h3 className="text-black font-[600] text-[16px] lg:text-[24px]">
              Ocean Freight
            </h3>
            <p className="font-[400] text-[#2E353A] text-[12px] lg:text-[20px]">
              <b className="font-[600]">KHAREEF MARITIME</b> specializes in
              seamless and secure ocean freight services across the globe. With
              in-depth knowledge of maritime logistics, we ensure every shipment
              sails smoothly, efficiently, and on time. Our ocean freight
              solutions are designed for reliability, transparency, and speed
              empowered by advanced tracking and a customer-first approach.
              Trust us to move your cargo across the seas with precision and
              care.
            </p>
          </div>
        </div>

        <div
          className="w-full px-[16px] lg:px-[42px] h-fit flex items-stretch gap-[8px] lg:gap-[24px]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img
            className="w-1/3 md:w-1/2 object-cover rounded-[4px] hidden lg:block order-1"
            src="/images/home/services/desktop/2.png"
          />
          <img
            className="w-1/3 md:w-1/2 object-cover rounded-[4px] lg:hidden order-1"
            src="/images/home/services/mobile/2.png"
          />
          <div className="w-2/3 md:w-1/2 h-full flex flex-col gap-[8px] lg:gap-[16px]">
            <h3 className="text-black font-[600] text-[16px] lg:text-[24px]">
              Ocean Freight
            </h3>
            <p className="font-[400] text-[#2E353A] text-[12px] lg:text-[20px]">
              <b className="font-[600]">KHAREEF MARITIME</b> delivers fast and reliable air freight solutions for time sensitive cargo worldwide. Leveraging global air networks and expert logistics, we ensure speed, safety, and precision in every shipment. Our tailored air freight services offer real-time tracking, efficient routing, and dedicated customer support. Fly your cargo with confidence—swiftly, securely, and seamlessly.
            </p>
          </div>
        </div>

        <div
          className="w-full px-[16px] lg:px-[42px] h-fit flex items-stretch gap-[8px] lg:gap-[24px]"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <img
            className="w-1/3 md:w-1/2 object-cover rounded-[4px] hidden lg:block"
            src="/images/home/services/desktop/3.png"
          />
          <img
            className="w-1/3 md:w-1/2 object-cover rounded-[4px] lg:hidden"
            src="/images/home/services/mobile/3.png"
          />
          <div className="w-2/3 md:w-1/2 h-full flex flex-col gap-[8px] lg:gap-[16px]">
            <h3 className="text-black font-[600] text-[16px] lg:text-[24px]">
              Ocean Freight
            </h3>
            <p className="font-[400] text-[#2E353A] text-[12px] lg:text-[20px]">
              <b className="font-[600]">KHAREEF MARITIME</b> connects businesses worldwide through its extensive global network. From major ports to key airports, our reach ensures seamless shipping across continents. With trusted partners and advanced logistics, we guarantee reliable connections, timely deliveries, and optimized trade routes. Experience the power of a global network—expanding opportunities, bridging distances, and keeping your business moving forward.
            </p>
          </div>
        </div>

        <div
          className="w-full px-[16px] lg:px-[42px] h-fit flex items-stretch gap-[8px] lg:gap-[24px]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img
            className="w-1/3 md:w-1/2 object-cover rounded-[4px] hidden lg:block order-1"
            src="/images/home/services/desktop/4.png"
          />
          <img
            className="w-1/3 md:w-1/2 object-cover rounded-[4px] lg:hidden order-1"
            src="/images/home/services/mobile/4.png"
          />
          <div className="w-2/3 md:w-1/2 h-full flex flex-col gap-[8px] lg:gap-[16px]">
            <h3 className="text-black font-[600] text-[16px] lg:text-[24px]">
              Ocean Freight
            </h3>
            <p className="font-[400] text-[#2E353A] text-[12px] lg:text-[20px]">
              <b className="font-[600]">KHAREEF MARITIME</b> provides fast and efficient express shipping services for urgent deliveries worldwide. By utilizing advanced logistics and strategic networks, we ensure quick, safe, and precise transport of time-sensitive goods. Our express services offer real-time tracking, optimized routing, and 24/7 customer support. Trust us to deliver your cargo swiftly, securely, and without delay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
