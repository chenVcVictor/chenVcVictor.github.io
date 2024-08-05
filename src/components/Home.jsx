import {
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  IconButton,
  Button,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { socialMediaRedirects } from "../textContent";

import "./componentStyles.css";

// const backgroundUrl =
//   "./images/Photo_Cropped_LandsEnd_VictorChen_LookingOut.jpeg";

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box id="home" />
      <Box className="homeBackground">
        <Stack spacing={2}>
          <Typography
            className="homeText"
            variant={isSmallScreen ? "h2" : "h1"}
            align="center"
            color="white"
          >
            Victor Chen
          </Typography>
          <Typography
            className="homeText"
            variant={isSmallScreen ? "subtitle" : "h6"}
            align="center"
            color="white"
          >
            chenvcvictor@gmail.com ● San Francisco, CA
          </Typography>
          <Stack
            className="iconButtons"
            spacing={5}
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {socialMediaRedirects.map((icon, index) => {
              const MediaIcon = icon.iconComponent;
              return (
                <IconButton
                  key={index}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer" // Security measure
                  sx={{
                    padding: 0,
                    backgroundColor: icon.backgroundColor,
                    borderRadius: "30%",
                  }}
                >
                  <MediaIcon sx={{ fontSize: 50, color: icon.color }} />
                </IconButton>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
