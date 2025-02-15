import "./Navbar.css";
import ShreeLogo from "../../components/ShreeLogo/ShreeLogo";
import { navRoutes } from "../../data";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Socials from "../../components/Socials/Socials";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useState, useEffect, useCallback } from "react";
import { convertHexToRgba } from "../../util";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handles Navbar Blur Effect on Scroll
  useEffect(() => {
    const dropNavbar = () => setDrop(window.scrollY > 200);
    window.addEventListener("scroll", dropNavbar);
    return () => window.removeEventListener("scroll", dropNavbar);
  }, []);

  // GSAP Animation for Navbar (runs once on initial load)
  useEffect(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo("#navbar .logo", { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo("#navbar .socials", { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        "#navbar .route-wrapper .route",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2 },
      );
  }, []);

  // Scroll to section after route change
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          scroll.scrollTo(element.offsetTop - 50, { smooth: true, duration: 500 });
        }
      }, 100);
    }
  }, [location.pathname]);

  // Optimized Navigation Click Handler
  const handleNavClick = useCallback(
    (id) => {
      setOpen(false); // Close menu after clicking link
      if (location.pathname === "/") {
        scroll.scrollTo(document.getElementById(id).offsetTop - 50, { smooth: true });
      } else {
        navigate(`/#${id}`);
      }
    },
    [location, navigate],
  );

  return (
    <>
      <nav
        id="navbar"
        className={`${drop ? "blur drop" : ""}`}
        style={{
          background: drop ? convertHexToRgba("--bg-base", 0.8) : "transparent",
        }}
      >
        <ShreeLogo />

        {/* Mobile & Desktop Navigation */}
        <div className={`route-wrapper ${open ? "open" : ""}`}>
          {navRoutes.map((route, index) => (
            <span key={index} className="route" onClick={() => handleNavClick(route.id)}>
              {route.label}
            </span>
          ))}
        </div>

        <Socials />

        {/* Hamburger Button */}
        <div className="menu" onClick={() => setOpen((prev) => !prev)}>
          {open ? <CgClose /> : <CgMenuRight />}
        </div>
      </nav>

      {/* Overlay to close menu when clicking outside */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
