import "./Contact.css";
import { useState } from "react";
import { contactInfo } from "../../data";
import { cssPerfectShape } from "../../util/index";
import Socials from "../../components/Socials/Socials";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  return { question: `${num1} + ${num2}`, answer: num1 + num2 };
};

const Contact = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(captchaInput) !== captcha.answer) {
      toast.error("Incorrect CAPTCHA answer. Please try again.");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "a0392f81-43c1-4555-a543-989e0cb4772f",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  };

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
          ["#contact .contact-info-wrapper .contact-info"],
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 },
        )
        .fromTo(
          ["#contact .socials .icon"],
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 },
        )
        .fromTo(
          [
            "#contact form h2",
            "#contact form .description",
            "#contact form .container",
            "#contact form .middle .control ",
            "#contact form .middle .captcha-container ",
            "#contact form .btn",
          ],
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 },
        );
    },
    { scope: container },
  );
  return (
    <section id="contact" ref={container}>
      <div className="container">
        <div className="contact-info-wrapper">
          {contactInfo.map((info, index) => (
            <div className="contact-info" key={index}>
              <div className="icon" style={{ ...cssPerfectShape(70, 70) }}>
                <info.icon />
              </div>
              <div className="info">
                <h3>{info.title} </h3>
                <p className="description">{info.description} </p>
                <h4 className="value"> {info.value} </h4>
              </div>
            </div>
          ))}
          <Socials />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="top">
            <h2>Get In Touch</h2>
            <p className="description">
              Have a project in mind or need expert advice? We are here to help! Reach out to our
              team for personalized consultations, inquiries, or to start your next big project
              today.
            </p>
          </div>

          <div className="middle">
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              className="control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="control"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              name="phoneNumber"
              className="control"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="control"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Dynamic CAPTCHA Field */}
            <div className="captcha-container">
              <label htmlFor="captcha">Solve: {captcha.question}</label>
              <input
                type="text"
                id="captcha"
                name="captcha"
                placeholder="Enter your answer"
                className="control"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="bottom" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Ensure ToastContainer is properly rendered */}
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default Contact;
