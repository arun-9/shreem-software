import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar";
import Footer from "./components/Unused Components/Footer";
import Homepage from "./components/pages/Homepage/Homepage";
import CareersPage from "./components/pages/CareersPage/CareersPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import Login from "./components/Login/Login";
import IT_Services_Page from "./components/pages/Solution/IT-Services/IT-ServicesPage";
//import About from "./components/pages/About";

//import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/it-services" element={<IT_Services_Page />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
