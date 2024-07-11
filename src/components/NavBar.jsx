import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, Container, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material'


const navItems = ['About', 'Projects', 'Experience', 'Resume']

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                {/* Full screen for Header */}
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    Victor Chen
                </Typography>


                {/* Full screen menu */}
                <Box sx={{ flexGrow: 10,  display: { xs: 'none', md: 'flex' }}} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {navItems.map((item) => (
                    <Button
                        key={item}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                    <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                        {item}
                    </Typography>
                    </Button>
                    ))}
                </Box>

                

                    {/* Mini screen menu Drop down */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
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
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
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
