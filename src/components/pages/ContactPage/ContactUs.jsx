import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsWithCaptcha = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Generate a random math CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaValue(`${num1} + ${num2} = ?`);
    return num1 + num2;
  };

  const [captchaAnswer, setCaptchaAnswer] = useState(generateCaptcha);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(userInput, 10) === captchaAnswer) {
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({ name: "", email: "", message: "" });
      setUserInput("");
      setCaptchaAnswer(generateCaptcha()); // Regenerate CAPTCHA
    } else {
      toast.error("Incorrect CAPTCHA. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions or need help? Reach out to us!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* CAPTCHA */}
              <div>
                <label
                  htmlFor="captcha"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  CAPTCHA: Solve {captchaValue}
                </label>
                <input
                  type="number"
                  id="captcha"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your Answer"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-violet-600 text-white rounded-md shadow-md hover:bg-violet-700"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to reach out to us through the following:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  📞 <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p>
                  📧 <strong>Email:</strong> contact@shreemsoftware.com
                </p>
                <p>
                  📍 <strong>Address:</strong> 123 Business Street, Tech City, USA
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509369!2d144.95565111531863!3d-37.81732797975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614175171098!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="rounded-md"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUsWithCaptcha;
