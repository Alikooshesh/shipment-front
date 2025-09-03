import About from "@/components/pages/home/about";
import Contact from "@/components/pages/home/contact";
import Footer from "@/components/pages/home/footer";
import Header from "@/components/pages/home/header";
import HeroBanner from "@/components/pages/home/heroBanner";
import Services from "@/components/pages/home/services";
import Statistics from "@/components/pages/home/statistics";

export default function Home() {
  return (
    <div className="w-full bg-[#F5F6FA]">
      <Header/>
      <HeroBanner/>
      <Statistics/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
