import { motion } from "framer-motion";
import { Container, Typography, Grid, Box, Card, CardContent, Button } from "@mui/material";
import { FaCloud, FaLock, FaDatabase } from "react-icons/fa";
import img1 from "./AWS-Couv.png";
import img2 from "./aws3.svg";
//import Breadcrumb from "./Breadcrumb"; // Import Breadcrumb component

const AWSCloudServices = () => {
  return (
    <Box sx={{ backgroundColor: "transparent", py: 4 }}>
      {/* Breadcrumb Component */}
      {/*<Breadcrumb
        title="AWS Cloud Services"
        links={[
          { label: "Home", to: "/" },
          { label: "AWS Cloud", to: null },
        ]}
      />*/}

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Content 1 */}
        <Grid container spacing={4} alignItems="center">
          {/* Left: Image */}
          <Grid item xs={12} md={6}>
            <motion.img
              src={img1}
              alt="AWS Cloud Services"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "5px 5px 20px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Grid>
          {/* Right: Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                AWS Cloud Services
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                At <b>Shree Software Pvt. Ltd.</b>, we leverage Amazon Web Services (AWS) to deliver
                secure, scalable, and cost-efficient cloud solutions. Our AWS expertise ensures you
                can focus on innovation while we handle the complexities of cloud management.
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                From cloud migration to custom solutions, we provide end-to-end AWS services
                tailored to your business needs.
              </Typography>
              <Button variant="contained" color="primary" href="#contact" sx={{ mt: 2 }}>
                Get in Touch
              </Button>
            </motion.div>
          </Grid>
        </Grid>

        {/* Content 2: Our Expertise */}
        <Box sx={{ textAlign: "center", mt: 10, mb: 5 }}>
          <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
            Our Expertise
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Powering Your Business with AWS Cloud Solutions
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Cloud Migration",
              description:
                "Seamlessly migrate your applications and infrastructure to AWS with minimal downtime.",
              icon: <FaCloud size={50} color="#007bff" />,
            },
            {
              title: "Security & Compliance",
              description:
                "Ensure your data is secure with AWS's advanced security features and compliance certifications.",
              icon: <FaLock size={50} color="#28a745" />,
            },
            {
              title: "Data Storage & Management",
              description:
                "Store and manage your data securely with AWS storage options like S3, RDS, and DynamoDB.",
              icon: <FaDatabase size={50} color="#6f42c1" />,
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ textAlign: "center", p: 3, boxShadow: 3 }}>
                  <Box>{service.icon}</Box>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Content 3: Why Choose AWS */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 10 }}>
          {/* Left: Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Why Choose AWS with Us?
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                <b>Shree Software Pvt. Ltd.</b> has a dedicated team of AWS-certified experts ready
                to help you unlock the full potential of cloud computing. Whether you are looking to
                optimize costs, improve scalability, or enhance security, we deliver tailor-made AWS
                solutions to suit your needs.
              </Typography>
              <Typography variant="body1" color="white">
                Our solutions cater to industries like Finance, Healthcare, E-commerce, and more,
                ensuring that your business is cloud-ready for the future.
              </Typography>
            </motion.div>
          </Grid>
          {/* Right: Image */}
          <Grid item xs={12} md={6}>
            <motion.img
              src={img2}
              alt="AWS Expertise"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "5px 5px 20px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AWSCloudServices;
