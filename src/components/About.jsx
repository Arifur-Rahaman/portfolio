import { Grid } from '@mui/material';
import React from 'react';
import { Img, MainButton, SectionHeader } from '../styledComponents/styledComponents';
import profile_image_1 from '../asset/images/profile_image_1.png';
import { BodyText1 } from '../styledComponents/styledComponents';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
const About = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Img src={profile_image_1} />
                </Grid>
                <Grid
                    item xs={12} md={6}
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <SectionHeader variant='h3'>About Me</SectionHeader>
                    <BodyText1 variant='h5' sx={{p: '20px 0 20px 0'}}>
                        My name is Arifur Rahaman. I can program to the computer using differnt programming language like C, Javascript. I am a junior ReactJs Web-developer. I can developed a website using HTML CSS, Javascript, ReactJs, Material UI and Styled Component.
                    </BodyText1>
                    <MainButton
                        startIcon={<DownloadForOfflineIcon />}
                        sx={{
                            width: '200px',
                            color: 'white'
                        }}
                    >
                        Download CV
                    </MainButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;