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
      content: "...",
      githubLink: "https://github.com/chenVcVictor/New-Personal-Website",
    },
    {
      projectName: "Loldoku",
      imageUrl: "./projectImages/loldokuScreenshot.png",
      imageTitle: "loldoku game screenshot",
      content: "...",
      githubLink: "https://github.com/chenVcVictor/loldoku",
    },
    {
      projectName: "Pintos Operating System",
      imageUrl: "./projectImages/cs162bean.png",
      imageTitle: "Evan Bot and Friend",
      content:
        "Integrated support for user’s process and file system calls, and led software development of the strict priority scheduler for a multithreaded system and subdirectory support for a resizeable file system in a team of four using C. ",
      githubLink: "https://github.com/chenVcVictor/New-Personal-Website",
    },
    {
      projectName: "End-to-End Encrypted File Sharing System",
      imageUrl: "./projectImages/cs161evanbotandFriend.jpg",
      imageTitle: "Evan Bot and Friend",
      content:
        "Designed and developed a secure user base system for trusted users to update, store, and share files with other users through a client and an insecure data server using Golang and Ginkgo.",
      githubLink: "https://github.com/chenVcVictor/New-Personal-Website",
    },
    {
      projectName: "Gitlet",
      imageUrl: "./projectImages/gitImage.png",
      imageTitle: "Git Image",
      content:
        "Developed a Git-inspired version control system, which allows users to track version history of files using Java and JUnit Testing.",
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
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {project.projectName}
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
