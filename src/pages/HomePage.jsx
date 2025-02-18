import Hero from "../segments/Hero/Hero";
import Achievement from "../segments/Achievement/Achievement";
import About from "../segments/About/About";
import Service from "../segments/Services/Service";
import Portfolio from "../segments/Portfolio/Portfolio";
import Testimonials from "../segments/Testimonials/Testimonials";
//import Blog from "../segments/Blog/Blog";
import ShreemMap from "../segments/ShreemMap/ShreemMap";
import Contact from "../segments/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Achievement />
      <About />
      <Service />
      <Portfolio />
      <Testimonials />
      <ShreemMap />
      {/*<Blog />*/}
      <Contact />
    </>
  );
};

export default HomePage;
