import React from 'react';
import { Box, styled } from '@mui/system';
import { Grid, Stack, Typography } from '@mui/material';
import { Img, SectionHeader } from '../styledComponents/styledComponents';
import html_logo from '../asset/images/html.png'
import css_logo from '../asset/images/css.png'
import js_logo from '../asset/images/js.png'
import react_logo from '../asset/images/react.png'
import mui_logo from '../asset/images/material-ui.png'
import firebase_logo from '../asset/images/firebase.png'
const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#ddd',
    borderRadius: '20px',
}))

const Skill = styled(Box)(({ theme }) => ({
    textAlign: 'right',
    color: 'white',
    borderRadius: '20px',
    paddingRight: '20px',
    background: '#F88366'
}))
const workingSkill = [
    {
        name: "HTML",
        efficiency: '90%'
    },
    {
        name: "CSS",
        efficiency: '70%'
    },

    {
        name: "Javascript",
        efficiency: '80%'
    },
    {
        name: "React",
        efficiency: '70%'
    },
    {
        name: "Material UI",
        efficiency: '70%'
    }
]
const logos = [html_logo, css_logo, js_logo, react_logo, mui_logo, firebase_logo]
const Skills = () => {
    return (
        <Box sx={{mt: '100px'}}>
            <SectionHeader sx={{pt: '20px'}} align='center' variant='h3'>My Skills</SectionHeader>
            <Grid container sx={{ p:'10px' }} spacing={4} alignItems='center'>
                <Grid item xs={12} md={6}>
                    {
                        workingSkill.map(ws => {
                            const { name, efficiency } = ws;
                            return (
                                <Stack sx={{ padding: '10px' }}>
                                    <Typography variant='h6'>{name}</Typography>
                                    <Container>
                                        <Skill sx={{ width: `${efficiency}` }}>{efficiency}</Skill>
                                    </Container>
                                </Stack>)
                        })
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container rowSpacing={6}>
                        {
                            logos.map(logo => (
                                <Grid
                                    item 
                                    xs={6}
                                    md={4}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}

                                >
                                    <Img sx={{ width: '40%' }} src={logo}></Img>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Skills;