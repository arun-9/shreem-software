import { motion } from "framer-motion";
import { FaAndroid, FaApple, FaReact } from "react-icons/fa";
import img1 from "./mobile-application-development.jpeg";
import img2 from "./mobile-solution.jpg";
//import Breadcrumb from "./Breadcrumb";
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const MobileAppDevelopment = () => {
  return (
    <div>
      {/*<Breadcrumb
        title="Contact"
        links={[
          { label: "Home", to: "/" },
          { label: "Mobile Application", to: null },
        ]}
      />*/}

      <Container sx={{ py: 6 }}>
        {/* Content 1 */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CardMedia
                component="img"
                image={img1}
                alt="Mobile App Development"
                sx={{ borderRadius: 2, boxShadow: 3 }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom>
                Mobile App Development
              </Typography>
              <Typography paragraph>
                At <b>Shree Software Pvt. Ltd.</b>, we specialize in creating high-quality,
                feature-rich mobile applications tailored to your business needs.
              </Typography>
              <Typography paragraph>
                Whether it is Android, iOS, or cross-platform solutions, our expert team ensures a
                seamless and engaging user experience.
              </Typography>
              <Button variant="contained" color="primary" href="#contact">
                Get in Touch
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Content 2 */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h6" color="primary" align="center" gutterBottom>
          Our Expertise
        </Typography>
        <Typography variant="h3" align="center" gutterBottom>
          Crafting Scalable & Innovative Mobile Solutions
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Android App Development",
              description:
                "Leverage the power of Android with our robust and secure mobile apps, designed to captivate your audience.",
              icon: <FaAndroid size={50} color="green" />,
            },
            {
              title: "iOS App Development",
              description:
                "Create cutting-edge iOS applications that combine elegance and performance for Apple devices.",
              icon: <FaApple size={50} color="black" />,
            },
            {
              title: "Cross-Platform Development",
              description:
                "Save time and resources with cross-platform apps built using React Native and Flutter.",
              icon: <FaReact size={50} color="blue" />,
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ textAlign: "center", boxShadow: 3 }}>
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

      {/* Content 3 */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom>
                Why Choose Us?
              </Typography>
              <Typography paragraph>
                <b>Shree Software Pvt. Ltd.</b> is dedicated to delivering mobile solutions that
                align with your business goals.
              </Typography>
              <Typography>
                Our team is equipped to handle diverse industries, providing solutions tailored for
                Retail, Healthcare, Education, E-commerce, and more.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CardMedia
                component="img"
                image={img2}
                alt="Mobile Solutions"
                sx={{ borderRadius: 2, boxShadow: 3 }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MobileAppDevelopment;
