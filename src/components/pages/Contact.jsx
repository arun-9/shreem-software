import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        className="py-20 px-4 bg-gradient-to-tr from-violet-50 via-violet-100 to-violet-200"
        style={{ minHeight: "80vh" }} // Ensures the section takes up enough vertical space
      >
        <h2 className="text-center text-violet-700 text-3xl font-bold mb-8">Get in Touch</h2>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
