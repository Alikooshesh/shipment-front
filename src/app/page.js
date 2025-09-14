import Aos from "@/components/aos";
import About from "@/components/pages/home/about";
import Contact from "@/components/pages/home/contact";
import Footer from "@/components/pages/home/footer";
import Header from "@/components/pages/home/header";
import HeroBanner from "@/components/pages/home/heroBanner";
import Services from "@/components/pages/home/services";
import Statistics from "@/components/pages/home/statistics";
import PortsWorldMap from "@/components/pages/home/worldMap";

export default function Home() {
  return (
    <>
    <Aos/>
    <div className="w-full bg-[#F5F6FA]">
      <Header/>
      <HeroBanner/>
      <Statistics/>
      <About/>
      <Services/>
      <PortsWorldMap/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}
