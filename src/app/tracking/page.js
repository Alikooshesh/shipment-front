import HeroBanner from "@/components/pages/tracking/heroBanner";
import Header from "@/components/pages/tracking/header";
import BlCard from "@/components/pages/tracking/blCard";
import Link from "next/link";
import { Home2 } from "iconsax-reactjs";
import { getAllBl } from "@/services/dashboard/bl";

export default async function TrackingPage({ searchParams }) {
  const code = searchParams.code;
console.log({code})
  if (!code) {
    return <div>No tracking code provided.</div>;
  }

  let data;
  let error;
  try {
    data = await getAllBl({filter : `filterKey=blNumber&filterValue=${code}`});
    data = data[0]
  } catch (err) {
    error = err
    console.log(err)
  }

  return (
    <div className="w-full bg-white">
      <Header/>
      <HeroBanner/>
      <div className="w-full flex items-cneter justify-center p-[16px] lg:py-[42px]">
        <div className="w-full max-w-[600px]">
        {error ? <p className="font-bold text-center text-red-600 text-[36px]">BL Number did not found.</p> : <BlCard {...data}/>}
        </div>
      </div>
      <Link href="/" className="w-full max-w-[600px] block md:hidden my-[48px] px-[16px]">
        <button className="w-full h-[48px] flex items-center justify-center bg-[#2E353A] rounded-[4px] gap-[8px] text-white cursor-pointer">
          <Home2 size={24} color="#FFF"/>
          <p className="font-[600] text-[20px]">
          Back to home
          </p>
        </button>
      </Link>
    </div>
  );
}
