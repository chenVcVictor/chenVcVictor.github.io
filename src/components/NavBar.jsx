import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

// { name: 'About', href: '#about' },
// { name: 'Projects', href: '#projects' },
// { name: 'Experience', href: '#experience' },
// { name: 'Resume', href: '#resume' }
const navItems = ["Home", "About", "Projects", "Experience", "Resume"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollTo = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const offset = 50;
      const elementPosition = sectionElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Full screen for Header */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans-serif",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Victor Chen
            </Typography>

            {/* Full screen menu */}
            <Box sx={{ flexGrow: 10, display: { xs: "none", md: "flex" } }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleScrollTo(item.toLowerCase());
                  }}
                  sx={{ ml: 1, mr: 1, my: 2, color: "white", display: "block" }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Mini screen menu Drop down */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem key={item} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{item}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mini screen for Header */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "sans-serif",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Victor Chen
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
