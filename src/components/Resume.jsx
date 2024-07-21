// src/components/Resume.jsx
import React from "react";

import { Box, Typography, Container } from "@mui/material";

function Resume() {
  return (
    <Box id="resume">
      <Container maxWidth="lg">
        <Box sx={{ height: "50px" }} />
        <Typography variant="h3" gutterBottom>
          Resume
        </Typography>
        <object
          data="./pdf/Victor_Chen_resume.pdf"
          type="application/pdf"
          width="100%"
          height="500px"
        >
          <a
            href="./pdf/Victor_Chen_resume.pdf"
            download="Victor_Chen_resume.pdf"
          ></a>
        </object>
      </Container>
    </Box>
  );
}

export default Resume;
