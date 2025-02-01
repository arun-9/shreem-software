import React from "react";
import Breadcrumb from "./Breadcrumb";
import ContactForm from "./ContactFormUsingPigeon"
//import ContactSection from "./ContactUs";
//import GoogleMapSection from "./GoogleMapSection";

const ContactPage = () => {
  return (
    <div>
      <Breadcrumb
        title="Contact"
        links={[
          { label: "Home", to: "/" },
          { label: "Contact", to: null },
        ]}
      />
      <div className="min-h-screen bg-gray-50">
      <ContactForm />
        {/*<ContactSection />
        <GoogleMapSection />*/}
      </div>
    </div>
  );
};

export default ContactPage;
