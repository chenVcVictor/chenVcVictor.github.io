import { Box, Toolbar, CssBaseline } from "@mui/material";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Box sx={{ overflowX: "hidden" }}>
        <CssBaseline />
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Toolbar />
      </Box>
    </>
  );
}

export default App;
