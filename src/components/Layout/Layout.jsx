import { Outlet } from "react-router-dom";
import Navbar from "../../segments/Navbar/Navbar";
import Footer from "../../segments/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
