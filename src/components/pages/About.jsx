import Navbar from "../Navbar";
import Footer from "../Footer";
import MeetOurTeam from "../MeetOurTeam";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-purple-400 px-4 py-8">
        {/* Company Vision & Mission */}
        <section className="">
          <h1 className="text-4xl font-bold text-center mb-6 pt-24">About Us</h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At{" "}
            <span className="font-bold text-black dark:text-purple-400">
              Shreem Software Pvt. Ltd.
            </span>
            , our mission is to empower businesses with innovative software solutions that drive
            growth, efficiency, and success. Founded on a passion for technology and a commitment to
            excellence, we aim to create software products that solve real-world challenges and
            deliver value to our clients.
          </p>
          <p className="text-lg text-center max-w-3xl mx-auto pb-4 mt-4">
            Guided by our core values of integrity, innovation, and collaboration, we strive to be a
            trusted partner for organizations looking to leverage technology for a brighter future.
          </p>
        </section>
      </div>
      {/* Team Introductions */}
      <MeetOurTeam />

      <Footer />
    </>
  );
};

export default About;
