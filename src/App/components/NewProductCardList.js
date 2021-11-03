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
import product1 from '../../assets/images/product_1.jpg'
import product2 from '../../assets/images/product_2.jpg'
import product3 from '../../assets/images/product_3.jpg'
import product4 from '../../assets/images/product_4.jpg'
import product5 from '../../assets/images/product_5.jpg'
import product6 from '../../assets/images/product_6.jpg'
import product8 from '../../assets/images/product_8.png'
import product9 from '../../assets/images/product_9.png'
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
});

export default function NewProductCardList() {
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
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const itemList = [
        { img: product1 },
        { img: product2 },
        { img: product3 },
        { img: product4 },
        { img: product5 },
        { img: product6 },
        { img: product8 },
        { img: product9 },
    ]
    return (
        <div className={classes.root} sx={{ flexGrow: 1 }}>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <Slider {...settings}>
                {itemList.map(item => (
                    <div>
                        <Card className={classes.card} raised={false} elevation={0} sx={{ maxWidth: 210 }} >
                            <CardMedia component="img" alt="green iguana" height="220" image={item.img} />
                            <CardContent>
                                <Typography gutterBottom variant="body2" style={{ fontSize: 'small', color: '#999' }}>
                                    TYFFANY
                                </Typography>
                                <Typography gutterBottom variant="h6" fontSize="medium">
                                    Mỹ phẩm châu Âu
                                </Typography>
                            </CardContent>
                            <Divider variant="middle" textAlign="center" />
                            <CardContent>
                                <span>
                                    <Typography variant="body1" id="newProduct" style={{ color: '#999', display: 'inline-block', marginRight: '5px', color: '#789529', fontWeight: 'bold' }}>
                                        355.000<sup>đ</sup>
                                    </Typography>
                                </span>
                                <span>
                                    <Typography variant="body2" id="newProduct" style={{ color: '#999', display: 'inline-block', fontWeight: 'bold' }}>
                                        450.000<sup>đ</sup>
                                    </Typography>
                                </span>
                                <div style={{ margin: 0, height: 20 }}>
                                    <KeyboardArrowDownIcon style={{ color: '#789529' }} />
                                </div>
                                <CardActions className={classes.cardActions} sx={{ justifyContent: 'center' }}>
                                    <Button className={classes.newProductButton} variant="outlined" size="small">Mua</Button>
                                    <Button className={classes.newProductButton} variant="outlined" size="small"><FavoriteBorderIcon /></Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div >
    );
}
