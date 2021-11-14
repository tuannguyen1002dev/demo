import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import Pagination from '@mui/material/Pagination';

import '../../styles/pages/Products.css'
import UsePagination from '../components/UsePagination'

import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import productsBanner from '../../assets/images/banner.png'
import sideBanner from '../../assets/images/store.png'
import blog1 from '../../assets/images/blog_1.png'
import blog2 from '../../assets/images/blog_2.png'
import blog3 from '../../assets/images/blog_3.png'
import blog4 from '../../assets/images/blog_4.png'
import blog5 from '../../assets/images/blog_5.png'
import blog6 from '../../assets/images/blog_6.png'
import blog7 from '../../assets/images/blog_7.png'
import blog8 from '../../assets/images/blog_8.png'
import blog9 from '../../assets/images/blog_9.png'

var useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        overflow: 'hidden',
        marginBottom: '100px',
    },
    banner: {
        backgroundImage: `url(${productsBanner})`,
        backgroundColor: '#B2B5BC',
        backgroundSize: '405px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '85% -131px',
        height: '190px',
    },
    bannerTitle: {
        color: '#fff',
        fontSize: ' 74px!important',

    },
    subTitleContainer: {
        color: '#fff',
    },
    subCategory: {
        fontSize: '14px!important',
        color: '#111!important',

    },
    subCategoryItem: {
        fontSize: '14px!important',
        color: '#737373!important',
        listStyleType: 'square',
    },
    tag: {
        color: '#737373!important',
        fontSize: '11px!important',
        fontWeight: 'bold',
        margin: '5px 0 5px 0',
        '&:hover': {
            color: '#fff!important',
            backgroundColor: '#000!important'
        }
    },
    sideBanner: {
        backgroundImage: `url(${sideBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '350px',
        color: '#fff'
    },
    paginationIcon: {
        fontSize: '22px!important',
    },
    newProductButton: {
        color: '#789529!important',
        borderColor: '#789529!important',
        '&:hover': {
            color: '#fff!important',
            backgroundColor: '#789529!important',
        }
    },
    cardActions: {
        opacity: '0!important',
        transitionDuration: 500,
        '&:hover': {
            opacity: '1!important',
            transitionDuration: 1000,
        }
    },
    rateIcon: {
        color: '#000!important',
        fontSize: '18px!important',
    },
    link: {
        color: '#999',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
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
});

export default function News() {
    const classes = useStyles();
    const breadcrumbs = [
        <Link className={classes.linkBreadcrumb} underline="hover" key="1" color="inherit" href="/">
            Trang Chủ
        </Link>,
        <Link className={classes.linkBreadcrumb} underline="hover" key="2" color="inherit" href="/news">
            Tin Tức
        </Link>,
    ];

    const dataList = [
        {
            id: 1,
            img: blog1
        },
        {
            id: 2,
            img: blog2
        },
        {
            id: 3,
            img: blog3
        },
        {
            id: 4,
            img: blog4
        },
        {
            id: 5,
            img: blog5
        },
        {
            id: 6,
            img: blog6
        },
        {
            id: 7,
            img: blog8
        },
        {
            id: 8,
            img: blog9
        },
        {
            id: 9,
            img: blog1
        },
        {
            id: 10,
            img: blog2
        },
        {
            id: 11,
            img: blog3
        },
        {
            id: 12,
            img: blog4
        },
        {
            id: 13,
            img: blog5
        },
        {
            id: 14,
            img: blog6
        },
        {
            id: 15,
            img: blog8
        },
        {
            id: 16,
            img: blog9
        },
        {
            id: 17,
            img: blog1
        },
        {
            id: 18,
            img: blog2
        },
        {
            id: 19,
            img: blog3
        },
        {
            id: 20,
            img: blog4
        },
        {
            id: 21,
            img: blog5
        },
        {
            id: 22,
            img: blog6
        },
        {
            id: 23,
            img: blog8
        },
        {
            id: 24,
            img: blog9
        },
    ]

    let [listStyle, setListStyle] = useState(6);
    let [page, setPage] = useState(1);
    const PER_PAGE = listStyle;
    const count = Math.ceil(dataList.length / PER_PAGE);
    const _DATA = UsePagination(dataList, PER_PAGE);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

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
                            TIN TỨC
                        </Typography>
                    </Box>
                </Container>
            </Container>
            <Container>
                <Container>
                    <Box mt={5} mb={12}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
                            <Grid item xs={5} sm={9} md={9} lg={10} xl={10}>
                                <ListItemIcon>
                                    <ViewModuleIcon id="blockStyle" className={classes.paginationIcon} onClick={() => {
                                        document.getElementById("blockStyle").style.color = "#000";
                                        document.getElementById("blockStyle1").style.color = "#000";
                                        document.getElementById("listStyle").style.color = "#999";
                                        document.getElementById("listStyle1").style.color = "#999";
                                        setListStyle(6);
                                    }} />
                                    <ViewListIcon id="listStyle" className={classes.paginationIcon}
                                        onClick={() => {
                                            document.getElementById("blockStyle").style.color = "#999";
                                            document.getElementById("blockStyle1").style.color = "#999";
                                            document.getElementById("listStyle").style.color = "#000";
                                            document.getElementById("listStyle1").style.color = "#000";
                                            setListStyle(3);
                                        }} />
                                </ListItemIcon>
                            </Grid>
                            <Grid item xs={7} sm={3} md={3} lg={2} xl={2} justifyContent="flex-end">
                                <Pagination
                                    defaultPage={1} siblingCount={1}
                                    count={count}
                                    size="small"
                                    page={page}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Divider />
                        {
                            listStyle === 6 ? <Grid mt={8} container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                                {_DATA.currentData().map(item => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} textAlign="left" key={item.id} component="a" href="./news-details" sx={{ textDecoration: 'none' }}>
                                            <Card className={classes.card} raised={false} elevation={0} >
                                                <CardMedia component="img" image={item.img} width="100%" />
                                                <ListItem>
                                                    <Typography gutterBottom variant="h6" fontSize="12px" fontWeight="1000">
                                                        REVIEW SON KEM BOURJOIS VELVET
                                                    </Typography>
                                                </ListItem>
                                                <Divider />
                                                <Typography variant="caption" fontWeight="300" fontSize="12px" gutterBottom>
                                                    Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm nóng cái
                                                    Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                                                </Typography>
                                                <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./news-details">
                                                    <div>
                                                        Bởi NamTran (27/05/2015)
                                                    </div>
                                                </Typography>
                                                <Box mt={1} mb={1}>
                                                    <Divider />
                                                </Box>
                                                <Grid container justifyContent="space-between" >
                                                    <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./news-details">
                                                        Đọc thêm <span><ArrowForwardIosIcon fontSize="1px" /></span>
                                                    </Typography>
                                                    <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./news-details">
                                                        23 Bình luận
                                                    </Typography>
                                                </Grid>
                                            </Card>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                                : <Grid mt={8} container direction="row" justifyContent="center" alignItems="center" spacing={3}>
                                    {_DATA.currentData().map(item => {
                                        return (
                                            <Grid mb={1} container direction="row" justifyContent="center" alignItems="center" spacing={3} component="a" href="./news-details" sx={{ textDecoration: 'none' }}>
                                                <Grid item xs={12} sm={6} md={5} lg={4} xl={4}>
                                                    <CardMedia component="img" alt="green iguana" height="220" image={item.img} />
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={7} lg={8} xl={8}>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="body1" fontSize="18px">
                                                            REVIEW SON KEM BOURJOIS VELVET
                                                        </Typography>
                                                        <Box mt={3} mb={2}>
                                                            <Typography variant="body1" style={{ color: '#888', }}>
                                                                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                                                                khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Bởi
                                                            </Typography>
                                                        </Box>
                                                        <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="12px" component="a" href="./news-details">
                                                            Bởi NamTran (27/05/2015)
                                                        </Typography>
                                                        <Box mt={1} mb={1}>
                                                            <Divider />
                                                        </Box>
                                                        <Grid container justifyContent="space-between" >
                                                            <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="12px" component="a" href="./news-details">
                                                                Đọc thêm <span><ArrowForwardIosIcon fontSize="1px" /></span>
                                                            </Typography>
                                                            <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="12px" component="a" href="./news-details">
                                                                23 Bình luận
                                                            </Typography>
                                                        </Grid>
                                                    </CardContent>
                                                </Grid>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                        }
                        <Grid mt={2} container direction="row" justifyContent="space-between" alignItems="flex-start" >
                            <Grid item xs={5} sm={9} md={9} lg={10} xl={10}>
                                <ListItemIcon>
                                    <ViewModuleIcon id="blockStyle1" className={classes.paginationIcon} onClick={() => {
                                        document.getElementById("blockStyle").style.color = "#000";
                                        document.getElementById("blockStyle1").style.color = "#000";
                                        document.getElementById("listStyle").style.color = "#999";
                                        document.getElementById("listStyle1").style.color = "#999";
                                        setListStyle(6);
                                    }} />
                                    <ViewListIcon id="listStyle1" className={classes.paginationIcon}
                                        onClick={() => {
                                            document.getElementById("blockStyle").style.color = "#999";
                                            document.getElementById("blockStyle1").style.color = "#999";
                                            document.getElementById("listStyle").style.color = "#000";
                                            document.getElementById("listStyle1").style.color = "#000";
                                            setListStyle(3);
                                        }} />
                                </ListItemIcon>
                            </Grid>
                            <Grid item xs={7} sm={3} md={3} lg={2} xl={2} justifyContent="flex-end">
                                <Pagination
                                    defaultPage={1} siblingCount={1}
                                    count={count}
                                    size="small"
                                    page={page}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Divider />
                    </Box>
                </Container>
            </Container>
        </Router >
    );
}
