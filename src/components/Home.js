

import { Box, Toolbar, Typography } from '@mui/material';
import backgroundUrl from "/src/images/Photo_Cropped_LandsEnd_VictorChen_LookingOut.jpeg";

function Home() {
    return (
      <>
        <Box id="home" />
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center', // Align items vertically centered
            justifyContent: 'center', // Align items horizontally centered
            backgroundAttachment: 'static',
          }}        
        >
          <Typography variant='h1' align = 'center' color='white' sx={{ position: 'relative ', width: '70%',  maxWidth: '800px', margin: '0 auto', }}>
            Hey Welcome! <br /> I am <br /> Victor Chen
          </Typography>
        </Box>
      </>
    );
  }

export default Home;
