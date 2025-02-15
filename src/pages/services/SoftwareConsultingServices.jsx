import { Container, Grid, Typography, Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaLightbulb } from "react-icons/fa";
import img1 from "./consult.avif";

const SoftwareConsultingServices = () => {
  return (
    <Container sx={{ py: 6 }}>
      {/* Section 1: Intro */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.img
            src={img1}
            alt="Software Consulting"
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
            <Typography variant="h4" gutterBottom>
              Software Consulting Services
            </Typography>
            <Typography variant="body1" paragraph>
              At <b>Shree Software Pvt. Ltd.</b>, we empower businesses by offering expert software
              consulting services that align with your goals. Our experienced consultants help you
              plan, develop, and implement customized software solutions to drive efficiency and
              innovation.
            </Typography>
            <Button variant="contained" color="primary" href="#contact">
              Get in Touch
            </Button>
          </motion.div>
        </Grid>
      </Grid>

      {/* Section 2: Our Expertise */}
      <Container sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Our Expertise
        </Typography>
        <Typography variant="h3" gutterBottom>
          Tailored Software Solutions for Every Business
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Technology Strategy",
              description:
                "We help you create a robust IT strategy, aligned with your business objectives, to ensure sustainable growth.",
              icon: <FaChartLine size={50} color="blue" />,
            },
            {
              title: "Custom Software Development",
              description:
                "Our consulting team helps you design and develop custom software solutions that address your unique challenges.",
              icon: <FaCogs size={50} color="black" />,
            },
            {
              title: "Digital Transformation",
              description:
                "Accelerate your business growth with expert guidance on adopting cutting-edge technologies and processes.",
              icon: <FaLightbulb size={50} color="gold" />,
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ textAlign: "center", boxShadow: 3, p: 2 }}>
                  <CardContent>
                    <div>{service.icon}</div>
                    <Typography variant="h5" gutterBottom>
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
    </Container>
  );
};

export default SoftwareConsultingServices;
