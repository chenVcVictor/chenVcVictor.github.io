import { Box, Toolbar, Typography } from "@mui/material";
import "./styles.css";

/*

To Do:
- Add buttons with logos linking to Email, LinkedIn, Github, maybe Instagram?

*/

function Home() {
  return (
    <>
      <Box id="home" />
      <Box className="homeBackground">
        <Typography
          className="homeText"
          variant="h1"
          align="center"
          color="white"
        >
          Welcome! I am <br /> Victor Chen
        </Typography>
      </Box>
    </>
  );
}

export default Home;
