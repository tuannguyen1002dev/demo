import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import Pagination from '@mui/material/Pagination';
import ReactPaginate from 'react-paginate';
import usePagination from '@mui/material/usePagination';
import Slider from "react-slick";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';


import '../../styles/pages/ProductDetails.css'

import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import newsImg1 from '../../assets/images/blog_2.png';
import newsImg2 from '../../assets/images/blog_3.png';
import newsImg3 from '../../assets/images/blog_4.png';
import videoImg from '../../assets/images/video.png'
import postContent from '../../assets/images/post_content.png'

var useStyles = makeStyles({
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
    sideScrollItem: {
        border: '0px',
        '&:hover': {
            border: '1px solid',
            borderRadius: '5px',
            borderColor: '#999',
        }
    },
    newProductButton: {
        color: '#789529!important',
        borderColor: '#789529!important',
        '&:hover': {
            color: '#fff!important',
            backgroundColor: '#789529!important',
        }
    },
    specialProductDetail: {
        color: '#888'
    },
    headline: {
        fontSize: '20px!important',
    },
    title: {
        fontSize: '28px!important',
        fontWeight: '400!important'
    },
    sideSub: {
        fontSize: '30px!important',
        fontWeight: '700!important'
    },
    sideSubMonth: {
        fontSize: '15px!important',
    },
    subBlog: {
        fontSize: '20px!important',
        fontWeight: '700!important'
    },
    playButton: {
        color: 'white!important',
        fontSize: '50px!important',
        position: 'absolute',
        display: 'flex!important',
        padding: '80px 100px 100px 100px'
    },
    blogHeadline: {
        fontSize: '30px!important',
        fontWeight: '500!important'
    },
    blogSub: {
        fontSize: '16px!important',
        color: '#666!important'
    },
    link: {
        color: '#999',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    sendButton: {
        backgroundColor: '#000!important',
        boxShadow: 'none!important',
        '&:hover': {
            backgroundColor: '#789529!important',
        }
    }
});

export default function NewsDetails() {
    const classes = useStyles();

    const breadcrumbs = [
        <Link className={classes.linkBreadcrumb} underline="hover" key="1" color="inherit" href="/">
            Trang Chủ
        </Link>,
        <Link className={classes.linkBreadcrumb} underline="hover" key="2" color="inherit" href="/news">
            Tin Tức
        </Link>,
        <Link className={classes.linkBreadcrumb} underline="hover" key="2" color="inherit" href="./news-details">
            Chi Tiết
        </Link>,
    ];

    const tagList = [
        { name: 'Đồng hồ' },
        { name: 'Túi' },
        { name: 'Phụ kiện' },
        { name: 'Giày' },
        { name: 'Sandal' },
        { name: 'Áo sơ mi' },
        { name: 'Nước hoa' },
        { name: 'Giày' },
        { name: 'Trẻ em' },
        { name: 'Thời trang nữ' },
    ]

    return (
        <Router className={classes.root} sx={{ flexGrow: 1 }}>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
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
                            TIN TỨC
                        </Typography>
                    </Box>
                </Container>
            </Container>
            <Container>
                <Container>
                    <Typography mt={3} mb={0} className={classes.headline}>
                        BÀI VIẾT MỚI NHẤT
                    </Typography>
                    <Grid mt={0} container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={3}>
                        <Grid item xs={3} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                            <Divider />
                            <Grid mt={0} container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                                <Grid item xs={5}>
                                    <img src={newsImg1} width="100%" />
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography className={classes.sideSub}>
                                        11 <span className={classes.sideSubMonth}>/ Tháng 5</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid mt={1} container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                                <Grid item xs={5}>
                                    <img src={newsImg2} width="100%" />
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography className={classes.sideSub}>
                                        11 <span className={classes.sideSubMonth}>/ Tháng 5</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid mt={1} container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                                <Grid item xs={5}>
                                    <img src={newsImg3} width="100%" />
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography className={classes.sideSub}>
                                        11 <span className={classes.sideSubMonth}>/ Tháng 5</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography className={classes.subBlog} mt={10} mb={1}>
                                BLOG TAG
                            </Typography>
                            <Divider />
                            <Box mt={2} mb={5} textAlign="left">
                                {tagList.map(item => (
                                    < Chip className={classes.tag} label={item.name} variant="outlined" onClick={() => { console.log('') }} sx={{ m: 0.5 }} />
                                ))}
                            </Box>
                            <Typography className={classes.subBlog} mt={10} mb={1}>
                                LATEST VIDEO
                            </Typography>
                            <Divider />
                            <Box mt={3}>
                                <PlayCircleIcon className={classes.playButton} />
                                <img src={videoImg} width="100%" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md>
                            <img src={postContent} width="100%" />
                            <Typography mt={3} mb={1} className={classes.blogHeadline}>
                                NÀNG BÉO KHÔNG NGẠI DIỆN VÁY ÁO NỔI BẬT
                            </Typography>
                            <Divider />
                            <Typography mt={3} mb={3} className={classes.blogSub}>
                                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại
                                hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình
                                xô nhau đi tắm Free để giải nhiệt.Trong tiết xuân hè, nàng ngoại cỡ thắp
                                sáng phong cách bằng quần họa tiết nhiệt đới đi kèm áo sơ mi nhã nhặn.Trang
                                phục họa tiết điện tử được nàng phối cùng chân váy kẻ caro, làm nên style vừa
                                hiện đại, vừa phảng phất nét cổ điển.Lối diện đồ hàng ngày đơn giản, khỏe khoắn
                                của cô khi kết hợp chất liệu jean.Nữ blogger rực rỡ khi hòa trộn các gam đỏ,
                                hồng, tím... một cách vui tươi, kèm theo các phụ kiện điệu đà.
                            </Typography>
                            <Typography className={classes.link} component="a" href="/news-details" >
                                Bởi NamTran ( 27 / 05 / 2015 )
                            </Typography>
                            <Divider sx={{ mt: 3 }} />
                            <Grid mt={3} container direction="row" justifyContent="space-between" alignItems="center">
                                <Grid item xs={6}>
                                    <Typography mb={3} className={classes.link} component="a" href="/news-details" >
                                        Đọc thêm <span><ArrowForwardIosIcon fontSize="1px" /></span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} textAlign="right">
                                    <Typography mb={3} className={classes.link} component="a" href="/news-details" >
                                        23 Bình luận
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography mt={5} mb={2} className={classes.link} style={{ fontSize: '18px' }}>
                                Tag: <span style={{ color: '#000' }}>
                                    Men
                                </span>
                            </Typography>
                            <Divider />
                            <Typography mt={3} mb={0} className={classes.headline}>
                                ĐÓNG GÓP Ý KIẾN
                            </Typography>
                            <Box textAlign="left" mb={12}>
                                <TextField size="small" fullWidth label="Tên" required={true} sx={{ my: 3 }} color="success" />
                                <TextField size="small" fullWidth label="Email" required={true} color="success" />
                                <TextField size="small" fullWidth multiline minRows={6} label="Tin Nhắn" required row={5} sx={{ mt: 3 }} color="success" />
                                <Button className={classes.sendButton} variant="contained" sx={{ mt: 5 }} >
                                    GỬI Ý KIÊN
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Router >
    );
}
