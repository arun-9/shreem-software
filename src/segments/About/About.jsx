import "./About.css";
import VRIMage from "../../assets/vr.png";
import PersonnelImage from "../../assets/pic-1.png";
import { whyChooseUs, ourApproaches } from "../../data";
import { convertHexToRgba, cssPerfectShape } from "../../util/index";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";

const About = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.1,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          [
            "#about .vision-item",
            "#about .vision-item .image-container",
            "#about h2",
            "#about .approach",
            "#about .contact-us ",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1 },
        )
        .fromTo(
          ["#about .spotlight", "#about .why-choose-us-container .why-choose-us"],
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1 },
        );
    },
    { scope: container },
  );
  return (
    <section id="about" ref={container}>
      <div className="container">
        <div className="left-column">
          <div className="spotlight" />
          <div className="vision-container">
            <div className="vision-item">
              <div className="vision-content">
                <h2>Our Vision</h2>
                <h4 className="title">Empowering Innovation, Shaping the Future</h4>
                <p className="description">
                  Shreem Software Pvt. Ltd. envisions a future of innovation and efficiency through
                  cutting-edge software solutions. We strive to empower businesses with scalable,
                  secure, and smart technology.
                </p>
              </div>
              <div className="image-container">
                <img src={VRIMage} />
              </div>
            </div>

            <div className="vision-item">
              <div className="spotlight" />
              <div className="vision-content">
                <h2>Who We Are</h2>
                <h4 className="title">Your Trusted Technology Partner</h4>
                <p className="description">
                  Shreem Software Pvt. Ltd. is a trusted technology partner, delivering innovative
                  and customized software solutions to drive business success.
                </p>
              </div>
              <div className="image-container">
                <img src={PersonnelImage} />
              </div>
            </div>
          </div>

          <div className="why-choose-us-container">
            {whyChooseUs.map((list, index) => (
              <div
                className=" why-choose-us"
                style={{ background: convertHexToRgba("--bg-secondary", 0.3) }}
                key={index}
              >
                <div className="icon">
                  <img src={list.imageIcon} />
                </div>
                <h3 className="title">{list.title} </h3>
                <p className="description">{list.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-column">
          <h2 className="title">Our Approach</h2>
          <div className="boxes-wrapper">
            {ourApproaches.map((approach, index) => (
              <div className="approach" key={index}>
                <div
                  className="icon"
                  style={{
                    ...cssPerfectShape(50, 50),
                    background: convertHexToRgba("--primary", 0.1),
                  }}
                >
                  <approach.icon />
                </div>

                <div>
                  <h3 className="title">{approach.title} </h3>
                  <p className="description">{approach.description} </p>
                </div>
              </div>
            ))}

            <div className="contact-us">
              <h2 className="title">
                Reach out to see how our IT solution can boost your success.
              </h2>
              <Link to="contact" smooth={true} className="btn primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
