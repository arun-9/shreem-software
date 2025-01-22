import Breadcrumb from "./Breadcrumb";

import ContactUsSection from "./ContactUsSection";
import Career from "./Career.jsx";

import React, { useState } from "react";
const CareersPage = () => {
  return (
    <div>
      <Breadcrumb
        title="Careers"
        links={[
          { label: "Home", to: "/" },
          { label: "Careers", to: null },
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <Career />

        <ContactUsSection />
      </div>
    </div>
  );
};

export default CareersPage;
