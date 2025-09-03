import { Messages } from "iconsax-reactjs";

const Contact = () => {
  return (
    <section id="contact" className="w-full mt-[48px] lg:mt-[64px]">
      <p className="w-full text-center font-[700] text-[#2E353A] text-[24px] lg:text-[32px]">
        Contact us
      </p>

      <div className="w-full mt-[22px] md:mt-[64px] mb-[60px] md:mb-[120px] px-[16px] flex flex-col md:flex-row md:justify-evenly gap-[24px]">
        <div className="flex items-center gap-[8px] lg:gap-[12px]">
          <svg
            className="size-[32px] md:size-[48px]"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 24C4 16.4575 4 12.6863 6.34315 10.3431C8.68629 8 12.4575 8 20 8H28C35.5425 8 39.3137 8 41.6569 10.3431C44 12.6863 44 16.4575 44 24C44 31.5425 44 35.3137 41.6569 37.6569C39.3137 40 35.5425 40 28 40H20C12.4575 40 8.68629 40 6.34315 37.6569C4 35.3137 4 31.5425 4 24Z"
              stroke="#2E353A"
              stroke-width="2"
            />
            <path
              d="M12 16L16.3178 19.5982C19.9911 22.6592 21.8277 24.1898 24 24.1898C26.1723 24.1898 28.0089 22.6592 31.6822 19.5982L36 16"
              stroke="#2E353A"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <div className="flex flex-col gap-[8px]">
            <p className="font-[700] text-[#2E353A] text-[12px] md:text-[16px]">
              Email
            </p>

            <p className="font-[700] text-[#7C7C7C] text-[12px] lg:text-[16px]">
              example@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[8px] lg:gap-[12px]">
          <div className="flex items-center gap-[8px] lg:gap-[12px]">
            <svg
              className="size-[32px] md:size-[48px]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3834 7.08888L14.2488 8.63945C15.0297 10.0388 14.7162 11.8744 13.4863 13.1044C13.4863 13.1044 11.9943 14.5963 14.6993 17.3013C17.4043 20.0062 18.8962 18.5144 18.8962 18.5144C20.1262 17.2844 21.9619 16.9709 23.3612 17.7518L24.9118 18.6172C27.0247 19.7964 27.2743 22.7596 25.417 24.6169C24.301 25.7329 22.9338 26.6013 21.4225 26.6586C18.8783 26.755 14.5577 26.1111 10.2236 21.777C5.88948 17.4429 5.2456 13.1223 5.34205 10.5781C5.39934 9.06678 6.26772 7.69963 7.38372 6.58363C9.24099 4.72636 12.2042 4.9759 13.3834 7.08888Z"
                stroke="#2E353A"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="font-[700] text-[#2E353A] text-[12px] md:text-[16px]">
              Number
            </p>

            <p className="font-[700] text-[#7C7C7C] text-[12px] lg:text-[16px]">
              +98 917 047 4107
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[8px] lg:gap-[12px]">
          <svg
            className="size-[32px] md:size-[48px]"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33331 13.5237C5.33331 7.52719 10.1089 2.66602 16 2.66602C21.891 2.66602 26.6666 7.52719 26.6666 13.5237C26.6666 19.4733 23.2622 26.4159 17.9506 28.8986C16.7123 29.4774 15.2876 29.4774 14.0494 28.8986C8.73775 26.4159 5.33331 19.4733 5.33331 13.5237Z"
              stroke="#2E353A"
              stroke-width="2"
            />
            <ellipse
              cx="16"
              cy="13.334"
              rx="4"
              ry="4"
              stroke="#2E353A"
              stroke-width="2"
            />
          </svg>

          <div className="flex flex-col gap-[8px]">
            <p className="font-[700] text-[#2E353A] text-[12px] md:text-[16px]">
              Location
            </p>

            <p className="font-[700] text-[#7C7C7C] text-[12px] lg:text-[16px]">
              example@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
