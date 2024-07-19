// Card design for each project


import * as React from 'react';
import { Container, Typography, Grid, Toolbar, Box, CardMedia } from '@mui/material';


function Projects() {
    return (
        <>
            <Box id="projects" />
            <Container maxWidth="lg" sx={{}}>
                <Box sx={{ height: '50px' }} /> 
                <Typography variant = 'h3' gutterBottom>
                    Projects
                </Typography>
            </Container>
        </>
    )
}


export default Projects;