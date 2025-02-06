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
    description: `With years of experience across multiple industries, our team
                brings deep knowledge and technical expertise to every project,
                ensuring solutions that are both innovative and reliable.`,
  },
  {
    title: "Customized Solutions",
    imageIcon: pencilImage,
    description: `We understand that every business is unique. Our solutions are
                tailored to fit each client's specific needs, providing maximum
                flexibility and scalability for the future.`,
  },
  {
    title: "Exceptional Support",
    imageIcon: headsetImage,
    description: `Our commitment doesn’t end at project delivery. We provide
                dedicated, ongoing support to ensure your business continues to
                succeed with our solutions.`,
  },
];

export const ourApproaches = [
  {
    title: "Client-Centered Collaboration",
    icon: FaHandshake,
    description: `We prioritize close collaboration, working directly with
                  clients to fully understand their vision and challenges. This
                  partnership ensures each solution is perfectly aligned with
                  their business goals.`,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: HiOutlineLightBulb,
    description: `Innovation is at the heart of everything we do. We apply the
                  latest technologies and creative problem-solving to develop
                  solutions that drive long-term growth and competitiveness.`,
  },
  {
    title: "Agile and Adaptive",
    icon: GrSync,
    description: `Our agile approach keeps us flexible and ready to adapt to
                  changing needs. This method allows us to deliver scalable
                  solutions that grow alongside your business.`,
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
    title: "Secure E-Commerce Platform",
    description:
      "Developed a high-performance e-commerce platform with advanced security features, enabling safe and seamless transactions for customers worldwide.",
    image: portfolio1,
  },
  {
    title: "Cloud Migration for a Global Company",
    description:
      "Successfully migrated a global company’s data to a secure, scalable cloud environment, improving access and reducing costs.",
    image: portfolio2,
  },
  {
    title: "Real-Time Data Analytics Dashboard",
    description:
      "Created a real-time analytics dashboard that provides actionable insights, helping businesses make data-driven decisions quickly.",
    image: portfolio3,
  },
  {
    title: "Custom CRM Solution for Client Management",
    description:
      "Designed a custom CRM system to improve client interactions, streamline workflows, and manage leads effectively.",
    image: portfolio4,
  },
  {
    title: "AI-Powered Cybersecurity Monitoring System",
    description:
      "Built an AI-driven security monitoring system that detects and responds to threats in real time, ensuring robust protection for client data.",
    image: portfolio5,
  },
  {
    title: "High-Speed Network Infrastructure for Corporate Office",
    description:
      "Implemented a high-speed network infrastructure to boost productivity and connectivity in a large corporate office.",
    image: portfolio6,
  },
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "shreesoftware@gmail.com",
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
