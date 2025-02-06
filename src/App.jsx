import Navbar from "./segments/Navbar/Navbar";
import Hero from "./segments/Hero/Hero";
import Achievement from "./segments/Achievement/Achievement";
import About from "./segments/About/About";
import Service from "./segments/Services/Service";
import Portfolio from "./segments/Portfolio/Portfolio";
import Testimonials from "./segments/Testimonials/Testimonials";
import Contact from "./segments/Contact/Contact";
import "swiper/css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievement />
      <About />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
