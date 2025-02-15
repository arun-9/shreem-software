import "./Service.css";
import { cssPerfectShape, convertHexToRgba } from "../../util/index";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCloud,
  FaMobileAlt,
  FaShoppingCart,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Cyber Security",
    description:
      "Protect your business with robust cybersecurity solutions that safeguard data and prevent unauthorized access.",
    icon: BsShieldLock,
    link: "/services/CyberSecurityServices",
  },
  {
    title: "AWS Cloud Services",
    description:
      "Secure and scalable cloud solutions tailored to fit your business needs, enabling seamless data access and collaboration.",
    icon: FaCloud,
    link: "/services/AWSCloudServices",
  },
  {
    title: "Mobile-App Development",
    description:
      "Develop custom mobile applications that enhance user experience and drive business growth.",
    icon: FaMobileAlt,
    link: "/services/MobileAppDevelopment",
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Boost your online sales with powerful, scalable e-commerce solutions that provide seamless shopping experiences.",
    icon: FaShoppingCart,
    link: "/services/EcommerceSolutions",
  },
  {
    title: "Web Development",
    description:
      "Create stunning, responsive websites tailored to your business needs using modern web technologies.",
    icon: FaGlobe,
    link: "/services/WebDevelopment",
  },
  {
    title: "Software Consulting",
    description:
      "Leverage our expertise to make strategic IT decisions that drive efficiency and optimize your technology investments.",
    icon: FaHandshake,
    link: "/services/SoftwareConsulting",
  },
];

const Service = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          "#services .section-header h3, #services .section-header h2, #services .services .service, #services .spotlight",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.3 },
        );
    },
    { scope: container },
  );

  return (
    <section id="services" ref={container}>
      <div className="spotlight" />
      <div className="container">
        <div className="section-header">
          <h3>Our Services</h3>
          <h2>Empowering Your Business with Tailored IT Solutions</h2>
        </div>

        <div className="services">
          {services.map((service, index) => {
            const bgSecondary = getComputedStyle(document.documentElement).getPropertyValue(
              "--bg-secondary",
            );
            const primaryColor = getComputedStyle(document.documentElement).getPropertyValue(
              "--primary",
            );

            return (
              <div
                className="blur service"
                style={{
                  background: convertHexToRgba(bgSecondary, 0.8),
                }}
                key={index}
              >
                <div
                  className="icon"
                  style={{
                    ...cssPerfectShape(70, 70),
                    background: convertHexToRgba(primaryColor, 0.1),
                  }}
                >
                  <service.icon size={30} color="var(--primary)" />
                </div>
                <div className="middle">
                  <h4 className="title">{service.title}</h4>
                  <p className="line-clamp-3 description">{service.description}</p>
                </div>
                <div className="bottom">
                  <Link to={service.link} className="btn primary">
                    Explore <FaArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
