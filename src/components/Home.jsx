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

function Home() {
  const backgroundUrl =
    "./images/Photo_Cropped_LandsEnd_VictorChen_LookingOut.jpeg";

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box id="home" />
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center", // vertically centered
          justifyContent: "center", // horizontally centered
          backgroundAttachment: "static",
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant={isSmallScreen ? "h2" : "h1"}
            align="center"
            color="white"
            sx={{
              position: "relative ",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              top: "-50px",
            }}
          >
            {/* Welcome! I am <br /> Victor Chen */}
            Victor Chen
          </Typography>
          <Typography
            variant={isSmallScreen ? "subtitle" : "h6"}
            align="center"
            color="white"
            sx={{
              position: "relative ",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              top: "-50px",
            }}
          >
            chenvcvictor@gmail.com ● San Francisco, CA
          </Typography>
          <Stack
            spacing={5}
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              href="https://github.com/chenvcvictor"
              target="_blank"
              rel="noopener noreferrer" // Security measure
              sx={{
                padding: 0,
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            >
              <GitHubIcon sx={{ fontSize: 50, color: "#FFF" }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/chen-vc-victor/"
              target="_blank"
              rel="noopener noreferrer" // Security measure
              sx={{
                padding: 0,
                backgroundColor: "white",
                borderRadius: "30%",
              }}
            >
              <LinkedInIcon sx={{ fontSize: 50, color: "#0a66c2" }} />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/victorc_lbftw/"
              target="_blank"
              rel="noopener noreferrer" // Security measure
              sx={{
                padding: 0,
                backgroundColor: "white",
                borderRadius: "30%",
              }}
            >
              <InstagramIcon sx={{ fontSize: 50, color: "#cd486b" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
