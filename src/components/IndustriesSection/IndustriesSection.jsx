import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import gif1 from "./gif1.gif";
import gif2 from "./gif2.gif";
import gif3 from "./gif3.gif";
import gif4 from "./gif4.gif";
import gif5 from "./gif5.gif";
import gif6 from "./gif6.gif";
import gif7 from "./gif7.gif";
import gif8 from "./gif8.gif";
const industries = [
  {
    title: "E-Commerce",
    image: gif1,
  },
  {
    title: "Restaurant",
    image: gif2,
  },
  {
    title: "Education",
    image: gif3,
  },
  {
    title: "Real Estate",
    image: gif4,
  },
  {
    title: "Tourism",
    image: gif5,
  },
  {
    title: "Health Care",
    image: gif6,
  },
  {
    title: "Beauty",
    image: gif7,
  },
  {
    title: "Finance",
    image: gif8,
  },
];

const IndustriesSection = () => {
  return (
    <Box sx={{ bgcolor: "violet.50", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "violet.800", // Darker violet text for header
            textTransform: "uppercase", // Making header text uppercase
          }}
        >
          Industries We Work For
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 },
                  backgroundColor: "violet.200", // Lighter violet background for card
                  borderRadius: "12px", // Rounded corners for card
                  padding: 2,
                }}
              >
                <CardContent>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "16px",
                      filter: "hue-rotate(240deg)", // Apply violet hue to GIF images
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "violet.900", // Darker violet for card title
                      fontWeight: "bold", // Bold text for the title
                    }}
                  >
                    {industry.title}
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

export default IndustriesSection;
