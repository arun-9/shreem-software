import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import gsap from "gsap";
import ShreeLogo from "../../components/ShreeLogo/ShreeLogo";
import Socials from "../../components/Socials/Socials";
import { navRoutes } from "../../data";
import { convertHexToRgba } from "../../util";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Scroll Effect
  useEffect(() => {
    const dropNavbar = () => {
      document.getElementById("navbar").classList.toggle("drop", window.scrollY > 100);
    };
    window.addEventListener("scroll", dropNavbar);
    return () => window.removeEventListener("scroll", dropNavbar);
  }, []);

  // GSAP Animation (Ensure elements exist before animating)
  useEffect(() => {
    gsap.fromTo(
      "#navbar",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  // Handle Navigation Click
  const handleNavClick = useCallback(
    (id) => {
      if (location.pathname === "/") {
        scroll.scrollTo(document.getElementById(id).offsetTop - 50, { smooth: true });
      } else {
        navigate(`/#${id}`);
        setTimeout(() => {
          scroll.scrollTo(document.getElementById(id)?.offsetTop - 50, { smooth: true });
        }, 500);
      }
      closeSidebar(); // Close sidebar on click
    },
    [location, navigate],
  );

  // Toggle Sidebar State
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav
        id="navbar"
        style={{ background: convertHexToRgba("--bg-base", 0.8) }}
        aria-label="Main Navigation"
      >
        <ShreeLogo />
        <div className="route-wrapper">
          {navRoutes.map((route, index) => (
            <span
              key={index}
              className="route"
              onClick={() => handleNavClick(route.id)}
              aria-label={`Navigate to ${route.label}`}
            >
              {route.label}
            </span>
          ))}
        </div>
        <Socials />
        <button
          className={`menu-toggle ${isSidebarOpen ? "open" : "closed"}`}
          onClick={handleSidebarToggle}
          aria-label="Open mobile navigation menu"
        />
      </nav>

      {/* Overlay */}
      <div className={`overlay ${isSidebarOpen ? "active" : ""}`} onClick={closeSidebar}></div>

      {/* Sidebar */}
      <aside
        className={`sidebar ${isSidebarOpen ? "active" : ""}`}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        <button className="close-btn" onClick={closeSidebar} aria-label="Close sidebar menu">
          ×
        </button>
        {navRoutes.map((route, index) => (
          <span
            key={index}
            className="route"
            onClick={() => handleNavClick(route.id)}
            aria-label={`Navigate to ${route.label}`}
          >
            {route.label}
          </span>
        ))}
      </aside>
    </>
  );
};

export default Navbar;
