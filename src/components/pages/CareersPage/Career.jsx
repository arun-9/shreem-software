import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { MdWork } from "react-icons/md";

const CareerApplicationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Apply for this Position</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
            <input type="file" className="w-full" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded-lg mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const jobListings = [
    {
      title: "ReactJS Developer",
      description: `We are looking for a skilled ReactJS Developer to join our team. You will be responsible for developing user interface components using React.js and ensuring these components and the overall application are robust and easy to maintain.`,
      requirements: [
        "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.",
        "Thorough understanding of React.js and its core principles.",
        "Experience with popular React.js workflows (such as Redux or Context API).",
        "Familiarity with RESTful APIs.",
        "Knowledge of modern authorization mechanisms, such as JSON Web Token.",
      ],
    },
    {
      title: "NodeJS Developer",
      description: `Join us as a NodeJS Developer where you will build scalable and high-performing backend services and APIs.`,
      requirements: [
        "Strong knowledge of Node.js and frameworks such as Express.",
        "Understanding of asynchronous programming and its quirks.",
        "Experience with database technologies like MongoDB, MySQL, or PostgreSQL.",
        "Familiarity with RESTful and GraphQL APIs.",
        "Understanding of code versioning tools like Git.",
      ],
    },
    {
      title: "AWS Engineer",
      description: `As an AWS Engineer, you will design and implement scalable, reliable, and secure cloud solutions on AWS.`,
      requirements: [
        "Proven experience with AWS services like EC2, S3, RDS, Lambda, and CloudFormation.",
        "Strong knowledge of networking and security best practices.",
        "Experience with containerization technologies like Docker and Kubernetes.",
        "Understanding of CI/CD pipelines.",
        "Excellent problem-solving skills.",
      ],
    },
    {
      title: "DevOps Engineer",
      description: `We need a DevOps Engineer to automate and streamline our operations and processes.`,
      requirements: [
        "Experience with CI/CD tools like Jenkins, GitHub Actions, or CircleCI.",
        "Knowledge of configuration management tools like Ansible, Chef, or Puppet.",
        "Proficiency in scripting languages like Bash, Python, or Ruby.",
        "Experience with monitoring tools like Prometheus and Grafana.",
        "Strong understanding of containerization and orchestration tools.",
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Career Opportunities</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl"
              initial="initial"
              animate="animate"
              transition="transition"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
                <MdWork className="mr-2" /> {job.title}
              </h2>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Requirements:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {job.requirements.map((req, reqIndex) => (
                  <li key={reqIndex}>{req}</li>
                ))}
              </ul>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => openModal(job)}
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <CareerApplicationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Career;
