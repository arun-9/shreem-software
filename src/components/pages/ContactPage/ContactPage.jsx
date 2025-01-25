import React from "react";
import Breadcrumb from "./Breadcrumb";
import ContactSection from "./ContactUs";
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
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
