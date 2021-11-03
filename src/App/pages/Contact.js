import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import FilledInput from '@mui/material/FilledInput';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';


var useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        overflow: 'hidden!important',
        marginBottom: '100px',
    },
    linkBreadcrumb: {
        fontSize: '12px!important',
        textDecoration: 'none!important',
        '&:hover': {
            color: '#789529!important'
        }
    },
    title: {
        fontSize: '28px!important',
        fontWeight: '400!important'
    },
    sendButton: {
        backgroundColor: '#789529!important',
    }
});

export default function News() {
    const classes = useStyles();
    const breadcrumbs = [
        <Link className={classes.linkBreadcrumb} underline="hover" key="1" color="inherit" href="/">
            Trang Chủ
        </Link>,
        <Link className={classes.linkBreadcrumb} underline="hover" key="2" color="inherit" href="/introduce">
            Giới thiệu
        </Link>,
    ];

    return (
        <Router className={classes.root} sx={{ flexGrow: 1 }}>
            <Container>
                <Container >
                    <Box mt={12} mb={3}>
                        <Stack spacing={2}>
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box mt={4} >
                        <Typography className={classes.title}>
                            LIÊN HỆ
                        </Typography>
                    </Box>
                </Container>
            </Container>
            <Container>
                <Container>
                    <Grid mt={0} mb={12} container justifyContent="center" alignItems="center" spacing={5}>
                        <Grid mt={0} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.277916139046!2d108.20345301544057!3d16.051061744186583
                    !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219bbac6c009d%3A0x64deb5d551680e98!2zMTUwIER1eSBUw6JuLCBIw7JhIFRodeG6r
                    W4gTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1635656883536!5m2!1sen!2s"
                                style={{ width: '100%', height: 450, border: 0, allowfullscreen: true, loadding: 'lazy' }}></iframe>
                        </Grid>
                        <Grid mt={0} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box mt={0} >
                                <Typography variant="h6" >
                                    GỬI EMAIL CHO CHÚNG TÔI
                                </Typography>
                            </Box>
                            <Box textAlign="right">
                                <TextField size="small" fullWidth label="Tên" required={true} sx={{ my: 3 }} color="success"/>
                                <TextField size="small" fullWidth label="Email" required={true} color="success"/>
                                <TextField size="small" fullWidth multiline minRows={6} label="Tin Nhắn" required row={5} sx={{ mt: 3 }} color="success"/>
                                <Button className={classes.sendButton} variant="contained" sx={{ mt: 5 }} >
                                    Gửi
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Router >
    );
}
