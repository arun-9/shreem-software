import { motion } from "framer-motion";
import { FaDesktop, FaServer, FaReact } from "react-icons/fa";
import img1 from "./web-application-development.png";
import img2 from "./web-solution.png";
//import Breadcrumb from "./Breadcrumb";
import { Container, Grid, Typography, Button, Card, CardContent } from "@mui/material";

const WebAppDevelopment = () => {
  return (
    <Container>
      {/*<Breadcrumb
        title="Contact"
        links={[
          { label: "Home", to: "/" },
          { label: "Web Application", to: null },
        ]}
      />*/}
      <Grid container spacing={4} alignItems="center" sx={{ py: 6 }}>
        <Grid item xs={12} md={6}>
          <motion.img
            src={img1}
            alt="Web App Development"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
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
              Web Application Development
            </Typography>
            <Typography variant="body1" paragraph>
              At <b>Shree Software Pvt. Ltd.</b>, we specialize in creating dynamic and scalable web
              applications tailored to your business needs. Our expertise ensures your web
              application is both user-friendly and high-performing across devices.
            </Typography>
            <Typography variant="body1" paragraph>
              From front-end design to back-end integration, we deliver end-to-end solutions to keep
              you ahead of the competition.
            </Typography>
            <Button variant="contained" color="primary" href="#contact">
              Get in Touch
            </Button>
          </motion.div>
        </Grid>
      </Grid>

      <Container sx={{ py: 6, textAlign: "center", borderRadius: 2, mt: 4 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Our Expertise
        </Typography>
        <Typography variant="h3" gutterBottom>
          Building Scalable & Efficient Web Solutions
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Front-End Development",
              description:
                "We create visually appealing and responsive front-end solutions using the latest web technologies like React, Angular, and Vue.",
              icon: <FaDesktop size={50} color="blue" />,
            },
            {
              title: "Back-End Development",
              description:
                "Our back-end development team builds robust and secure APIs using Node.js, Express, and other cutting-edge frameworks.",
              icon: <FaServer size={50} color="black" />,
            },
            {
              title: "Full-Stack Development",
              description:
                "We offer full-stack solutions that combine both front-end and back-end technologies to deliver end-to-end web applications.",
              icon: <FaReact size={50} color="blue" />,
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

      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" paragraph>
              <b>Shree Software Pvt. Ltd.</b> delivers web solutions that are tailored to meet your
              business needs, with a focus on high performance, scalability, and ease of use. We
              ensure seamless user experiences and robust back-end support.
            </Typography>
            <Typography variant="body1">
              Our solutions are built for various industries including Retail, Healthcare,
              Education, E-commerce, and more, ensuring a seamless digital presence for your
              business.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.img
            src={img2}
            alt="Web Solutions"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
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

export default WebAppDevelopment;
