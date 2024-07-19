/*
Layout Idea:
                    About
    Picture         ----------------------            
                    Text


    Contact Info
*/


import * as React from 'react';
import { Container, Typography, Grid, Toolbar, Box, CardMedia } from '@mui/material';
import { aboutText } from '/src/textContent'

import profilePicUrl from '/src/images/Photo_KokoCraterTrail_VictorChen.jpeg'

// probably 2 columns 

function About() {

    return (
        <>
        <Box id="about" />
        <Container maxWidth="lg" sx={{}}>
            <Box sx={{ height: '50px' }} /> 
            <Typography variant = 'h3' gutterBottom>
                About
            </Typography>
            <Grid container spacing = {12}>
                <Grid item xs = {12} md = {5}>
                    <CardMedia 
                        component="img"
                        src = {profilePicUrl}
                    />
                        
                </Grid>
                <Grid item xs = {12} md = {7}>
                    <Typography> 
                    {aboutText}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        
        </>
    )
}


export default About;

