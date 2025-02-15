import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

import CyberSecurityServices from "./pages/services/CyberSecurityServices"; // Import the new component
import AWSCloudServices from "./pages/services/AWSCloudServices";
import "swiper/css";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import EcommerceSolutions from "./pages/services/EcommerceSolutions";
import WebAppDevelopment from "./pages/services/WebAppDevelopment";
import SoftwareConsultingServices from "./pages/services/SoftwareConsultingServices";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services/CyberSecurityServices" element={<CyberSecurityServices />} />
          <Route path="/services/AWSCloudServices" element={<AWSCloudServices />} />
          <Route path="/services/MobileAppDevelopment" element={<MobileAppDevelopment />} />
          <Route path="/services/EcommerceSolutions" element={<EcommerceSolutions />} />
          <Route path="/services/WebDevelopment" element={<WebAppDevelopment />} />
          <Route path="/services/SoftwareConsulting" element={<SoftwareConsultingServices />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
