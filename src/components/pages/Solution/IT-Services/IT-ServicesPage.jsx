import React from "react";
import Breadcrumb from "../Breadcrumb";
import CustomSoftwareSolutions from "./CustomSoftwareSolutions";
import ManagedITServices from "./ManagedITServices";
import MobileAppDevelopment from "./MobileAppDevelopment.JSX";
import SoftwareDevelopment from "./SoftwareDevelopment";
import WebDesigningDevelopment from "./WebDesigningDevelopment";
import CloudServiceComponent from "./cloudServices";
import CloudStorageBlog from "./CloudStorageBlog;.JSX";
import CloudComputingBlog from "./CloudComputingBlog";

const IT_Services_Page = () => {
  return (
    <div>
      <Breadcrumb
        title="Contact"
        links={[
          { label: "Home", to: "/" },
          { label: "IT-Services", to: null },
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <CustomSoftwareSolutions />
        <ManagedITServices />
        <MobileAppDevelopment />
        <SoftwareDevelopment />
        <WebDesigningDevelopment />
        <CloudServiceComponent />
        <CloudStorageBlog />
        <CloudComputingBlog />
      </div>
    </div>
  );
};

export default IT_Services_Page;
