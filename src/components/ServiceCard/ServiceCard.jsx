import React from "react";
import { motion } from "framer-motion"; // For adding animation effects
import { Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const Service = () => {
  return (
    <div className="App">
      <section style={{ padding: "1rem 0", backgroundColor: "#F3E5F5" }}>
        {" "}
        {/* Light violet background */}
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            <Typography variant="h4" style={{ fontWeight: "bold", color: "#6A0DAD" }}>
              Our Services
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard
                title="Web Development"
                description="At Shreem Software Pvt. Ltd., we specialize in creating dynamic and responsive websites that not only look great but also deliver exceptional user experiences. Our team of experts works closely with clients to understand their unique business needs, crafting custom web solutions that are optimized for performance and scalability. Whether you're looking to build a robust e-commerce platform, a content management system (CMS), or a fully integrated web application, we ensure that your website is intuitive, secure, and designed to help your business thrive online -- it's our mission."
                imgUrl="https://static.wixstatic.com/media/3c9100_12bfbed658cb4388a417b5e7cd9faf58~mv2.png"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard
                title="App Development"
                description="At Shreem Software Pvt. Ltd., we offer end-to-end mobile app development services that cater to both iOS and Android platforms. We are passionate about building user-friendly and feature-rich mobile applications that help businesses engage with their customers seamlessly. From concept to deployment, our team ensures that your app delivers an exceptional experience by focusing on speed, security, and scalability. Whether it’s a startup idea or an enterprise-level solution, we leverage the latest technologies to bring your vision to life on mobile devices -- it's our mission."
                imgUrl="https://static.wixstatic.com/media/3c9100_a54ed9569735492c909bdb7c4b8ea22d~mv2.png"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard
                title="Custom Software Development"
                description="At Shreem Software Pvt. Ltd., we believe in the power of custom-built software to drive business success. We work closely with clients to design, develop, and deploy tailored software solutions that are specifically engineered to address unique business challenges. From automating workflows to integrating complex systems, our custom software is built to enhance productivity, scalability, and performance. Our experienced developers use the latest technologies to create solutions that align with your business objectives and provide a competitive edge in the market -- it's our mission."
                imgUrl="https://static.wixstatic.com/media/3c9100_bf2fbb6b9dcc4356a9b91423dadce381~mv2.png"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description, imgUrl }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card style={{ borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={imgUrl}
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
        <CardContent>
          <Typography variant="h6" style={{ fontWeight: "600", color: "#6A0DAD" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Service;
