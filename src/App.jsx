import {
  Box,
  Toolbar,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, serif",
    },
    palette: {
      background: {
        main: "#ced5d6",
      },
      navBar: {
        main: "#032e61", // Custom color
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box color="background" sx={{ overflowX: "hidden" }}>
          <CssBaseline />
          <NavBar />
          <Home />
          <About />
          <Projects />
          <Resume />
          <Toolbar />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
