import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Testimonial from "./Testimonail";
import ContactUsBanner from "./ContactUsBanner/ContactUsBanner";
import Service from "./ServiceCard/ServiceCard";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import ProcessSection from "./Process Component/ProcessSection";

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

      <div className="bg-gradient-to-tr from-blue-100">
        <CarouselComponent />
        <Service />
        <ProcessSection />
        <ContactUsBanner />
        <Testimonial /> {/* reference : https://easyfrontend.com/components/ui/testimonials */}
        <Footer />
      </div>
    </>
  );
}
export default Homepage;
