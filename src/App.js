import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Box, Toolbar, CssBaseline } from '@mui/material'
import ResponsiveAppBar from './exampleComponents/ResponsiveAppBar'



import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <Box sx={{ overflowX: 'hidden' }}>
      <CssBaseline />
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Toolbar />
      <Toolbar />
      <Toolbar />
    </Box>
    </>
  )
}

export default App;
