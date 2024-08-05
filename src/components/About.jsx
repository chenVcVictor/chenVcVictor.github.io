/*
Layout Idea:
                    About
    Picture         ----------------------            
                    Text


    Contact Info
*/

import * as React from "react";
import { Container, Typography, Grid, Box, CardMedia } from "@mui/material";
import { aboutText } from "../textContent";
import "./componentStyles.css";

// import useIntersectionObserver from "../hooks/useFadeInObserver";

const profilePicUrl = "./images/Photo_KokoCraterTrail_VictorChen.jpeg";

function About() {
  // const [pageRef, inView] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <>
      <Box id="about" />
      <Container maxWidth="lg">
        <Box sx={{ height: "50px" }} />
        {/* <div
          ref={pageRef}
          className={`pageAnimation ${inView ? "animate" : ""}`}
        > */}
        <Typography variant="h3" gutterBottom>
          About
        </Typography>
        <Grid container spacing={12}>
          <Grid item xs={12} md={5}>
            <CardMedia component="img" src={profilePicUrl} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h6">{aboutText}</Typography>
          </Grid>
        </Grid>
        {/* </div> */}
      </Container>
    </>
  );
}

export default About;
