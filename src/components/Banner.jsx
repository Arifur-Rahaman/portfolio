import {Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import profile_image_1 from '../asset/images/profile_image_1.png'
import banner_bg from '../asset/images/top-banner.png'
import { styled } from '@mui/system';
import {Img, BodyText1, MainButton} from '../styledComponents/styledComponents'
const BannerContainer = styled(Box)(({ theme }) => ({
    background: `url(${banner_bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '20px'
}))
const Banner = () => {
    return (
        <BannerContainer>
            <Grid container >
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Typography
                        variant='h3'
                        sx={{
                            fontWeight: '600',
                            padding: '10px'
                        }}
                    >
                        HELLO, I'M
                    </Typography>
                    <Typography
                        sx={{
                            color: '#F88366',
                            fontWeight: '600',
                            padding: '10px'
                        }}
                        variant='h3'
                    >
                        Arifur Rahaman
                    </Typography>
                    <BodyText1 variant='h5'>
                        A professional ReactJs developer. My skill and experience help me to make world class Web-site. I am confidant, I can full-fill your desire of making website.
                    </BodyText1>
                    <Box sx={{pl: '10px'}}>
                        <MainButton variant="contained">Hire Me</MainButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Img src={profile_image_1} />
                </Grid>

            </Grid>
        </BannerContainer>
    );
};

export default Banner;