import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import introImg from '../../assets/images/about.png'
import logo from '../../assets/images/logo.png'

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        overflow: 'hidden',
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
    link: {
        color: '#999',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
});


export default function Introduce() {
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
                    <Divider light={true} />
                    <Box mt={3}>
                        <Typography className={classes.title} gutterBottom>
                            VỀ CHÚNG TÔI
                        </Typography>
                        <Grid mb={12} container direction="row" justifyContent="center" alignItems="center" spacing={12}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <img src={introImg} width="100%" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Grid container >
                                    <Grid>
                                        <img src={logo} />
                                    </Grid>
                                    <Grid mt={3}>

                                        <Typography variant="body1" fontWeight="500" fontSize="18px" gutterBottom>
                                            GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA
                                        </Typography>
                                        <Box mt={3} mb={3}>
                                            <Typography variant="body1" fontSize="12px">
                                                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                                                khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                                                sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                                            </Typography>
                                        </Box>
                                        <Typography className={classes.link} variant="caption" fontSize="12px" component="a" href="/introduce">
                                            Xem thêm
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Container>
        </Router >
    );
}
