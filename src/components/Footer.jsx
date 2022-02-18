import { Link, Stack, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <Stack alignItems='center' sx={{ p: '20px' }}>
            <Typography variant='h5'>Stay Connected</Typography>
            <Typography variant='h6'>arifur.rahaman.siflu@gmail.com</Typography>
            <Stack direction='row'>
                <Link href="https://github.com/Arifur-Rahaman" underline="none" target="_blank">
                    <GitHubIcon sx={{ color: ' #171515' }} />
                </Link>
                <Link href="https://www.facebook.com/ar.siflu.3" underline="none" target="_blank">
                    <FacebookIcon sx={{ color: '#4267B2' }} />
                </Link>
                <Link href="https://www.linkedin.com/in/arifur-rahaman-6256661b4/" underline="none" target="_blank">
                    <LinkedInIcon sx={{ color: '#2867B2' }} />
                </Link>
            </Stack>
        </Stack>
    );
};

export default Footer;