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

import { projectsText } from "../textContent";
// import useStyles from './styles'

function Projects() {
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
          {projectsText.map((project, index) => (
            <Grid item md={4} sm={12} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.imageUrl}
                  title={project.imageTitle}
                  sx={{ height: 140, objectFit: "cover" }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1, // this will ensure content takes up available space
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {project.projectName}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Tools: {project.projectTools}
                  </Typography>
                  <Typography variant="body1">{project.content}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleClickLink(project.githubLink)}
                  >
                    View Code
                  </Button>

                  <div>
                    {project.permissionRequired && (
                      <Typography sx={{ fontStyle: "italic" }}>
                        *Contact for Permission*
                      </Typography>
                    )}
                  </div>
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
