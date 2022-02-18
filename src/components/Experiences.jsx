import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import exp_img from '../asset/images/exp-bg.png'
import { SectionHeader } from '../styledComponents/styledComponents';
const Experiences = () => {
    return (
        <Box sx={{mt: '100px'}}>
            <SectionHeader align='center' variant='h3'>Experiences</SectionHeader>
            <Box sx={{
                background: `url(${exp_img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                padding: '40px 0 20px 0'
            }}
            >
                <Grid container sx={{ pl: '60px', pt: '40px' }} spacing={8}>
                    <Grid item md={4}>
                        <Paper
                            elevation={12}
                            sx={{
                                height: '300px',
                                borderRadius: '10px',
                                borderLeft: '10px solid',
                                borderImage: `linear-gradient(180deg , tomato, #F88366)`,
                                borderImageSlice: '1',
                                p: '20px'
                            }}>
                            <Typography variant='h5' sx={{fontWeight: '600'}}>January, 2022 to Running:</Typography>
                            <Typography variant='h6'>Learning Intermediate ReactJs from devskill</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper
                            elevation={12}
                            sx={{
                                height: '300px',
                                borderRadius: '10px',
                                borderLeft: '10px solid',
                                borderImage: `linear-gradient(180deg , tomato, #F88366)`,
                                borderImageSlice: '1',
                                p: '20px'
                            }}>
                            <Typography variant='h5' sx={{fontWeight: '600'}}>January, 2021 to June, 2021:</Typography>
                            <Typography variant='h6'>Learned complete web development from Programming Hero</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper
                            elevation={12}
                            sx={{
                                height: '300px',
                                borderRadius: '10px',
                                borderLeft: '10px solid',
                                borderImage: `linear-gradient(180deg , tomato, #F88366)`,
                                borderImageSlice: '1',
                                p: '20px'
                            }}>
                            <Typography variant='h5' sx={{fontWeight: '600'}}>January, 2019 to Running:</Typography>
                            <Typography variant='h6'>Programming and problem solving using different programming language C, Java, Javascript and Prolog</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Experiences;