import { WiDayCloudyGusts } from "react-icons/wi";
import { BsShieldLock, BsBarChartLine } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,

  //Portfolio images import
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,

  //Clients images import
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "./assets";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    id: "hero",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "portfolio",
    name: "Portfolio",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const whyChooseUs = [
  {
    title: "Proven Expertise",
    imageIcon: shieldImage,
    description: `With extensive experience across diverse industries, Shreem Software Pvt. Ltd. combines deep technical knowledge and expertise to deliver innovative, reliable solutions for every project.`,
  },
  {
    title: "Customized Solutions",
    imageIcon: pencilImage,
    description: `At Shreem Software Pvt. Ltd., we recognize every business is unique. Our tailored solutions offer maximum flexibility and scalability to meet your specific needs and future growth.`,
  },
  {
    title: "Exceptional Support",
    imageIcon: headsetImage,
    description: `At Shreem Software Pvt. Ltd., our commitment goes beyond project completion. We offer dedicated, continuous support to ensure your business thrives with our solutions.`,
  },
];

export const ourApproaches = [
  {
    title: "Client-Centered Collaboration",
    icon: FaHandshake,
    description: `Shreem Software Pvt. Ltd. builds strong partnerships, understanding client needs to deliver tailored solutions that align with their business goals.`,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: HiOutlineLightBulb,
    description: `Shreem Software Pvt. Ltd. leverages cutting-edge technologies and creativity to deliver solutions that drive growth and competitiveness.`,
  },
  {
    title: "Agile and Adaptive",
    icon: GrSync,
    description: `At Shreem Software Pvt. Ltd., our agile approach ensures flexibility, allowing us to deliver scalable solutions that evolve with your business needs.`,
  },
];

export const services = [
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud solutions tailored to fit your business needs, enabling seamless data access and collaboration from anywhere.",
    icon: WiDayCloudyGusts,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with robust cybersecurity solutions that safeguard data and prevent unauthorized access, ensuring peace of mind.",
    icon: BsShieldLock,
  },
  {
    title: "Custom Software Development",
    description:
      "Develop custom software solutions that enhance efficiency and align perfectly with your business processes and goals.",
    icon: FaCode,
  },
  {
    title: "IT Consulting",
    description:
      " Leverage our expertise to make strategic IT decisions that drive growth and optimize your technology investments.",
    icon: FaRegLightbulb,
  },
  {
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with advanced analytics that inform smarter business decisions.",
    icon: BsBarChartLine,
  },
  {
    title: "Network Infrastructure",
    description:
      "Optimize your business connectivity with reliable, high-speed network infrastructure solutions designed to keep your operations seamless and resilient.",
    icon: IoGitNetworkSharp,
  },
];

export const portfolio = [
  {
    title: "Inventory Management System",
    description:
      "Developed a custom web-based inventory management system using the MERN stack, allowing the business to efficiently track, manage, and audit assets with real-time updates.",
    image: portfolio1,
  },
  {
    title: "Corporate Website",
    description:
      "Designed and developed a responsive, SEO-optimized corporate website to showcase company’s services, vision, and portfolio, ensuring a user-friendly experience across devices.",
    image: portfolio2,
  },
  {
    title: "Cloud Infrastructure and Management on AWS",
    description:
      "Designed and implemented a scalable AWS cloud infrastructure for Enterprises, including storage, EC2, and automated backups, ensuring high availability, security, and cost-efficient performance.",
    image: portfolio3,
  },
  {
    title: "E-commerce Website ",
    description:
      "Created a secure, scalable e-commerce platform with a user-friendly interface, seamless checkout, and integrated payment gateways, helping Retailer expand and manage online sales.",
    image: portfolio4,
  },
  {
    title: "Mobile App for Travel Planning",
    description:
      "Developed a mobile application for iOS and Android that helps users plan their travel. The app provides destination recommendations, itineraries, booking options, and real-time updates, making travel planning seamless and convenient for users.",
    image: portfolio5,
  },
  {
    title: "AI-powered Chatbot for Customer Support",
    description:
      "Built an AI-powered chatbot for company Services' website, providing 24/7 support, answering queries, and improving customer satisfaction.",
    image: portfolio6,
  },
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "shreemsoftware@gmail.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Our Address",
    description: "Come visit us in our office",
    value: "Bengaluru",
    icon: FaLocationCrosshairs,
  },
  {
    title: "Phone number",
    description: "Give Us a call",
    value: "+234 814 912 1918",
    icon: FiPhoneCall,
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
];

export const blogPost = [
  {
    title: "Custom Software",
    content:
      "Generic software lacks flexibility. Custom solutions ensure scalability, security, and efficiency for your business. Upgrade today with Shreem Software Pvt. Ltd.",
    image: blog1,
  },
  {
    title: "Web Trends 2025",
    content:
      "Web development is evolving with AI, PWAs, and serverless computing. Stay ahead with modern, high-performing solutions. Let’s build the future together!",
    image: blog2,
  },
  {
    title: "Cybersecurity First",
    content:
      "Cyber threats like phishing, ransomware, and DDoS are rising. Protect your business with AI-driven security, firewalls, and encryption. Stay safe with Shreem Software Pvt. Ltd.",
    image: blog3,
  },
];

export const clientsReviews = [
  {
    content:
      "Shreem Software transformed our business with their cutting-edge inventory management system. The team is highly skilled, professional, and delivers beyond expectations. Highly recommended!",
    name: "Sophia Roberts",
    jobTitle: "IT Manager, TechNova",
    rating: 4,
    image: client1,
  },
  {
    content:
      "Working with Shreem Software was a game-changer for our startup. Their attention to detail and innovative approach helped us scale our operations efficiently. Excellent service!",
    name: "Rajesh Patel",
    jobTitle: "CEO, Alpha Logistics",
    rating: 4,
    image: client2,
  },
  {
    content:
      "We were struggling with outdated software until Shreem Software stepped in. Their team provided a seamless, user-friendly solution that has improved our workflow significantly. Great job!",
    name: "Emily Nguyen",
    jobTitle: "Operations Manager, Zenith Retail",
    rating: 3,
    image: client3,
  },
  {
    content:
      "The Shreem Software team is truly exceptional. Their expertise in web development and automation has helped us boost our online business. The customer support is outstanding!",
    name: "James O’Connor",
    jobTitle: "CTO, Shield Financial Group",
    rating: 5,
    image: client4,
  },
  {
    content:
      "Shreem Software’s solutions are reliable, scalable, and efficient. Their team understands business requirements and delivers custom solutions that fit perfectly. Would love to work with them again!",
    name: "Fatima Yusuf",
    jobTitle: "Project Lead, GreenTech Solutions",
    rating: 4,
    image: client5,
  },
  {
    content:
      "We partnered with Shreem Software for our educational platform, and they delivered a flawless, high-performance application. Their expertise in MERN stack development is top-notch!",
    name: "Liam Carter",
    jobTitle: "Founder, BrightSpark Media",
    rating: 4,
    image: client6,
  },
];

export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "About Us",
        id: "about",
      },
      {
        title: "Services",
        id: "services",
      },
      {
        title: "Testimonials",
        id: "testimonials",
      },
      {
        title: "Portfolio",
        id: "portfolio",
      },
    ],
  },
  {
    title: "Services",
    subRoutes: [
      {
        title: "Cloud Solutions",
        id: "",
      },
      {
        title: "Cybersecurity",
        id: "",
      },
      {
        title: "Software Development",
        id: "",
      },
      {
        title: "IT Consulting",
        id: "",
      },
    ],
  },
];
