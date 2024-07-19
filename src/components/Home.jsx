import { Box, Toolbar, Typography } from "@mui/material";

function Home() {
  const backgroundUrl =
    "./images/Photo_Cropped_LandsEnd_VictorChen_LookingOut.jpeg";
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
        <Typography
          variant="h1"
          align="center"
          color="white"
          sx={{
            position: "relative ",
            width: "70%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Welcome! I am <br /> Victor Chen
        </Typography>
      </Box>
    </>
  );
}

export default Home;
