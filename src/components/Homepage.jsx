import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Testimonial from "./Testimonail";
import ContactUsBanner from "./ContactUsBanner/ContactUsBanner";
import Service from "./ServiceCard/ServiceCard";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import ProcessSection from "./Process Component/ProcessSection";
import RecentClients from "./RecentClients/RecentClients";
import ServicesSection from "./ServicesSection/ServicesSection";
import IndustriesSection from "./IndustriesSection/IndustriesSection";
import HeroVideo from "./HeroVideo/HeroVideo";

function Homepage() {
  useEffect(() => {
    document.title = "SabMedia | Home";
  }, []);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-tr from-violet-100 to-violet-300">
        {" "}
        {/* Violet gradient background */}
        <CarouselComponent />
        <HeroVideo />
        {/* reference : https://tailwindflex.com/@samuel33/hero-with-video-background */}
        <Service />
        <ServicesSection />
        <ProcessSection />
        <RecentClients />
        <IndustriesSection />
        <ContactUsBanner />
        <Testimonial /> {/* reference : https://easyfrontend.com/components/ui/testimonials */}
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
