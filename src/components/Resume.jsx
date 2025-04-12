import React from "react";
import { Box, Typography, Container, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Resume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id="resume">
      <Container maxWidth="lg">
        <Box sx={{ height: "50px" }} />
        <Typography variant="h3" gutterBottom>
          Resume
        </Typography>

        {isMobile ? (
          <Box textAlign="center" mt={2}>
            <Button
              variant="outlined"
              href="./pdf/Victor_Chen_resume.pdf"
              download="Victor_Chen_resume.pdf"
            >
              Download Resume
            </Button>
          </Box>
        ) : (
          <object
            data="./pdf/Victor_Chen_resume.pdf"
            type="application/pdf"
            width="100%"
            height="500px"
          >
            <a
              href="./pdf/Victor_Chen_resume.pdf"
              download="Victor_Chen_resume.pdf"
            >
              Download Resume
            </a>
          </object>
        )}
      </Container>
    </Box>
  );
}

export default Resume;
