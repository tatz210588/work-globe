import * as React from 'react';

import { Box, Button, Paper, Typography, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

import JobPostNavBar from '../components/JobPostNavBar';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1fe47a',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundColor: '#1fe47a',
                    }
                }
            }
        }
    }
});

const JobPost = () => {
    const location = useLocation();
    return (
        <>
            <JobPostNavBar />
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{}}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='p' sx={{ mt: 2 }}>
                                Job Title: 
                                <Typography variant='h3' component='span' sx={{ textDecoration: 'underline black solid 5px' }}>
                                    {location.state.role}, {location.state.experience}
                                </Typography>
                            </Typography>
                        </Grid>

                        <Grid item xs={2} />
                        <Grid item xs={5}>
                            <Typography variant='h4' component='p' sx={{ textAlign: 'left', mt: 3, textDecoration: 'underline black solid 4px' }}>
                                Applicants
                            </Typography>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={2} />

                        <Grid item xs={2} />
                        <Grid item xs={5}>
                            <Paper elevation={3} sx={{ p: 2, textAlign: 'left' }}>
                                <Typography variant='h6' component='p'>
                                    1. Ram Sharma (CV Attached)
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant='contained' sx={{ width: '80%', p: 2 }}>Select</Button>
                        </Grid>
                        <Grid item xs={2} />

                        <Grid item xs={2} />
                        <Grid item xs={5}>
                            <Paper elevation={3} sx={{ p: 2, textAlign: 'left' }}>
                                <Typography variant='h6' component='p'>
                                    2. Shyam Sharma (CV Attached)
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant='contained' sx={{ width: '80%', p: 2 }}>Select</Button>
                        </Grid>
                        <Grid item xs={2} />

                        <Grid item xs={2} />
                        <Grid item xs={5}>
                            <Paper elevation={3} sx={{ p: 2, textAlign: 'left', mb: 2 }}>
                                <Typography variant='h6' component='p'>
                                    3. Karan Sharma (CV Attached)
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant='contained' sx={{ width: '80%', p: 2 }}>Select</Button>
                        </Grid>
                        <Grid item xs={2} />

                    </Grid>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default JobPost;