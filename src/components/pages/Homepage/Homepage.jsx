import { useEffect } from "react";
//import Navbar from "../Navbar";
//import Header from "../Header Nav Component/Header";
import Stats from "./Stats";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import ContactUs from "../Homepage/ContactUs";
import CaseStudies from "../../caseStudies/caseStudies";
import AgileMethodologyProcess from "../../AgileMethodologyProcess/AgileMethodologyProcess";
import TestimonialSlider from "../../TestimonialSlider/TestimonialSlider";
import MenuSection from "../../menuItems/menuItems";
//import MeetOurTeam from "../../MeetOurTeam";
//import Testimonials from "../../Testimonials/Testimonials";
import Contact from "../../ContactSection/ContactSection";
//import Footer from "../Footer/Footer";
//import Footer from "../Footer";
//import Testimonial from "../Testimonail";
//import ContactUsBanner from "../ContactUsBanner/ContactUsBanner";
//import Service from "../ServiceCard/ServiceCard";
//import CarouselComponent from "./CarouselComponent/CarouselComponent";
import ProcessSection from "../../Process Component/ProcessSection";
import RecentClients from "../../RecentClients/RecentClients";
//import ServicesSection from "./ServicesSection/ServicesSection";
import IndustriesSection from "../../IndustriesSection/IndustriesSection";
import HeroVideo from "../../HeroVideo/HeroVideo";
import TabSection from "../../TabSection/TabSection";
import AboutSection from "../../AboutSection/AboutSection";
import CallToAction from "../../CTA/CallToAction";

///import EngageSteps from "./EngageSteps/EngageSteps";

function Homepage() {
  useEffect(() => {
    document.title = "Shree | Home";
  }, []);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/*<Navbar />
      <Header />*/}

      <div className="bg-gradient-to-tr from-violet-100 to-violet-300">
        {" "}
        {/* Violet gradient background */}
        {/*<CarouselComponent />*/}
        <HeroVideo />
        <Stats />
        <ContactUs />
        {/*<AboutSection />*/}
        <WhyChooseUs />
        <CaseStudies />
        <RecentClients />
        <AgileMethodologyProcess />
        <TestimonialSlider />
        {/*<MenuSection />
        <MeetOurTeam />
        <Testimonials />*/}
        {/* reference : https://tailwindflex.com/@samuel33/hero-with-video-background */}
        {/*<Service />*/}
        {/*<ServicesSection />
        <ProcessSection />
        <TabSection />*/}
        {/*<IndustriesSection />*/}
        {/*<CallToAction />*/}
        {/*<ContactUsBanner />*/}
        {/*<Testimonial />*/}{" "}
        {/* reference : https://easyfrontend.com/components/ui/testimonials 
        <Contact />*/}
        {/*<Footer />*/}
      </div>
    </>
  );
}

export default Homepage;
