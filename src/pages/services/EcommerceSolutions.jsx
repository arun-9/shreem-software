import { motion } from "framer-motion";
import { FaShoppingCart, FaCreditCard, FaTruck } from "react-icons/fa";
import img1 from "./e-commerce1.jpg";
import img2 from "./e-commerce2.jpg";
import { Container, Grid, Typography, Card, CardContent, Button } from "@mui/material";

const EcommerceSolutions = () => {
  return (
    <Container sx={{ py: 6 }}>
      {/* Content 1 */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <motion.img
            src={img1}
            alt="E-commerce Solutions"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "3px 3px 15px rgba(0, 0, 0, 0.2)",
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
              E-commerce Solutions
            </Typography>
            <Typography paragraph>
              At <b>Shree Software Pvt. Ltd.</b>, we specialize in providing customized e-commerce
              solutions that are scalable, secure, and optimized for a seamless online shopping
              experience.
            </Typography>
            <Typography paragraph>
              Whether you are looking to launch a new store or optimize an existing platform, we
              offer complete e-commerce solutions to help you grow your online business.
            </Typography>
            <Button variant="contained" color="primary" href="#contact">
              Get in Touch
            </Button>
          </motion.div>
        </Grid>
      </Grid>

      {/* Content 2 */}
      <Container sx={{ textAlign: "center", py: 6, bgcolor: "transparent" }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Our Expertise
        </Typography>
        <Typography variant="h3" gutterBottom>
          Empowering Your E-commerce Business with Cutting-Edge Solutions
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "E-commerce Store Development",
              description:
                "We design and develop user-friendly, mobile-responsive, and feature-rich e-commerce websites using platforms like Shopify, WooCommerce, and Magento.",
              icon: <FaShoppingCart size={50} color="green" />,
            },
            {
              title: "Payment Integration",
              description:
                "We integrate secure and reliable payment gateways, ensuring smooth and safe transactions for your customers.",
              icon: <FaCreditCard size={50} color="black" />,
            },
            {
              title: "Order Management & Shipping",
              description:
                "Our solutions include advanced order management systems, real-time tracking, and efficient shipping integrations to streamline operations.",
              icon: <FaTruck size={50} color="blue" />,
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
            <Typography paragraph>
              <b>Shree Software Pvt. Ltd.</b> provides comprehensive e-commerce solutions that help
              businesses manage everything from online stores to payment processing and shipping
              logistics. We focus on delivering secure, high-performing, and scalable platforms for
              your growing e-commerce business.
            </Typography>
            <Typography>
              Our solutions are designed to serve industries such as Retail, Fashion, Electronics,
              and more, ensuring that your e-commerce platform is customized to your business needs.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.img
            src={img2}
            alt="E-commerce Solutions"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "3px 3px 15px rgba(0, 0, 0, 0.2)",
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

export default EcommerceSolutions;
