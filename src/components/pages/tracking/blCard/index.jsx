import {
  formatDateToLongString,
  getTimeProgressPercentage,
} from "@/utils/date";
import { toastSuccess } from "@/utils/toast";
import {
  Box,
  Buildings2,
  Calendar,
  Copy,
  DocumentDownload,
  Edit,
  Eye,
} from "iconsax-reactjs";
import { redirect } from "next/navigation";

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });

    toastSuccess("Bl number copied successfully")
}

const BlCard = ({
  id,
  shipmentDate,
  receiveDate,
  shipper,
  products,
  destination,
  vesselName,
  blNumber,
  origin,
}) => {
  const productsCount = products.reduce((sum, product) => {
    return sum + parseFloat(product.productQuantity || 0);
  }, 0);

  return (
    <div className="w-full px-[8px] pt-[12px] pb-[16px] border-[2px] rounded-[12px] bg-[#FFFFFF] relative overflow-hidden shadow-[0px_4px_4px_0px_#00000040] md:shadow-none">
      <div>
        <div className="w-full flex items-center justify-between">
        <p className="font-[700] text-[20px] text-[#1E1E1E]">{vesselName}</p>
        <p className="font-[600] text-[16px] text-[#38B000]">
          {getTimeProgressPercentage(shipmentDate, receiveDate)}% completed
        </p>
        </div>
        <div className="mt-[4px] flex items-center gap-[8px]">
          <p className="text-[16px] font-[600] text-[#7C7C7C]">{blNumber}</p>
        </div>
      </div>
      <div className="mt-[8px] flex flex-col gap-[8px] text-[#7C7C7C]">
        <div className="flex items-center gap-[4px]">
          <Calendar size={16} />
          <p className="font-[600] text-[12px]">
            {formatDateToLongString(shipmentDate)} -{" "}
            {formatDateToLongString(receiveDate)}
          </p>
        </div>
        <div className="flex items-center gap-[4px]">
          <Buildings2 size={16} />
          <p className="font-[600] text-[12px]">{shipper}</p>
        </div>
        <div className="flex items-center gap-[4px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.369 9.21355C14.3672 9.2007 14.3626 9.1884 14.3554 9.17753C14.3483 9.16667 14.3389 9.1575 14.3279 9.15067C14.3168 9.14385 14.3044 9.13954 14.2915 9.13805C14.2786 9.13656 14.2656 9.13793 14.2532 9.14205C13.344 9.44367 12.5755 10.0657 12.0911 10.8922C12.0836 10.9072 12.0805 10.924 12.0821 10.9407C12.0838 10.9574 12.0902 10.9733 12.1006 10.9865C12.1109 10.9997 12.1248 11.0097 12.1406 11.0153C12.1564 11.0209 12.1735 11.0219 12.1898 11.0182L12.8027 10.8684C12.8216 10.864 12.8414 10.8659 12.859 10.8738C12.8767 10.8817 12.8913 10.8952 12.9006 10.9122C12.9099 10.9292 12.9133 10.9488 12.9104 10.9679C12.9075 10.9871 12.8984 11.0047 12.8844 11.0182L12.6665 11.2327C11.3794 12.3904 11.107 12.5947 9.91189 12.5947C9.67474 12.5964 9.44216 12.5295 9.24218 12.402C9.04221 12.2746 8.88338 12.092 8.78484 11.8762C8.66806 11.5829 8.61132 11.2691 8.618 10.9535C8.60097 10.184 8.58395 9.41445 8.58395 8.64833L8.53287 5.02202H10.3171C10.4003 5.15586 10.5249 5.25894 10.672 5.31565C10.819 5.37236 10.9806 5.37962 11.1321 5.33633C11.2837 5.29305 11.417 5.20156 11.5119 5.07574C11.6068 4.94991 11.6582 4.79658 11.6582 4.63896C11.6582 4.48135 11.6068 4.32802 11.5119 4.20219C11.417 4.07636 11.2837 3.98488 11.1321 3.94159C10.9806 3.8983 10.819 3.90556 10.672 3.96228C10.5249 4.01899 10.4003 4.12207 10.3171 4.2559H8.52947C8.52947 3.91541 8.52947 3.57491 8.52947 3.23441C8.90242 3.11284 9.21977 2.86223 9.42449 2.52763C9.62921 2.19302 9.70787 1.79637 9.64632 1.40897C9.58477 1.02156 9.38706 0.668815 9.08872 0.414131C8.79038 0.159448 8.41098 0.0195312 8.01872 0.0195312C7.62646 0.0195312 7.24706 0.159448 6.94872 0.414131C6.65038 0.668815 6.45267 1.02156 6.39112 1.40897C6.32958 1.79637 6.40823 2.19302 6.61295 2.52763C6.81767 2.86223 7.13503 3.11284 7.50797 3.23441C7.50797 3.57491 7.50797 3.91541 7.50797 4.2559H5.6761C5.59285 4.12207 5.46827 4.01899 5.32121 3.96228C5.17415 3.90556 5.01261 3.8983 4.86106 3.94159C4.7095 3.98488 4.57618 4.07636 4.48125 4.20219C4.38633 4.32802 4.33499 4.48135 4.33499 4.63896C4.33499 4.79658 4.38633 4.94991 4.48125 5.07574C4.57618 5.20156 4.7095 5.29305 4.86106 5.33633C5.01261 5.37962 5.17415 5.37236 5.32121 5.31565C5.46827 5.25894 5.59285 5.15586 5.6761 5.02202H7.4569L7.40583 8.64833C7.40583 9.41785 7.3888 10.184 7.37518 10.9535C7.38068 11.2694 7.32279 11.5831 7.20493 11.8762C7.10733 12.092 6.94919 12.2747 6.74972 12.4022C6.55025 12.5298 6.31804 12.5966 6.08129 12.5947C4.88274 12.5947 4.61034 12.3904 3.32325 11.2327L3.11215 11.0284C3.09823 11.0149 3.08911 10.9973 3.0862 10.9781C3.08328 10.959 3.08672 10.9394 3.096 10.9224C3.10527 10.9054 3.11986 10.8919 3.13754 10.884C3.15522 10.8761 3.17501 10.8742 3.19387 10.8786L3.80676 11.0284C3.82312 11.0321 3.84019 11.0311 3.856 11.0255C3.8718 11.0199 3.88568 11.0099 3.89603 10.9967C3.90638 10.9835 3.91276 10.9676 3.91444 10.9509C3.91612 10.9342 3.91302 10.9174 3.90551 10.9024C3.41831 10.0757 2.64569 9.45571 1.73313 9.15907C1.72103 9.15491 1.70814 9.15352 1.69543 9.15502C1.68272 9.15652 1.67051 9.16087 1.65971 9.16774C1.64891 9.17462 1.63981 9.18383 1.63306 9.19471C1.62632 9.20559 1.62212 9.21785 1.62076 9.23058C1.56629 9.63237 1.41647 11.1237 1.96126 11.9546C1.97229 11.966 1.98618 11.9742 2.00149 11.9785C2.0168 11.9827 2.03296 11.9827 2.04828 11.9785C2.06359 11.9743 2.07751 11.9661 2.08856 11.9547C2.09961 11.9433 2.10739 11.9291 2.11108 11.9137L2.29836 11.4438C2.30448 11.4266 2.31578 11.4117 2.33072 11.4011C2.34566 11.3906 2.36349 11.3849 2.38178 11.3849C2.40006 11.3849 2.4179 11.3906 2.43284 11.4011C2.44777 11.4117 2.45908 11.4266 2.4652 11.4438C2.65588 12.0022 3.3573 13.3983 5.72036 14.4402C5.80548 14.4708 7.49435 15.0565 7.90636 15.9282C7.91452 15.9447 7.92713 15.9586 7.94277 15.9683C7.95842 15.978 7.97647 15.9832 7.99489 15.9832C8.01331 15.9832 8.03136 15.978 8.047 15.9683C8.06264 15.9586 8.07526 15.9447 8.08342 15.9282C8.49882 15.0565 10.1877 14.4708 10.2694 14.4402C12.6359 13.3983 13.3339 12.0022 13.528 11.4438C13.5347 11.4277 13.546 11.4139 13.5606 11.4042C13.5751 11.3945 13.5922 11.3893 13.6097 11.3893C13.6272 11.3893 13.6443 11.3945 13.6588 11.4042C13.6733 11.4139 13.6847 11.4277 13.6914 11.4438C13.7527 11.5936 13.8276 11.7843 13.8787 11.9137C13.8862 11.928 13.8975 11.9399 13.9113 11.9482C13.9251 11.9565 13.9409 11.9609 13.957 11.9609C13.9731 11.9609 13.9889 11.9565 14.0027 11.9482C14.0165 11.9399 14.0278 11.928 14.0353 11.9137C14.5801 11.1067 14.4303 9.61534 14.369 9.21355ZM7.99829 2.3389C7.8636 2.3389 7.73194 2.29896 7.61995 2.22413C7.50796 2.1493 7.42068 2.04295 7.36913 1.91851C7.31759 1.79407 7.3041 1.65715 7.33038 1.52505C7.35666 1.39295 7.42152 1.27161 7.51675 1.17637C7.61199 1.08113 7.73334 1.01627 7.86544 0.989993C7.99754 0.963717 8.13446 0.977203 8.2589 1.02875C8.38333 1.08029 8.48969 1.16757 8.56452 1.27956C8.63935 1.39155 8.67929 1.52322 8.67929 1.6579C8.67929 1.83852 8.60754 2.01173 8.47983 2.13944C8.35212 2.26715 8.1789 2.3389 7.99829 2.3389Z"
              fill="#7C7C7C"
            />
          </svg>

          <p className="font-[600] text-[12px]">{destination}</p>
        </div>
        <div className="flex items-center gap-[4px]">
          <Box size={16} />
          <p className="font-[600] text-[12px]">{productsCount} Items</p>
        </div>
      </div>
      <div className="w-full mt-[24px]">
        <Stepper
          origin={origin}
          destination={destination}
          shipmentDate={shipmentDate}
          receiveDate={receiveDate}
        />
      </div>
    </div>
  );
};

export default BlCard;

const Stepper = ({ origin, shipmentDate, destination, receiveDate }) => {
  const percent = getTimeProgressPercentage(shipmentDate, receiveDate);

  const isReceived = percent > 99;

  return (
    <div className="w-full pt-[36px] px-[56px] pb-[60px] relative">
      <div className="w-full h-[2px] bg-[#7C7C7C] flex items-center justify-between relative">
        <div className="size-[20px] rounded-full p-[2px] border border-[#38B000] relative left-[-16px]">
          <div className={`size-full rounded-full bg-[#38B000]`} />
          <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2 flex flex-col gap-[4px] items-center justify-center">
            <p className="font-[600] text-[12px] text-[#1E1E1E] whitespace-nowrap">
              {origin}
            </p>
            <p className="font-[600] text-[12px] text-[#7C7C7C] whitespace-nowrap">
              {formatDateToLongString(shipmentDate)}
            </p>
          </div>
        </div>

        <div
          className={`size-[20px] rounded-full p-[2px] border relative right-[-16px] ${
            isReceived ? "border-[#38B000]" : "border-transparent"
          }`}
        >
          <div
            className={`size-full rounded-full ${
              isReceived ? "bg-[#38B000]" : "bg-[#7C7C7C]"
            }`}
          />
          <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2 flex flex-col gap-[4px] items-center justify-center">
            <p className="font-[600] text-[12px] text-[#1E1E1E] whitespace-nowrap">
              {destination}
            </p>
            <p className="font-[600] text-[12px] text-[#7C7C7C] whitespace-nowrap">
              {formatDateToLongString(receiveDate)}
            </p>
          </div>
        </div>

        <div
          style={{ width: `${percent}%` }}
          className="h-[2px] bg-[#38B000] absolute"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[-12px] top-[-36px]"
          >
            <path
              d="M2 20C2.22717 20.3165 2.52797 20.5729 2.87642 20.7472C3.22488 20.9214 3.6105 21.0082 4 21C4.3895 21.0082 4.77512 20.9214 5.12358 20.7472C5.47203 20.5729 5.77283 20.3165 6 20C6.22717 19.6835 6.52797 19.4271 6.87642 19.2528C7.22488 19.0786 7.6105 18.9918 8 19C8.3895 18.9918 8.77512 19.0786 9.12358 19.2528C9.47203 19.4271 9.77283 19.6835 10 20C10.2272 20.3165 10.528 20.5729 10.8764 20.7472C11.2249 20.9214 11.6105 21.0082 12 21C12.3895 21.0082 12.7751 20.9214 13.1236 20.7472C13.472 20.5729 13.7728 20.3165 14 20C14.2272 19.6835 14.528 19.4271 14.8764 19.2528C15.2249 19.0786 15.6105 18.9918 16 19C16.3895 18.9918 16.7751 19.0786 17.1236 19.2528C17.472 19.4271 17.7728 19.6835 18 20C18.2272 20.3165 18.528 20.5729 18.8764 20.7472C19.2249 20.9214 19.6105 21.0082 20 21C20.3895 21.0082 20.7751 20.9214 21.1236 20.7472C21.472 20.5729 21.7728 20.3165 22 20M4 18L3 13H21L19 17M5 13V7H13L17 13M7 7V3H6"
              stroke="#1E1E1E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
