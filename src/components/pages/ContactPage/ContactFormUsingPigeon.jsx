import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps"; // Import Marker here
import { FaUser, FaEnvelope, FaPhoneAlt, FaEdit, FaPaperPlane } from "react-icons/fa"; // Import icons
import { toast, ToastContainer } from "react-toastify"; // Import Toastify and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { motion } from "framer-motion"; // Import motion from framer-motion

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [captchaAnswer, setCaptchaAnswer] = useState(""); // Store CAPTCHA answer
  const [captchaQuestion, setCaptchaQuestion] = useState(""); // Store the math question
  const [correctAnswer, setCorrectAnswer] = useState(0); // Store the correct answer

  // Generate a random math question (addition or subtraction)
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() > 0.5 ? "+" : "-";
    const answer = operation === "+" ? num1 + num2 : num1 - num2;
    setCaptchaQuestion(`${num1} ${operation} ${num2} = ?`);
    setCorrectAnswer(answer);
  };

  // Generate CAPTCHA when component mounts
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (parseInt(captchaAnswer) !== correctAnswer) newErrors.captcha = "Incorrect CAPTCHA answer";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      toast.success("Message sent successfully!"); // Show success toast
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setCaptchaAnswer(""); // Reset CAPTCHA answer field
      generateCaptcha(); // Generate a new CAPTCHA after successful submission
    } else {
      toast.error("Please fill out all fields correctly."); // Show error toast
    }
  };

  const position = [13.029433144959226, 77.57557163858628]; // Change this to your company's location

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />

      {/* Contact Form with Animation */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-auto mt-12"
        initial={{ opacity: 0, y: -50 }} // Initial position (off-screen and transparent)
        animate={{ opacity: 1, y: 0 }} // Animate to normal position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Contact Us
          </motion.span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input with typing animation */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaUser className="text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* Email Input with bounce animation */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
          >
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* Phone Input with slide-in animation */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <FaPhoneAlt className="text-gray-500" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          {/* Subject Input with scale-in animation */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <FaEdit className="text-gray-500" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.subject ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

          {/* Message Input with fade-in animation */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <FaPaperPlane className="text-gray-500" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32 ${errors.message ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          {/* Math CAPTCHA with fade-in while typing */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <label className="text-gray-500">{captchaQuestion}</label>
            <input
              type="text"
              name="captcha"
              value={captchaAnswer}
              onChange={handleCaptchaChange}
              placeholder="Your Answer"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.captcha ? "border-red-500" : ""}`}
            />
          </motion.div>
          {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}

          {/* Submit Button with hover effect */}
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: "#4CAF50", borderWidth: 3 }} // Smooth border transition on hover
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* Pigeon Map with animation */}
      <motion.div
        className="shadow-lg rounded-xl overflow-hidden mt-8 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <Map height={400} width={600} defaultCenter={position} defaultZoom={15}>
          <Marker anchor={position} payload={1} />
        </Map>
      </motion.div>
    </div>
  );
};

export default ContactForm;
