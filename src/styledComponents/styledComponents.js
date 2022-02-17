import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Img = styled('img')(({ theme }) => ({
    width: '100%',
}))

export const BodyText1 = styled(Typography)(({ theme }) => ({
    color: 'gray',
    fontWeight: '500',
    padding: '10px'
}))

export const MainButton = styled(Button)(({ theme }) => ({
    width: '100px',
    fontWeight: '600',
    background: '#F88366',
    '&:hover': {
        background: 'black'
    }
}))