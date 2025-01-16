import React, { useState } from "react";
import { FaLocationArrow, FaEnvelope, FaPhone, FaGlobe, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [captcha, setCaptcha] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);
  const [result, setResult] = useState("");

  // Generate custom CAPTCHA
  const generateCaptcha = () => {
    const randomNum = Math.floor(Math.random() * 9000) + 1000; // Random 4-digit number
    setCaptcha(randomNum);
  };

  const handleCaptchaValidation = (event) => {
    const enteredCaptcha = event.target.value;
    setCaptchaValid(enteredCaptcha === captcha.toString());
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!captchaValid) {
      toast.error("Please validate the CAPTCHA correctly.");
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", "ee717b8e-0164-4bf3-8ddb-0c1d0a4df82b"); // Replace with your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully!");

      event.target.reset();
      setCaptcha("");
      setCaptchaValid(false);
    } else {
      console.log("Error", data);
      toast.error(data.message || "Something went wrong. Please try again.");
      setResult(data.message || "Error");
    }
  };

  return (
    <section className="contact-section py-12 px-6 md:px-12 lg:px-24" id="contact">
      <ToastContainer />
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <motion.div
          className="lg:w-1/3 space-y-6 mb-8 lg:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaLocationArrow className="text-xl text-gray-700" />
              <p className="text-lg">123 Campsite Avenue, Wilderness, CA 98765</p>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-xl text-gray-700" />
              <p className="text-lg">info@shreemsoftwarewebsite.com</p>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-xl text-gray-700" />
              <p className="text-lg">(123) 456-78909</p>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-xl text-gray-700" />
              <p className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-xl text-gray-700" />
              <p className="text-lg">Saturday: 10:00 AM - 3:00 PM</p>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-xl text-gray-700" />
              <p className="text-lg">Sunday: Closed</p>
            </li>
            <li className="flex items-center space-x-3">
              <FaGlobe className="text-xl text-gray-700" />
              <p className="text-lg">www.shreemsoftware.com</p>
            </li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="lg:w-1/2 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          ></textarea>

          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Enter CAPTCHA"
              className="w-24 p-3 border border-gray-300 rounded-md"
              onChange={handleCaptchaValidation}
              required
            />
            <button
              type="button"
              className="p-3 bg-gray-200 text-gray-700 rounded-md"
              onClick={generateCaptcha}
            >
              {captcha || "Click to Generate CAPTCHA"}
            </button>
          </div>

          {captchaValid && <p className="text-sm text-green-500">Captcha Validated!</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
            disabled={!captchaValid}
          >
            Submit
          </button>
        </motion.form>
      </div>
      <span className="block mt-4 text-center text-gray-600">{result}</span>
    </section>
  );
};

export default Contact;
