import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    service: "",
    captcha: "",
    message: "", // Message field (optional)
  });
  const [captcha, setCaptcha] = useState({ num1: null, num2: null });
  const [captchaValue, setCaptchaValue] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate a dynamic captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptcha({ num1, num2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle captcha input change
  const handleCaptchaChange = (e) => {
    setCaptchaValue(e.target.value);
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (
      !formData.emailOrPhone ||
      (!/^[a-zA-Z0-9._-]+@[a-zAol9-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.emailOrPhone) &&
        !/^\d+$/.test(formData.emailOrPhone))
    ) {
      newErrors.emailOrPhone = "Please enter a valid email or phone number";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (parseInt(captchaValue) !== captcha.num1 + captcha.num2) {
      newErrors.captcha = "Captcha is incorrect";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    const formDataToSubmit = new FormData(event.target);
    formDataToSubmit.append("access_key", "ee717b8e-0164-4bf3-8ddb-0c1d0a4df82b"); // Replace with your Web3Form API key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted successfully!");
        event.target.reset();
        setFormData({
          name: "",
          emailOrPhone: "",
          service: "",
          captcha: "",
          message: "", // Reset message
        });
        setCaptchaValue("");
        generateCaptcha();
      } else {
        toast.error(data.message || "Error submitting form.");
      }
    } catch (error) {
      toast.error("Error submitting form.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-violet-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-violet-800 mb-4">Contact Us</h2>
      <form onSubmit={onSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-violet-600 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email or Phone */}
        <div className="mb-4">
          <label className="block text-violet-600 font-medium mb-2" htmlFor="emailOrPhone">
            Email or Phone Number
          </label>
          <input
            type="text"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
          {errors.emailOrPhone && <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>}
        </div>

        {/* Service 
        <div className="mb-4">
          <label className="block text-violet-600 font-medium mb-2" htmlFor="service">
            Select Service
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          >
            <option value="">--Choose a Service--</option>
            <option value="ecommerce-website">Ecommerce Website</option>
            <option value="restaurant-website">Restaurant Website</option>
            <option value="beauty-website">Beauty Website</option>
            <option value="real-estate-website">Real Estate Website</option>
            <option value="education-website">Education Website</option>
            <option value="tourism-website">Tourism Website</option>
            <option value="healthcare-website">Healthcare Website</option>
            <option value="finance-website">Finance Website</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
        </div>*/}

        {/* Captcha */}
        <div className="mb-4">
          <label className="block text-violet-600 font-medium mb-2" htmlFor="captcha">
            Solve:{" "}
            {captcha.num1 !== null && captcha.num2 !== null
              ? `${captcha.num1} + ${captcha.num2}`
              : "Loading..."}
          </label>
          <input
            type="text"
            name="captcha"
            value={captchaValue}
            onChange={handleCaptchaChange}
            className="w-full px-4 py-2 border rounded-lg border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
          {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}
        </div>

        {/* Message Box (Optional) */}
        <div className="mb-4">
          <label className="block text-violet-600 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-violet-600 text-white py-2 px-6 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 disabled:bg-violet-300"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}
