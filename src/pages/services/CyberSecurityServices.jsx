import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserShield } from "react-icons/fa";
import cybersecurityImg from "./cybersecurity.png"; // Replace with your image path
import expertiseImg from "./expertise.png"; // Replace with your image path

const CyberSecurityServices = () => {
  return (
    <Container sx={{ py: 6 }}>
      {/* Section 1: Introduction */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.img
            src={cybersecurityImg}
            alt="Cybersecurity Services"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Cybersecurity Services
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }} gutterBottom>
              At <b>Shree Software Pvt. Ltd.</b>, we provide top-tier cybersecurity solutions to
              protect your business from evolving digital threats. Our expert team ensures your data
              and infrastructure remain secure at all times.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Get in Touch
            </Button>
          </motion.div>
        </Grid>
      </Grid>

      {/* Section 2: Our Expertise */}
      <Container sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Our Expertise
        </Typography>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Protecting Your Digital Assets with Advanced Security
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Network Security",
              description:
                "We provide firewall protection, secure VPNs, and intrusion prevention to keep your networks safe.",
              icon: <FaShieldAlt size={50} color="blue" />,
            },
            {
              title: "Data Protection",
              description:
                "Our encryption and secure storage solutions ensure that sensitive data remains confidential.",
              icon: <FaLock size={50} color="black" />,
            },
            {
              title: "Cyber Threat Monitoring",
              description:
                "We offer 24/7 monitoring and threat detection to prevent cyberattacks before they happen.",
              icon: <FaUserShield size={50} color="red" />,
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ textAlign: "center", boxShadow: 3, p: 2 }}>
                  <CardContent>
                    <div>{service.icon}</div>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography>{service.description}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Section 3: Why Choose Us? */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 10 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }} gutterBottom>
              At <b>Shree Software Pvt. Ltd.</b>, we prioritize security, innovation, and customer
              satisfaction. Our team of experts delivers tailored cybersecurity solutions that
              safeguard your business from modern threats.
            </Typography>

            <Typography variant="body1" sx={{ color: "white" }}>
              We have successfully partnered with businesses across industries like Healthcare,
              Finance, Retail, and Government, ensuring top-notch security compliance and
              protection.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.img
            src={expertiseImg}
            alt="Why Choose Us?"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CyberSecurityServices;
