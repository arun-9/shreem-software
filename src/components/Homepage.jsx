import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
//import Features from "./Features";
//import Prices from "./Prices";
import CallToAction from "../components/CallToAction";
//import Review from "./Review";
import Footer from "./Footer";
import Testimonial22 from "./Testimonail";

//import Blogs from "./Blog/Blogs";

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
      <Hero />

      <div className="bg-gradient-to-tr from-blue-100">
        {/*<Features />
        <Prices />
        <Blogs />*/}
        <CallToAction />
        <Testimonial22 /> {/* reference : https://easyfrontend.com/components/ui/testimonials */}
        {/*<Review />*/}
        <Footer />
      </div>
    </>
  );
}
export default Homepage;
