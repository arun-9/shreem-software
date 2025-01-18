import Breadcrumb from "./Breadcrumb";
import CareersList from "./CareersList";
import ContactUsSection from "./ContactUsSection";

import React, { useState } from "react";
const CareersPage = () => {
  const jobs = [
    {
      title: "IT Operations Specialist",
      type: "Full time",
      description:
        "We are currently seeking a highly motivated individual to provide remote and onsite hands-on support to staff, vendors, and customers.",
    },
    {
      title: "IT Desktop Support",
      type: "Full time",
      description:
        "Our team believes in transparency, flexibility, and teamwork to solve problems and support the organization.",
    },
    {
      title: "IT Summer Intern",
      type: "Full time",
      description:
        "TechAI is looking for a summer intern to support Microsoft Server Operating Systems, storage systems, and client device technologies.",
    },
    {
      title: "Software Engineer",
      type: "Full time",
      description:
        "Create enhancements or new services based on data acquisition and analytics, and design, debug, and modify software interfaces.",
    },
    {
      title: "Java Developer",
      type: "Full time",
      description:
        "Design, develop, and maintain high-performance applications using Java, creating scalable and efficient solutions.",
    },
    {
      title: "Android Developer",
      type: "Full time",
      description:
        "Design and develop engaging mobile applications for the Android platform using Java or Kotlin programming languages.",
    },
    // Add other job objects here...
  ];

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
        <CareersList jobs={jobs} />

        <ContactUsSection />
      </div>
    </div>
  );
};

export default CareersPage;
