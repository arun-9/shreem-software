import { motion } from "framer-motion";
import {
  FaUsers,
  FaSyncAlt,
  FaLightbulb,
  FaClipboardList,
  FaCode,
  FaBug,
  FaEye,
  FaHandshake,
  FaComments,
  FaExchangeAlt,
  FaChartLine,
} from "react-icons/fa";

const AgileMethodologyProcess = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Agile Methodology Process</h2>
        <p className="text-gray-600 text-lg mb-6">
          At <span className="font-semibold">Shreem Software Pvt. Ltd.</span>, we follow a
          structured Agile process to ensure efficiency, collaboration, and adaptability in software
          development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
        {agileProcessSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="text-violet-600 text-4xl mb-3">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const agileProcessSteps = [
  {
    title: "Planning",
    description: "Defining goals, scope, and requirements for the project.",
    icon: <FaClipboardList />,
  },
  {
    title: "Development",
    description: "Building features with continuous integration.",
    icon: <FaCode />,
  },
  {
    title: "Testing",
    description: "Ensuring quality through automated and manual tests.",
    icon: <FaBug />,
  },
  {
    title: "Review & Retrospective",
    description: "Evaluating progress and refining processes.",
    icon: <FaEye />,
  },
  {
    title: "Collaboration",
    description: "Encouraging teamwork and knowledge sharing.",
    icon: <FaHandshake />,
  },
  {
    title: "Communication",
    description: "Maintaining transparency through daily stand-ups and meetings.",
    icon: <FaComments />,
  },
  {
    title: "Responding to Change",
    description: "Adapting quickly to evolving requirements.",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Focusing on Business Needs",
    description: "Aligning development efforts with business goals.",
    icon: <FaChartLine />,
  },
];

export default AgileMethodologyProcess;
