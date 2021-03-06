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

import product11 from '../../assets/images/product_11.png'
import product12 from '../../assets/images/product_12.png'
import product13 from '../../assets/images/product_13.png'
import product14 from '../../assets/images/product_14.png'
import product15 from '../../assets/images/product_view.png'
import specialImg1 from '../../assets/images/product_10.png'
import specialImg2 from '../../assets/images/product_16.png'
import specialImg3 from '../../assets/images/product_17.png'
import specialImg4 from '../../assets/images/product_18.png'
import productDetails from '../../assets/images/product_15.png'
import userComment from '../../assets/images/auther.jpg'
import sideProductView from '../../assets/images/product_19.png'
import { fontSize } from '@mui/system';
const productList = [
    {
        id: 1,
        productImg: product11
    },
    {
        id: 2,
        productImg: product12
    },
    {
        id: 3,
        productImg: product13
    },
    {
        id: 4,
        productImg: product14
    },
    {
        id: 5,
        productImg: product15
    },
    {
        id: 6,
        productImg: product11
    },
    {
        id: 7,
        productImg: product12
    },
    {
        id: 8,
        productImg: product13
    },
    {
        id: 9,
        productImg: product14
    },
    {
        id: 10,
        productImg: product15
    },
    {
        id: 11,
        productImg: product11
    },
]

const sideItemView = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
]

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
        fontWeight: '700!important'
    }
});

export default function ProductDetails() {
    const classes = useStyles();
    let [showImg, setShowImg] = useState(product11);

    const [component, setComponent] = useState(1);
    const onChangeComponent = (componentId) => {
        setComponent(componentId);
    }

    const breadcrumbs = [
        <Link className={classes.linkBreadcrumb} underline="hover" key="1" color="inherit" href="/">
            Trang Ch???
        </Link>,
        <Link className={classes.linkBreadcrumb} underline="hover" key="2" color="inherit" href="/products">
            S???n ph???m
        </Link>,
        <Link className={classes.linkBreadcrumb} underline="hover" key="2" color="inherit" href="./products">
            Trang s???c
        </Link>,
        <Link className={classes.linkBreadcrumb} underline="hover" key="2" color="inherit" href="/product-details">
            L???c tay
        </Link>,
    ];

    const updateImg = (src) => {
        setShowImg(src);
    }


    const settings = {
        nextArrow:
            <Button disableFocusRipple disableRipple disableElevation fullWidth size="small" variant="outlined"
                sx={{ border: '0px', color: '#789529', '&:hover': { border: '0px', color: '#789529' } }}>
                <KeyboardArrowDownIcon />
            </Button>,
        prevArrow:
            <Button disableFocusRipple disableRipple disableElevation fullWidth size="small" variant="outlined"
                sx={{ border: '0px', color: '#789529', '&:hover': { border: '0px', color: '#789529' } }}>
                <KeyboardArrowUpIcon />
            </Button>,
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        swipeToSlide: false,
    };

    return (
        <Router className={classes.root} sx={{ flexGrow: 1 }}>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <Container>
                <Container >
                    <Box mt={12} mb={3}>
                        <Stack spacing={2}>
                            <Breadcrumbs separator="???" aria-label="breadcrumb">
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </Box>
                    <Divider />
                </Container>
            </Container>
            <Container>
                <Container>
                    <Grid mt={5} container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item xs={4} sm={2} md={1} lg={1} xl={1} textAlign="center">
                            <Slider {...settings} textAlign="center">
                                {productList.map(item => (
                                    <div>
                                        <img src={item.productImg} key={item.id} width="88px" height="fit-content" className={classes.sideScrollItem} onMouseOver={() => { updateImg(item.productImg) }} />
                                    </div>
                                ))}
                            </Slider>
                        </Grid>
                        <Grid item xs={8} sm={10} md={5} lg={6} xl={6} justifyContent="center" alignContent="center" textAlign="center" fullWidth  >
                            <Box style={{ width: '100%', height: '30rem', display: 'flex', border: '1px solid', borderColor: '#f0f0f0f0' }}>
                                <img src={showImg} style={{ margin: 'auto', maxWidth: '100%' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <Box ml={3}>
                                <Typography fontSize="20px" fontWeight="300" style={{ color: '#595959' }}>
                                    L???C TAY TYFFANY XU H?????NG M???I NH???T
                                </Typography>
                                <Box mt={3} mb={3}>
                                    <Typography fontSize="13px" style={{ color: '#595959' }}>
                                        TYFFANY MS 3201
                                    </Typography>
                                </Box>
                                <Typography fontSize="29px" fontWeight="1000" id="fontPriceProductDetail" fontStyle="bold">
                                    950.000<sup>??</sup> <span style={{ fontSize: '20px', color: '#999' }}>999.000<sup>??</sup></span>
                                </Typography>
                                <Box mt={3} mb={3}>
                                    <Typography fontSize="13px" style={{ color: '#' }}>
                                        Kh??ng th??? ph??? nh???n, th???i trang v?? phong c??ch ch??nh l?? ???tuy??n ng??n??? kh??ng l???i m???nh m??? nh???t c???a m???i ng?????i ph??? n???.
                                        Do ????, vi???c mua s???m th???i trang tr??? th??nh ni???m vui, v?? c?? khi l?? ngu???n c???m h???ng v?? t???n ????? ph??i ?????p s???ng vui,
                                        s???ng ?????p h??n trong m???t n???a c??n l???i c???a th??? gi???i. ????? F5 t??? ????? c???a m??nh tr?????c nh???ng xu h?????ng ng??y m???t ??a d???ng h??n
                                        trong th??? gi???i th???i trang, nhi???u ch??? em kh??ng ng???n ng???i chi ti??u ???m???nh tay??? ????? s??? h???u nh???ng m??n ????? y??u th??ch.
                                    </Typography>
                                </Box>
                                <Box mt={2} mb={2}>
                                    <FormControl fullWidth>
                                        <InputLabel id="color" size="small" color="success">M??u</InputLabel>
                                        <Select
                                            labelId="color"
                                            id="demo-simple-select"
                                            label="Age" size="small" color="success">
                                            <MenuItem value={10}>M??u ?????ng</MenuItem>
                                            <MenuItem value={20}>M??u B???c</MenuItem>
                                            <MenuItem value={30}>M??u V??ng</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box mt={2} mb={2}>
                                    <FormControl fullWidth>
                                        <InputLabel id="size" size="small" color="success">Size</InputLabel>
                                        <Select
                                            labelId="size"
                                            id="demo-simple-select"
                                            label="Age" size="small" color="success">
                                            <MenuItem value={10}>13</MenuItem>
                                            <MenuItem value={20}>14</MenuItem>
                                            <MenuItem value={30}>15</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box mt={2} mb={2}>
                                    <FormControl fullWidth>
                                        <TextField size="small" color="success" labelId="Number" inputProps={{ min: 0, max: 100, }} type="number" hidden placeholder="S??? l?????ng" />
                                    </FormControl>
                                </Box>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button className={classes.newProductButton} variant="outlined" size="medium">Mua</Button>
                                    <Button className={classes.newProductButton} variant="outlined" size="medium"><FavoriteBorderIcon /></Button>
                                </CardActions>
                                <Box textAlign="center">
                                    <List>
                                        <FacebookIcon style={{ color: '#0E89F0' }} />
                                        <TwitterIcon style={{ color: '#199AFB' }} />
                                        <LinkedInIcon style={{ color: '#0A66C2' }} />
                                        <PinterestIcon style={{ color: '#BD161B' }} />
                                    </List>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-between" spacing={5}>
                        <Grid item xs={12} sm={12} md={8} lg={9}>
                            <List>
                                <ListItem>
                                    {
                                        component === 1 ?
                                            <Button className={classes.headline} variant="outliend" fullWidth onClick={() => onChangeComponent(1)} sx={{ borderBottom: '1px solid', borderColor: '#789629', borderRadius: '0%' }}>?????C ??I???M N???I B???T</Button> :
                                            <Button className={classes.headline} variant="outliend" fullWidth onClick={() => onChangeComponent(1)} >?????C ??I???M N???I B???T</Button>
                                    }
                                    {
                                        component === 2 ?
                                            <Button className={classes.headline} variant="outliend" fullWidth onClick={() => onChangeComponent(2)} sx={{ borderBottom: '1px solid', borderColor: '#789629', borderRadius: '0%' }}>TH??NG TIN S???N PH???M</Button> :
                                            <Button className={classes.headline} variant="outliend" fullWidth onClick={() => onChangeComponent(2)} >TH??NG TIN S???N PH???M</Button>
                                    }
                                    {
                                        component === 3 ?
                                            <Button className={classes.headline} variant="outliend" fullWidth onClick={() => onChangeComponent(3)} sx={{ borderBottom: '1px solid', borderColor: '#789629', borderRadius: '0%' }}>????NH GI??</Button> :
                                            <Button className={classes.headline} variant="outliend" fullWidth onClick={() => onChangeComponent(3)} >????NH GI??</Button>
                                    }
                                </ListItem>
                            </List>
                            <Divider />
                            {component === 1 ?
                                <Box>
                                    <Grid mt={5} container direction="row" justifyContent="space-between" spacing={5}>
                                        <Grid item xs={12} sm={7} md>
                                            <Typography variant="body2" gutterBottom>
                                                THE MARK OF A LEGEND
                                            </Typography>
                                            <Divider sx={{ width: '20%', m: 1 }} />
                                            <Typography className={classes.specialProductDetail} variant="caption" gutterBottom >
                                                T??? h??o ???????c ghi l?? n??m m?? Tiffany & Co l?? th??nh l???p, b??? s??u t???p mang t??nh bi???u t?????ng n??y cung
                                                c???p cho m???t c??i g???t ?????u v???i qua trong khi th??? hi???n m???t c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v?? ???????ng n??t m?????t m??.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm md>
                                            <img src={specialImg1} />
                                        </Grid>
                                    </Grid>
                                    <Grid mt={5} container direction="row" justifyContent="space-between" spacing={5}>
                                        <Grid item xs={12} sm md>
                                            <img src={specialImg2} />
                                        </Grid>
                                        <Grid item xs={12} sm md textAlign="right" jutifyContent="right">
                                            <Typography variant="body2" gutterBottom>
                                                THE MARK OF A LEGEND
                                            </Typography>
                                            <Divider sx={{ width: '20%', m: 1, marginLeft: 'auto' }} />
                                            <Typography className={classes.specialProductDetail} variant="caption" gutterBottom >
                                                T??? h??o ???????c ghi l?? n??m m?? Tiffany & Co l?? th??nh l???p, b??? s??u t???p mang t??nh bi???u t?????ng n??y cung
                                                c???p cho m???t c??i g???t ?????u v???i qua trong khi th??? hi???n m???t c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v?? ???????ng n??t m?????t m??.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid mt={5} container direction="row" justifyContent="space-between" spacing={5}>
                                        <Grid item xs={12} sm md>
                                            <Typography variant="body2" gutterBottom>
                                                THE MARK OF A LEGEND
                                            </Typography>
                                            <Divider sx={{ width: '20%', m: 1 }} />
                                            <Typography className={classes.specialProductDetail} variant="caption" gutterBottom >
                                                T??? h??o ???????c ghi l?? n??m m?? Tiffany & Co l?? th??nh l???p, b??? s??u t???p mang t??nh bi???u t?????ng n??y cung
                                                c???p cho m???t c??i g???t ?????u v???i qua trong khi th??? hi???n m???t c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v?? ???????ng n??t m?????t m??.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm md>
                                            <img src={specialImg3} />
                                        </Grid>
                                    </Grid>
                                    <Grid mt={5} container direction="row" justifyContent="space-between" spacing={5}>
                                        <Grid item xs={12} sm md>
                                            <img src={specialImg4} />
                                        </Grid>
                                        <Grid item xs={12} sm md textAlign="right" jutifyContent="right">
                                            <Typography variant="body2" gutterBottom>
                                                THE MARK OF A LEGEND
                                            </Typography>
                                            <Divider sx={{ width: '20%', m: 1, marginLeft: 'auto' }} />
                                            <Typography className={classes.specialProductDetail} variant="caption" gutterBottom >
                                                T??? h??o ???????c ghi l?? n??m m?? Tiffany & Co l?? th??nh l???p, b??? s??u t???p mang t??nh bi???u t?????ng n??y cung
                                                c???p cho m???t c??i g???t ?????u v???i qua trong khi th??? hi???n m???t c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v?? ???????ng n??t m?????t m??.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box> : component === 2 ?
                                    <Box justifyContent="center">
                                        <img src={productDetails} />
                                        <br />
                                        <Typography className={classes.specialProductDetail} variant="caption">
                                            Kh??ng th??? ph??? nh???n, th???i trang v?? phong c??ch ch??nh l?? ???tuy??n ng??n??? kh??ng l???i m???nh m??? nh???t c???a m???i ng?????i ph??? n???.
                                            Do ????, vi???c mua s???m th???i trang tr??? th??nh ni???m vui, v?? c?? khi l?? ngu???n c???m h???ng v?? t???n ????? ph??i ?????p s???ng vui,
                                            s???ng ?????p h??n trong m???t n???a c??n l???i c???a th??? gi???i. ????? F5 t??? ????? c???a m??nh tr?????c nh???ng xu h?????ng ng??y m???t ??a d???ng h??n trong th??? gi???i th???i trang,
                                            nhi???u ch??? em kh??ng ng???n ng???i chi ti??u ???m???nh tay??? ????? s??? h???u nh???ng m??n ????? y??u th??ch.
                                        </Typography>
                                    </Box> :
                                    <Box mt={12}>
                                        <Typography className={classes.headline} gutterBottom>
                                            H??Y ????? L???I NH???N X??T C???A B???N
                                        </Typography>
                                        <Divider />
                                        <ListItemIcon sx={{ color: '#999', fontSize: '20px' }}>
                                            <FavoriteIcon />
                                            <FavoriteIcon />
                                            <FavoriteIcon />
                                            <FavoriteIcon />
                                            <FavoriteIcon />
                                        </ListItemIcon>
                                        <TextField size="small" fullWidth multiline minRows={6} label="N???i dung" row={5} sx={{ my: 3 }} />
                                        <Button variant="outlined" color="success">
                                            Nh???n X??t
                                        </Button>
                                        <Box mt={5}>
                                            <Typography className={classes.headline} gutterBottom>
                                                NH???N X??T G???N ????Y
                                            </Typography>
                                            <Divider />

                                            <ListItem sx={{ pl: 0, mt: 2 }}>
                                                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>
                                                    L???C TAY TYFFANY XU H?????NG M???I NH???T
                                                </Typography>
                                                <ListItemIcon sx={{ color: '#BE1621', fontSize: '14px', ml: 3 }}>
                                                    <FavoriteIcon />
                                                    <FavoriteIcon />
                                                    <FavoriteIcon />
                                                    <FavoriteIcon />
                                                    <FavoriteIcon />
                                                </ListItemIcon>
                                            </ListItem>
                                            <Typography variant="body2">
                                                Nh???n x??t b???i<span style={{ color: '#789529' }}> Th??y Tr??c</span>  v??o ng??y 18-8-2020
                                            </Typography>
                                            <Box mt={3}>
                                                <ListItem sx={{ pl: 0, }}>
                                                    <ListItemIcon>
                                                        <Avatar alt="Remy Sharp" src={userComment} sx={{ width: 90, height: 90, mr: 3 }} />
                                                    </ListItemIcon>
                                                    <Typography variant="body1" >
                                                        ?????p l???m lu??n!!
                                                    </Typography>
                                                </ListItem>

                                            </Box>


                                        </Box>
                                    </Box>
                            }
                        </Grid>
                        <Grid item md={4} lg mt={3} sx={{display:{ xs:"none",sm:"none",md:"block"}}}>
                            <Box>
                                <Typography className={classes.headline} sx={{ mb: 1.5, pb: 2 }}>
                                    S???N PH???M B??N CH???Y
                                </Typography>
                                <Divider />
                                {sideItemView.map(item => (
                                    <ListItem sx={{ pl: 0, mt: 3 }} id={item.id}>
                                        <ListItemIcon>
                                            <Avatar alt="Remy Sharp" src={sideProductView} sx={{ width: 80, height: 80, mr: 1, borderRadius: 0 }} />
                                        </ListItemIcon>
                                        <Typography variant="body2" >
                                            M??? ph???m ch??u ??u
                                            <ListItemIcon sx={{ color: '#000', m: 0, p: 0, mt: 1, mb: 1 }}>
                                                <FavoriteIcon fontSize="3px" />
                                                <FavoriteIcon fontSize="3px" />
                                                <FavoriteIcon fontSize="3px" />
                                                <FavoriteIcon fontSize="3px" />
                                                <FavoriteIcon fontSize="3px" />
                                                <span style={{ fontSize: '12px', color: '#999' }}>
                                                    (4 l?????t mua)
                                                </span>
                                            </ListItemIcon>
                                            <Typography id="fontPriceProductDetail" fontWeight="1000">
                                                355.000<sup>??</sup>
                                            </Typography>
                                        </Typography>
                                    </ListItem>
                                ))}
                            </Box>
                            <Box mt={5}>
                                <Typography className={classes.headline} gutterBottom>
                                    S???N PH???M B??N CH???Y
                                </Typography>
                                <Divider />
                                {sideItemView.map(item => (
                                    <ListItem sx={{ pl: 0, mt: 3 }} id={item.id}>
                                        <ListItemIcon>
                                            <Avatar alt="Remy Sharp" src={sideProductView} sx={{ width: 80, height: 80, mr: 1, borderRadius: 0 }} />
                                        </ListItemIcon>
                                        <Typography variant="body2" >
                                            M??? ph???m ch??u ??u
                                            <ListItemIcon sx={{ color: '#000', m: 0, p: 0, mt: 1, mb: 1 }}>
                                                <FavoriteIcon fontSize="3px" />
                                                <FavoriteIcon fontSize="3px" />
                                                <FavoriteIcon fontSize="3px" />
                                                <FavoriteIcon fontSize="3px" />
                                                <FavoriteIcon fontSize="3px" />
                                                <span style={{ fontSize: '12px', color: '#999' }}>
                                                    (4 l?????t mua)
                                                </span>
                                            </ListItemIcon>
                                            <Typography id="fontPriceProductDetail" fontWeight="1000">
                                                355.000<sup>??</sup>
                                            </Typography>
                                        </Typography>
                                    </ListItem>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Router >
    );
}
