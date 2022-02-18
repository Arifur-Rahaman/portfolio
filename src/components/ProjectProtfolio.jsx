import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import parking_project from '../asset/images/parking-project-img.png'
import sportsWorld from '../asset/images/SportsWorld.png'
import auction_image from '../asset/images/Auction.png'
import { Img, SectionHeader } from '../styledComponents/styledComponents'
const ProjectProtfolio = () => {
    return (
        <Box sx={{ backgroundColor: 'lightgray' }}>
            <SectionHeader
                variant='h3'
                align='center'
                sx={{
                    p: '30px 0 20px 0'
                }}
            >
                Latest <span style={{color: '#F88366'}}>Working</span> Projects
            </SectionHeader>
            <Grid container spacing={2} sx={{ p: '20px' }}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: '20px' }}>
                        <Img src={parking_project} sx={{ borderRadius: '20px' }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: '20px' }}>
                        <Img src={sportsWorld} sx={{ borderRadius: '20px' }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: '20px' }}>
                        <Img src={auction_image} sx={{ borderRadius: '20px' }} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectProtfolio;