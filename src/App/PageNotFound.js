import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import pageNotFound from '../assets/images/404.png'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import FilledInput from '@mui/material/FilledInput';
import { Divider } from '@mui/material';


var useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        overflow: 'hidden!important',
        marginBottom: '100px',
    },
    banner: {
        backgroundImage: `url(${pageNotFound})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '85% -131px',
    },
    link: {
        color: '#000',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    }

});

export default function News() {
    const classes = useStyles();

    return (
        <Router className={classes.root} sx={{ flexGrow: 1 }}>
            <Grid mt={12} container justifyContent="center" alignItems="center" >
                <Grid mt={12}>
                    <img src={pageNotFound} width="100%"/>
                </Grid>
            </Grid>
            <Box mt={7} mb={7} textAlign="center">
                <Typography variant="h4">
                    Trang hiện không tồn tại trong website
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Container maxWidth="md">
                    <TextField
                        className="inputRounded"
                        color="success"
                        sx={{ m: 1, width: '100%', borderRadius: '100%' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                        }}
                    />
                </Container>
            </Box>
            <Container textAlign="center" justifyContent="center">
                <Grid mt={5} mb={12} container>
                    <Grid item xs textAlign="right" mr={2}>
                        <Typography className={classes.link} variant="body1" component="a" href="./contact">
                            LIÊN HỆ
                        </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem style={{ color: '#000', background: '#000' }} />
                    <Grid item xs textAlign="left" ml={2}>
                        <Typography className={classes.link} variant="body1" component="a" href="./">
                            TRANG CHỦ
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

        </Router >
    );
}
