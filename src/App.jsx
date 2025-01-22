import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar";
import Footer from "./components/Unused Components/Footer";
import Homepage from "./components/pages/Homepage/Homepage";
import CareersPage from "./components/pages/CareersPage/CareersPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import MobileAppDevelopment from "./components/pages/Solution/MobileAppDevelopment";
import WebAppDevelopment from "./components/pages/Solution/WebAppDevelopment";
import EcommerceSolutions from "./components/pages/Solution/EcommerceSolutions";
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
        <Route path="/android-ios-cross-platform" element={<MobileAppDevelopment />} />
        <Route path="/web-applications" element={<WebAppDevelopment />} />
        <Route path="/e-commerce-solutions" element={<EcommerceSolutions />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
