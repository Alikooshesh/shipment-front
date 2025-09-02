import About from "@/components/pages/home/about";
import Footer from "@/components/pages/home/footer";
import Header from "@/components/pages/home/header";
import HeroBanner from "@/components/pages/home/heroBanner";
import Statistics from "@/components/pages/home/statistics";

export default function Home() {
  return (
    <div className="w-full bg-[#F5F6FA]">
      <Header/>
      <HeroBanner/>
      <Statistics/>
      <About/>
      <Footer/>
    </div>
  );
}
