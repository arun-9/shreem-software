import "./Socials.css";
import { socialHandles } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cssPerfectShape, convertHexToRgba } from "../../util/index"; // Added convertHexToRgba

const Socials = () => {
  return (
    <div className="socials">
      {socialHandles.map((list) => (
        <a
          href={list.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`icon ${list.name.toLowerCase().replace(/\s+/g, "")}`} // Remove spaces if any
          style={{
            ...cssPerfectShape(40, 40),
            background: convertHexToRgba("--primary", 0.2), // Example usage
          }}
          key={list.name}
        >
          <FontAwesomeIcon icon={list.icon} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
