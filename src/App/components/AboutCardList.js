import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
import Slider from "react-slick";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../styles/pages/Home.css'

import planeIcon from '../../assets/images/plane.svg'
import giftIcon from '../../assets/images/gift.svg'
import starIcon from '../../assets/images/star.svg'
import layerImg from '../../assets/images/Layer.png'
import newProductLayer from '../../assets/images/Layer_product_new.png'
import ItemMother1 from '../../assets/images/item-mother-1.png'
import ItemMother2 from '../../assets/images/item-mother-2.png'
import ItemMother3 from '../../assets/images/item-mother-3.png'
import ItemMother4 from '../../assets/images/item-mother-4.png'
import ringImg from '../../assets/images/item_2--right--img.png'
import comboTeaImg from '../../assets/images/Item_3--left--img.jpg'
import feedBackImgBackground from '../../assets/images/feedback--background.png'
import feedBackImg1 from '../../assets/images/feedback_1--img.png'
import feedBackImg2 from '../../assets/images/feedback_2--img.png'
import hotProductBackground from '../../assets/images/hot-product--background.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        overflow: 'hidden',
        margin: '0!important',
        padding: '0!important',
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
    tabPanel: {
        backgroundImage: `url(${feedBackImgBackground})`,
        backgroundSize: '600px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',

    },
});

const dotTabEnable = (
    <div style={{ width: '7px', height: '7px', background: '#404040' }}></div>
);
const dotTabDisable = (
    <div style={{ width: '7px', height: '7px', background: '#C0C0C0' }}></div>
);

export default function AboutCardList() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    var settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        appendDots: dots => (
            <div
                style={{
                    // position: 'absolute',
                    // marginBottom:'30%'
                }}
            >
                <ul style={{ margin: "0px", minWidth: 10 }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className={classes.tabPanel} value={value} index={0} dir={theme.direction}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: { xs: 'rgb(255,255,255,0.7)!important', sm: 'rgb(255,255,255,0)!important' },height: { xs: '0', sm: '196px' } }}>
                            <Grid item xs={6} sm={3} md={2} lg={2} justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                                <img style={{ minWidth: 119, }} alt="feedBackImg1" src={feedBackImg1} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                            </Grid>
                            <Grid item xs={12} sm={9} md={10} lg={10} width="100%" >
                                <Typography variant="body1" width={{ xs: '100%', sm: '100%', md: '75%', lg: '65%' }} sx={{ textAlign: { xs: 'center', sm: 'justify' } }}>
                                    "Vẫn là vẻ bề ngoài vô cùng đơn giản <br /> với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} md={2} lg={2} sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                            </Grid>
                            <Grid xs={12} sm={9} md={10} lg={10} sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                                <Typography className={classes.tabItem} variant="body2" mt={0} >
                                    TUTILE<span style={{ color: '#999', fontStyle: 'italic' }}> _ Giám đốc phát triển sản phẩm</span>
                                </Typography>
                            </Grid>
                            <Grid mt={5} item xs={5} justifyContent="center" alignItems="center" sx={{ display: { xs: 'flex', sm: 'none' }, }}>
                                <img width="80px" alt="feedBackImg1" src={feedBackImg1} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                            </Grid>
                            <Grid xs={7} sx={{ display: { xs: 'flex', sm: 'none' }, }}>
                                <Typography className={classes.tabItem} variant="body2" mt={5} >
                                    TUTILE<div style={{ color: '#999', fontStyle: 'italic' }}>Giám đốc phát triển sản phẩm</div>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div>
                    <div className={classes.tabPanel} value={value} index={0} dir={theme.direction}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: { xs: 'rgb(255,255,255,0.7)!important', sm: 'rgb(255,255,255,0)!important' },height: { xs: '0', sm: '196px' } }}>
                            <Grid item xs={6} sm={3} md={2} lg={2} justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                                <img style={{ minWidth: 119, }} alt="feedBackImg1" src={feedBackImg1} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                            </Grid>
                            <Grid item xs={12} sm={9} md={10} lg={10} width="100%" >
                                <Typography variant="body1" width={{ xs: '100%', sm: '100%', md: '75%', lg: '65%' }} sx={{ textAlign: { xs: 'center', sm: 'justify' }, }}>
                                    "Vẫn là vẻ bề ngoài vô cùng đơn giản <br /> với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} md={2} lg={2} sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                            </Grid>
                            <Grid xs={12} sm={9} md={10} lg={10} sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                                <Typography className={classes.tabItem} variant="body2" mt={0} >
                                    TUTILE<span style={{ color: '#999', fontStyle: 'italic' }}> _ Giám đốc phát triển sản phẩm</span>
                                </Typography>
                            </Grid>
                            <Grid mt={5} item xs={5} justifyContent="center" alignItems="center" sx={{ display: { xs: 'flex', sm: 'none' }, }}>
                                <img width="80px" alt="feedBackImg1" src={feedBackImg1} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                            </Grid>
                            <Grid xs={7} sx={{ display: { xs: 'flex', sm: 'none' }, }}>
                                <Typography className={classes.tabItem} variant="body2" mt={5} >
                                    TUTILE<div style={{ color: '#999', fontStyle: 'italic' }}>Giám đốc phát triển sản phẩm</div>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div>
                    <div className={classes.tabPanel} value={value} index={0} dir={theme.direction}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: { xs: 'rgb(255,255,255,0.7)!important', sm: 'rgb(255,255,255,0)!important' },height: { xs: '0', sm: '196px' } }}>
                            <Grid item xs={6} sm={3} md={2} lg={2} justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                                <img style={{ minWidth: 119, }} alt="feedBackImg2" src={feedBackImg2} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                            </Grid>
                            <Grid item xs={12} sm={9} md={10} lg={10} width="100%" >
                                <Typography variant="body1" width={{ xs: '100%', sm: '100%', md: '75%', lg: '65%' }} sx={{ textAlign: { xs: 'center', sm: 'justify' } }}>
                                    "Vẫn là vẻ bề ngoài vô cùng đơn giản <br /> với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} md={2} lg={2} sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                            </Grid>
                            <Grid xs={12} sm={9} md={10} lg={10} sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                                <Typography className={classes.tabItem} variant="body2" mt={0} >
                                    TUTILE<span style={{ color: '#999', fontStyle: 'italic' }}> _ Giám đốc phát triển sản phẩm</span>
                                </Typography>
                            </Grid>
                            <Grid mt={5} item xs={5} justifyContent="center" alignItems="center" sx={{ display: { xs: 'flex', sm: 'none' }, }}>
                                <img width="80px" alt="feedBackImg2" src={feedBackImg2} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                            </Grid>
                            <Grid xs={7} sx={{ display: { xs: 'flex', sm: 'none' }, }}>
                                <Typography className={classes.tabItem} variant="body2" mt={5} >
                                    TUTILE<div style={{ color: '#999', fontStyle: 'italic' }}>Giám đốc phát triển sản phẩm</div>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
