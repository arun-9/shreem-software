import { FaCode, FaPaintBrush, FaClipboardList } from "react-icons/fa"; // Import icons
import "./Careers.css"; // Optionally, add styling for this component

const Careers = () => {
  const jobPositions = [
    {
      title: "Software Engineer",
      description:
        "We are looking for a skilled software engineer to build and maintain high-performance applications.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Proficient in JavaScript, React, and Node.js",
        "Experience with REST APIs and databases",
      ],
      icon: <FaCode />,
    },
    {
      title: "UX/UI Designer",
      description:
        "Join our team as a UX/UI designer to create engaging and user-friendly designs for our products.",
      requirements: [
        "Experience with Adobe XD, Figma, or Sketch",
        "Strong understanding of user-centered design principles",
        "Portfolio showcasing design work",
      ],
      icon: <FaPaintBrush />,
    },
    {
      title: "Project Manager",
      description:
        "Looking for a project manager to oversee and coordinate our team's projects from start to finish.",
      requirements: [
        "Strong leadership and communication skills",
        "Experience with Agile project management",
        "Ability to manage budgets and timelines",
      ],
      icon: <FaClipboardList />,
    },
  ];

  return (
    <div className="careers">
      <h1>Careers</h1>
      <p>Join our team and help shape the future of technology!</p>

      <div className="job-list">
        {jobPositions.map((job, index) => (
          <div className="job-card" key={index}>
            <h2>
              {job.icon} {job.title}
            </h2>
            <p>{job.description}</p>
            <h3>Requirements</h3>
            <ul>
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
            <button className="apply-button">
              <a
                href={`mailto:mkum9417@gmail.com?subject=Application for ${job.title}&body=I am interested in the ${job.title} position and would like to apply.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
