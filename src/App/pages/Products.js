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

import '../../styles/pages/Products.css'
import UsePagination from '../components/UsePagination'

import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FavoriteIcon from '@mui/icons-material/Favorite';

import productsBanner from '../../assets/images/banner.png'
import sideBanner from '../../assets/images/store.png'
import product1 from '../../assets/images/product_1.jpg'
import product2 from '../../assets/images/product_2.jpg'
import product3 from '../../assets/images/product_3.jpg'
import product4 from '../../assets/images/product_4.jpg'
import product5 from '../../assets/images/product_5.jpg'
import product6 from '../../assets/images/product_6.jpg'
import product8 from '../../assets/images/product_8.png'
import product9 from '../../assets/images/product_9.png'
import { style } from '@mui/system';

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
    linkBreadcrumb: {
        fontSize: '12px!important',
        textDecoration: 'none!important',
        '&:hover': {
            color: '#789529!important'
        }
    },
});

export default function Products() {
    const classes = useStyles();
    const breadcrumbs = [
        <Link className={classes.linkBreadcrumb} underline="hover" key="1" color="inherit" href="/">
            Trang Ch???
        </Link>,
        <Link className={classes.linkBreadcrumb} underline="hover" key="2" color="inherit" href="/products">
            S???n ph???m
        </Link>,
    ];

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleClick1 = (event) => {
        setOpen1(!open1);
    };
    const handleClick2 = (event) => {
        setOpen2(!open2);
    };
    const handleClick3 = (event) => {
        setOpen3(!open3);
    };
    const handleClick4 = (event) => {
        setOpen4(!open4);
    };

    const tagList = [
        { name: '?????ng h???' },
        { name: 'T??i' },
        { name: 'Ph??? ki???n' },
        { name: 'Gi??y' },
        { name: 'Sandal' },
        { name: '??o s?? mi' },
        { name: 'N?????c hoa' },
        { name: 'Gi??y' },
        { name: 'Tr??? em' },
        { name: 'Th???i trang n???' },
        { name: 'N?????c hoa' },
        { name: 'Gi??y' },
        { name: 'Tr??? em' },
        { name: 'Th???i trang n???' },
    ]
    const dataList = [
        {
            id: 1,
            img: product1
        },
        {
            id: 2,
            img: product2
        },
        {
            id: 3,
            img: product3
        },
        {
            id: 4,
            img: product4
        },
        {
            id: 5,
            img: product5
        },
        {
            id: 6,
            img: product6
        },
        {
            id: 7,
            img: product8
        },
        {
            id: 8,
            img: product9
        },
        {
            id: 9,
            img: product1
        },
        {
            id: 10,
            img: product2
        },
        {
            id: 11,
            img: product3
        },
        {
            id: 12,
            img: product4
        },
        {
            id: 13,
            img: product5
        },
        {
            id: 14,
            img: product6
        },
        {
            id: 15,
            img: product8
        },
        {
            id: 16,
            img: product9
        },
        {
            id: 17,
            img: product1
        },
        {
            id: 18,
            img: product2
        },
        {
            id: 19,
            img: product3
        },
        {
            id: 20,
            img: product4
        },
        {
            id: 21,
            img: product5
        },
        {
            id: 22,
            img: product6
        },
        {
            id: 23,
            img: product8
        },
        {
            id: 24,
            img: product9
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
                            <Breadcrumbs separator="???" aria-label="breadcrumb">
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </Box>
                </Container>
            </Container>
            <Grid maxWidth alignItems="center" container spacing={0} className={classes.banner}>
                <Container>
                    <Container>
                        <Grid mt={-2} container alignItems="center">
                            <Grid item xs={6} sm={6} md={6} lg={5} xl={5}>
                                <Typography className={classes.bannerTitle} id="productsBanner" fontSize={{ xs: '35px', sm: '55px', md: '75px' }}>
                                    Gi???m gi?? 50%
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={7} xl={7} className={classes.subTitleContainer}>
                                <Typography fontSize={{ xs: '18px', sm: '23px', md: '28px' }}>
                                    Trong v??ng 3 ng??y
                                    <br />
                                    <span style={{ fontWeight: 'bold' }}>
                                        (25/5 - 28/5/2015)
                                    </span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Grid>
            <Container>
                <Container>
                    <Box mt={10} mb={12}>
                        <Grid container direction="row" spacing={5} >
                            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                                <List width="100%" component="nav"
                                    subheader={
                                        <ListItem style={{ color: '#000' }} disablePadding divider>
                                            <ListItemIcon>
                                                <MenuIcon style={{ color: '#111' }} />
                                            </ListItemIcon>
                                            <Typography style={{ fontSize: '17px', fontWeight: 'bold' }} gutterBottom>
                                                DANH M???C S???N PH???M
                                            </Typography>
                                        </ListItem>
                                    }>
                                </List>
                                <Box mt={3}>
                                    <ListItemButton disablePadding onClick={handleClick1} disableRipple disableGutters>
                                        <Typography className={classes.subCategory}>
                                            M??? PH???M
                                        </Typography>
                                        <ListItemIcon>
                                            {open1 ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <Collapse in={open1} timeout="auto" unmountOnExit>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="S???a R???a M???t" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="Kem D?????ng Da" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="Kem Ch???ng N???ng" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="Son M??i" />
                                        </ListItemButton>
                                    </Collapse>
                                    <Divider />
                                    <ListItemButton disablePadding onClick={handleClick2} disableRipple disableGutters>
                                        <Typography className={classes.subCategory}>
                                            TRANG S???C
                                        </Typography>
                                        <ListItemIcon>
                                            {open2 ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <Collapse in={open2} timeout="auto" unmountOnExit>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="V??ng Tay" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="Nh???n" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="L???c Ch??n" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="Ph??? Ki???n Kh??c" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="Gi??y L?????i C??c Lo???i" />
                                        </ListItemButton>
                                    </Collapse>
                                    <Divider />
                                    <ListItemButton disablePadding onClick={handleClick3} disableRipple disableGutters>
                                        <Typography className={classes.subCategory}>
                                            PH??? KI???N
                                        </Typography>
                                        <ListItemIcon>
                                            {open3 ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <Collapse in={open3} timeout="auto" unmountOnExit>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="T??i X??ch" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="?????ng H???" />
                                        </ListItemButton>
                                    </Collapse>
                                    <Divider />
                                    <ListItemButton disablePadding onClick={handleClick4} disableRipple disableGutters>
                                        <Typography className={classes.subCategory}>
                                            N?????C HOA
                                        </Typography>
                                        <ListItemIcon>
                                            {open4 ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <Collapse in={open4} timeout="auto" unmountOnExit>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="N?????c Hoa Vi???t Nam" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="N?????c Hoa M???" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="N?????c Hoa Ph??p" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 2 }} className={classes.subCategoryItem}>
                                            <li></li>  <ListItemText primary="N?????c Hoa Nh???t" />
                                        </ListItemButton>
                                    </Collapse>
                                </Box>
                                <Divider />
                                <Box mt={8} mb={0}>
                                    <Typography style={{ fontSize: '17px', fontWeight: 'bold' }}>
                                        SO S??NH S???N PH???M
                                    </Typography>
                                    <Divider />
                                    <Typography style={{ fontSize: '13px', color: '#737373' }}>
                                        B???n ch??a c?? s???n ph???m n??o ????? so s??nh
                                    </Typography>
                                </Box>
                                <Box mt={12} mb={8}>
                                    <Typography style={{ fontSize: '17px', fontWeight: 'bold' }} gutterBottom>
                                        TAG S???N PH???M
                                    </Typography>
                                    <Divider />
                                    {tagList.map(item => (
                                        < Chip className={classes.tag} label={item.name} variant="outlined" onClick={() => { console.log('') }} sx={{ m: 0.5 }} />
                                    ))}
                                </Box>
                                <Grid container alignItems="center" className={classes.sideBanner}>
                                    <Grid item xs={12} textAlign="center">
                                        <Typography variant="h4" fontFamily="Time News Roman">
                                            MANDALA
                                            <br />
                                            STORE
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
                                    <Grid item xs={12} sm={7} md={7} lg={8} xl={8}>
                                        <ListItemIcon>
                                            <ViewModuleIcon id="blockStyle" className={classes.paginationIcon} onClick={() => {
                                                document.getElementById("blockStyle").style.color = "#000";
                                                document.getElementById("blockStyle1").style.color = "#000";
                                                document.getElementById("listStyle").style.color = "#999";
                                                document.getElementById("listStyle1").style.color = "#999";
                                                setListStyle(6);
                                                setPage(1);
                                                _DATA.jump(1);
                                            }} />
                                            <ViewListIcon id="listStyle" className={classes.paginationIcon}
                                                onClick={() => {
                                                    document.getElementById("blockStyle").style.color = "#999";
                                                    document.getElementById("blockStyle1").style.color = "#999";
                                                    document.getElementById("listStyle").style.color = "#000";
                                                    document.getElementById("listStyle1").style.color = "#000";
                                                    setListStyle(3);
                                                    setPage(1);
                                                    _DATA.jump(1);
                                                }} />
                                        </ListItemIcon>
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={5} lg={4} xl={4} justifyContent="flex-end">
                                        <Pagination
                                            defaultPage={1} siblingCount={1}
                                            count={count}
                                            size="small"
                                            page={page}
                                            onChange={handleChange} />
                                    </Grid>
                                </Grid>
                                <Divider />
                                {
                                    listStyle === 6 ? <Grid mt={8} container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                                        {_DATA.currentData().map(item => {
                                            return (
                                                <Grid item xs={4} textAlign="center" key={item.id}>
                                                    <Card className={classes.card} raised={false} elevation={0} sx={{ maxWidth: 210 }} >
                                                        <CardMedia component="img" image={item.img} />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="body2" style={{ fontSize: 'small', color: '#999' }}>
                                                                TYFFANY
                                                            </Typography>
                                                            <Typography gutterBottom variant="h6" fontSize="medium">
                                                                M??? ph???m ch??u ??u
                                                            </Typography>
                                                        </CardContent>
                                                        <Divider variant="middle" textAlign="center" />
                                                        <CardContent>
                                                            <span>
                                                                <Typography variant="body1" id="newProduct" style={{ color: '#999', display: 'inline-block', marginRight: '5px', color: '#789529', fontWeight: 'bold' }}>
                                                                    355.000<sup>??</sup>
                                                                </Typography>
                                                            </span>
                                                            <span>
                                                                <Typography variant="body2" id="newProduct" style={{ color: '#999', display: 'inline-block', fontWeight: 'bold' }}>
                                                                    450.000<sup>??</sup>
                                                                </Typography>
                                                            </span>
                                                            <div style={{ margin: 0, height: 20 }}>
                                                                <KeyboardArrowDownIcon style={{ color: '#789529' }} />
                                                            </div>
                                                            <CardActions className={classes.cardActions} sx={{ justifyContent: 'center' }}>
                                                                <Button className={classes.newProductButton} variant="outlined" size="small">Mua</Button>
                                                                <Button className={classes.newProductButton} variant="outlined" size="small"><FavoriteBorderIcon /></Button>
                                                                <Button className={classes.newProductButton} height="40px" variant="outlined" size="small">Detail</Button>
                                                            </CardActions>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                        : <Grid mt={8} container direction="row" justifyContent="center" alignItems="center" spacing={3}>
                                            {_DATA.currentData().map(item => {
                                                return (
                                                    <Grid mb={1} container direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>
                                                        <Grid item xs={4}>
                                                            <CardMedia component="img" alt="green iguana" height="220" image={item.img} />
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <CardContent>
                                                                <Typography gutterBottom variant="body1" fontSize="18px">
                                                                    M??? ph???m ch??u ??u
                                                                </Typography>
                                                                <ListItemIcon>
                                                                    <FavoriteIcon className={classes.rateIcon} />
                                                                    <FavoriteIcon className={classes.rateIcon} />
                                                                    <FavoriteIcon className={classes.rateIcon} />
                                                                    <FavoriteIcon className={classes.rateIcon} />
                                                                    <FavoriteIcon className={classes.rateIcon} />
                                                                    <Typography variant="body2">
                                                                        (4 l?????t mua)
                                                                    </Typography>
                                                                </ListItemIcon>
                                                                <Box mt={3} mb={2}>
                                                                    <Typography variant="body2" style={{ color: '#888', }}>
                                                                        T??? h??o ???????c ghi l?? n??m m?? Tiffany & Co l?? th??nh l???p,
                                                                        b??? s??u t???p mang t??nh bi???u t?????ng n??y cung c???p cho m???t c??i g???t ?????u v???i qua
                                                                        trong khi th??? hi???n m???t c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v??
                                                                        ???????ng n??t m?????t m??.
                                                                    </Typography>
                                                                </Box>
                                                                <Typography id="newProduct" style={{ fontSize: '24px', color: '#999', display: 'inline-block', marginRight: '5px', color: '#789529', fontWeight: 'bold' }}>
                                                                    355.000<sup>??</sup>
                                                                </Typography>
                                                                <Box mt={1}>
                                                                    <CardActions sx={{ justifyContent: 'left' }}>
                                                                        <Button className={classes.newProductButton} variant="outlined" size="medium">Mua</Button>
                                                                        <Button className={classes.newProductButton} variant="outlined" size="medium"><FavoriteBorderIcon /></Button>
                                                                        <Button className={classes.newProductButton} height="40px" variant="outlined" size="medium" >Detail</Button>
                                                                    </CardActions>
                                                                </Box>
                                                            </CardContent>
                                                        </Grid>
                                                    </Grid>

                                                );
                                            })}
                                        </Grid>
                                }
                                <Box item xs={4} justifyContent="flex-end">

                                </Box>

                                <Grid mt={2} container direction="row" justifyContent="space-between" alignItems="flex-start" >
                                    <Grid item xs={12} sm={7} md={7} lg={8} xl={8}>
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
                                    <Grid item xs={12} sm={5} md={5} lg={4} xl={4} justifyContent="flex-end">
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
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Container>
        </Router >
    );
}
