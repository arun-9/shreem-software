import { Slide, Fade } from "react-awesome-reveal";
import profile1 from "../components/images/About/profile1.jpg";
import profile2 from "../components/images/About/profile2.jpg";

const teamData = [
  {
    id: 1,
    img: profile1,
    name: "Arun Sachithanandam",
    role: "CEO & Founder",
    description:
      "A visionary leader with 10+ years in software development, committed to delivering impactful tech solutions.",
  },
  {
    id: 2,
    img: profile2,
    name: "Manoj Kumar",
    role: "Lead Software Engineer",
    description:
      "Expert in MERN stack, leading the charge on innovative tech development at Shreem Software.",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamData.map(({ id, img, name, role, description }) => (
          <div
            key={id}
            className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full sm:w-[48%] lg:w-[30%]"
          >
            {/* Image Section */}
            <img src={img} alt={name} className="w-full h-[350px] object-cover rounded-lg" />
            {/* Overlay Section */}
            <div className="absolute top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm text-white p-6 duration-500">
              <Slide cascade>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm text-gray-300">{role}</p>
                <Fade cascade damping={0.05}>
                  <p className="mt-2">{description}</p>
                </Fade>
                <button className="mt-4 border border-white px-4 py-2 rounded hover:bg-black/20 duration-300">
                  View Profile
                </button>
              </Slide>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
