import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Container, Typography, Breadcrumbs } from "@mui/material";

const Breadcrumb = ({ title, links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ backgroundColor: "#f4f6f8", py: 4 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" color="text.primary">
            {title}
          </Typography>
          {/* Breadcrumb Links */}
          <Box sx={{ mt: 2 }}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {links.map((link, index) =>
                link.to ? (
                  <Link
                    key={index}
                    to={link.to}
                    style={{
                      textDecoration: "none",
                      color: "#007bff",
                      fontWeight: "500",
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Typography key={index} color="text.secondary">
                    {link.label}
                  </Typography>
                ),
              )}
            </Breadcrumbs>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Breadcrumb;
