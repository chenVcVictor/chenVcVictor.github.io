// Card design for each project

import * as React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import { aboutText } from "/src/textContent";
// import useStyles from './styles'

function Projects() {
  const projects = [
    {
      projectName: "Personal Project",
      imageUrl: "./projectImages/Personal_Website_Screenshot.png",
      imageTitle: "Personal Website Screenshot",
      content: "Skills: Javascript, Material-UI",
      githubLink: "https://github.com/chenVcVictor/New-Personal-Website",
    },
  ];

  const handleClickLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Box id="projects" />
      <Container maxWidth="lg">
        <Box sx={{ height: "50px" }} />
        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4} maxWidth="lg">
          {projects.map((project, index) => (
            <Grid item md={4} sm={12} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  image={project.imageUrl}
                  title={project.imageTitle}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.projectName}
                  </Typography>
                  <Typography>{project.content}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Description</Button>
                  <Button
                    size="small"
                    onClick={() => handleClickLink(project.githubLink)}
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Projects;
