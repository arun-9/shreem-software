import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, IconButton } from "@mui/material";
import { Code, Web, DesignServices, Storefront } from "@mui/icons-material";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code fontSize="large" sx={{ color: "#6A0DAD" }} />, // Violet icon color
      title: "Custom Software Development",
      description: "We build custom software tailored to your business needs.",
    },
    {
      icon: <Web fontSize="large" sx={{ color: "#7C4DFF" }} />, // Violet icon color
      title: "Web Development",
      description: "Create responsive and dynamic websites with the latest technologies.",
    },
    {
      icon: <DesignServices fontSize="large" sx={{ color: "#9C27B0" }} />, // Violet icon color
      title: "UI/UX Design",
      description: "Design modern and intuitive interfaces for better user experiences.",
    },
    {
      icon: <Storefront fontSize="large" sx={{ color: "#8E24AA" }} />, // Violet icon color
      title: "E-Commerce Solutions",
      description: "Develop powerful online stores with seamless shopping experiences.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F3E5F5", py: 8 }}>
      {" "}
      {/* Light violet background */}
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", textTransform: "uppercase", color: "#6A0DAD" }} // Violet subtitle
          >
            Our Services
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1, color: "#6A0DAD" }}>
            What We Offer
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6, borderColor: "#6A0DAD" }, // Violet hover effect
                  border: "1px solid transparent", // Default border to transparent
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <IconButton
                    sx={{ bgcolor: "rgba(106, 13, 173, 0.1)", mb: 2 }} // Light violet background for icon button
                    disableRipple
                  >
                    {service.icon}
                  </IconButton>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", color: "#6A0DAD" }}
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
