import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import NewProductCardList from '../components/NewProductCardList';
import MediaList from '../components/MediaList';
import AboutCardList from '../components/AboutCardList';

import logo from '../../assets/images/logo.png'
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
import footFeedback from '../../assets/images/blog-img.png'

import '../../styles/pages/Home.css'

const useStyles = makeStyles({
  root: {
  },
  banner: {
    margin: 0,
    width: '100%',
    background: '#F0F0F0',

  },
  title: {
    color: '#789529',
    fontWeight: '100!important',

  },
  subTitle: {
    fontSize: '25px!important',
    fontWeight: '300!important',
  },
  titlePrice: {
    // fontSize: '45px!important',
    color: '#789529',
    fontWeight: '100!important',
  },
  tabPanel: {
    backgroundImage: `url(${feedBackImgBackground})`,
    backgroundSize: '600px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    height: '196px'
  },
  newProduct: {
    // fontStyle:'italic'
  },
  tabItem: {
    fontWeight: '500!important',
    color: '#999',
    '&:hover': {
      color: '#789529'
    }
  },
  footTitle: {
    fontSize: '17px!important',
    fontWeight: '700!important'
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  inputField: {
    borderColor: '#789529!important',
    '&:focus': {
      borderColor: '#789529!important'
    }
  },
  tag: {
    margin: '5px 0 5px 0',
    '&:hover': {
      color: '#fff!important',
      backgroundColor: '#789529!important'
    }
  }
});
const dotTabEnable = (
  <div style={{ width: '7px', height: '7px', background: '#000' }}></div>
);
const dotTabDisable = (
  <div style={{ width: '7px', height: '7px', background: '#999' }}></div>
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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



export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router className={classes.root} sx={{ flexGrow: 1 }}>
      <Grid className={classes.banner} >
        <Grid >
          <Grid container justifyContent="space-between" alignItems="center" textAlign="center">
            <Grid item xs={12} sm={6} md={6} lg={6} >
              <Grid item xs={12} sm={12} md={12} lg={12} >
                <img src={newProductLayer} width={{ xs: "345px", sm: "330px", md: "377px", lg: "377px" }} style={{ marginTop: "100px" }} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography className={classes.title} id="fontTitle" fontSize={{ xs: '50px', sm: '64px', md: '70px', lg: '103px', xl: '120px' }}>
                  Green Vera
                </Typography>
                <Typography style={{ fontSize: '19px', color: '#6c3c33' }} id="fontPrice">
                  S???n ph???m tinh d???u d?????ng da m???i nh???t c???a Mandala
                </Typography>
                <Typography className={classes.titlePrice} id="fontPrice" sx={{ fontSize: { xs: "30px", sm: "30px", md: "45px" } }} gutterBottom>
                  GI?? CH??? 750.000 <sup>??</sup>
                </Typography>
                <Typography variant="h5" fontWeight="300" id="fontPrice">
                  MUA H??NG
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} textAlign="left">
              <img src={layerImg} style={{ display: "flex", objectFit: "cover", objectPosition: "10%", height: "840px", width: "100%" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid mt={5} container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={4} md={4} lg={4} textAlign="center" >
          <img src={planeIcon} />
          <Typography variant="body1" >
            Free domestic shipping
          </Typography>
        </Grid>
        <Divider width="100%" style={{ marginTop: '10px', marginBottom: '10px' }} sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }} />
        <Grid item xs={12} sm={4} md={4} lg={4} textAlign="center" sx={{ borderLeft: '1px solid', borderRight: '1px solid', borderColor: '#c2c2c2' }}>
          <img src={giftIcon} />
          <Typography variant="body1">
            Give away a gift worth 350,000 VND
          </Typography>
        </Grid>
        <Divider width="100%" style={{ marginTop: '10px', marginBottom: '10px' }} sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }} />
        <Grid item xs={12} sm={4} md={4} lg={4} textAlign="center" >
          <img src={starIcon} />
          <Typography variant="body1">
            30% off for orders over 5,000,000 VND
          </Typography>
        </Grid>
      </Grid>

      <Container>
        <Grid mt={5} container direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={ItemMother1} width="100%" />
            <img src={ItemMother2} width="100%" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={ringImg} width="100%" />
          </Grid>
        </Grid>
        <Grid mt={0} container direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={comboTeaImg} width="100%" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={ItemMother3} width="100%" />
            <img src={ItemMother4} width="100%" />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box mt={10}>
          <AboutCardList />
        </Box>
      </Container>
      <Grid mt={5} container justifyContent="center" textAlign="center" height={{ xs: "800px", sm: "650px", md: "700px", lg: "800px" }} style={{ borderTop: '1px', backgroundImage: `url(${hotProductBackground})`, backgroundRepeat: 'no-repeat', }}>
        <Container maxWidth>
          <Container maxWidth="md">
            <Grid mt={{ xs: 2, md: 5, lg: 7  }} container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item xs={12} sm mdtextAlign="center">
                <Typography fontSize={{ xs: "25px", sm: "25px", md: "28px" }} id="newProduct" style={{ color: '#999', }}>
                  S???n ph???m m???i
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={12} sm textAlign="center" style={{ position: "relative" }}>
                <Typography id="newProduct" fontSize={{ xs: "30px", sm: "30px", md: "34px", lg: "38px" }} style={{ color: '#789529', }}>
                  S???n ph???m b??n ch???y
                </Typography>
                <Grid container direction="row" justifyContent="center" alignItems="center" style={{ position: 'absolute', }} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                  <Grid item xs dir="rtl" >
                    <span style={{ width: '100%', height: '1px', background: '#999', display: 'inline-block', top: '12px' }}></span>
                  </Grid>
                  <Grid item xs>
                    <span style={{ display: 'inline-block' }}>
                  //////////
                    </span>
                  </Grid>
                  <Grid item xs>
                    <span style={{ width: '100%', height: '1px', background: '#999', display: 'inline-block', top: '12px' }}></span>
                  </Grid >
                </Grid>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={12} sm textAlign="center">
                <Typography fontSize={{ xs: "25px", sm: "25px", md: "28px" }} id="newProduct" style={{ color: '#999', }}>
                  S???n ph???m ?????c bi???t
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ position: 'relative', }} sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <Grid item xs dir="rtl" >
                <span style={{ width: '100%', height: '1px', background: '#999', display: 'inline-block', top: '12px' }}></span>
              </Grid>
              <Grid item xs>
                <span style={{ display: 'inline-block' }}>
                  //////////
                </span>
              </Grid>
              <Grid item xs>
                <span style={{ width: '100%', height: '1px', background: '#999', display: 'inline-block', top: '12px' }}></span>
              </Grid >
            </Grid>
            <Grid mt={{ xs: 3, md: 5, lg:10 }} mb={{ xs: 3, md: 7, lg: 8 }} container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item xs={6} sm={4} md>
                <Typography className={classes.tabItem} variant="body2" id="mypham">
                  M??? ph???m
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md>
                <Typography className={classes.tabItem} variant="body2">
                  Ch??m s??c da
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md >
                <Typography className={classes.tabItem} variant="body2">
                  Gi??nh cho t??c
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md>
                <Typography className={classes.tabItem} variant="body2">
                  N?????c hoa
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md>
                <Typography className={classes.tabItem} variant="body2">
                  Trang s???c
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md>
                <Typography className={classes.tabItem} variant="body2">
                  Qu?? T???ng
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <NewProductCardList />
        </Container>
      </Grid >
      <Container style={{ height: 'fit-content' }}>
        <MediaList />
        <Grid mt={1} container direction="row" justifyContent="space-between" spacing={0}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign="center">
            <Container >
              <Typography className={classes.footTitle} variant="h6" gutterBottom>
                V??? CH??NG T??I
              </Typography>
              <span>/////</span>
              <Grid container justifyContent="center" spacing={1}>
                <Divider width="100%" />
              </Grid>
              <Box mt={4} mb={4}>
                <img src={logo} />
              </Box>
              <Grid container textAlign="left">
                <Typography variant="caption" fontWeight="1000" fontSize="12px" gutterBottom>
                  GI???I THI???U CHUNG V??? M??? PH???M HANDMADE MANDALA
                </Typography>
                <Typography variant="caption" fontWeight="300" fontSize="12px" gutterBottom>
                  Hi, ch??o c??c n??ng ... sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c,
                  khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.Hi, ch??o c??c n??ng ...
                  sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c,
                  khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.Hi, ch??o c??c n??ng ...
                  sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c,
                  khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.
                </Typography>
              </Grid>
              <Box mt={2} textAlign='left'>
                <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./introduce">
                  Xem th??m
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign="center">
            <Container >
              <Typography className={classes.footTitle} variant="h6" gutterBottom>
                BLOG
              </Typography>
              <span>/////</span>
              <Grid container justifyContent="center" spacing={1}>
                <Divider width="100%" />
              </Grid>
              <Box mt={4} mb={2}>
                <img src={footFeedback} width="100%" />
              </Box>
              <Grid container textAlign="left">
                <Typography variant="caption" fontWeight="1000" fontSize="12px">
                  REVIEW SON KEM BOURJOIS VELVET
                </Typography>
                <Box mt={1} mb={1} sx={{ width: '100%' }}>
                  <Divider width="100%" />
                </Box>
                <Typography variant="caption" fontWeight="300" fontSize="12px" gutterBottom>
                  Hi, ch??o c??c n??ng ... sau kh?? nhi???u l???i h???a h??o th?? h??m nay t??? quay l???i h??m n??ng c??i Blog n??y v??o m???t ng??y ?????u h?? n??ng oi b???c,
                  khi m?? d??n t??nh x?? nhau ??i t???m Free ????? gi???i nhi???t.
                </Typography>
                <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./">
                  B???i NamTran (27/05/2015)
                </Typography>
                <Box mt={1} mb={1} sx={{ width: '100%' }}>
                  <Divider width="100%" />
                </Box>
                <Grid container >
                  <Grid item xs={6}>
                    <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./news">
                      ?????c th??m <span><ArrowForwardIosIcon fontSize="1px" /></span>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./">
                      23 B??nh lu???n
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign="center">
            <Container>
              <Typography className={classes.footTitle} variant="h6" gutterBottom>
                G???I EMAIL CHO CH??NG T??I
              </Typography>
              <span>/////</span>
              <Grid container justifyContent="center" spacing={1}>
                <Divider width="100%" />
              </Grid>
              <Container maxWidth style={{ padding: '0px' }}>
                <Box mt={4} mb={2}>
                  <TextField color="success" label="Email c???a b???n" variant="outlined" autoComplete fullWidth size="small" />
                </Box>
                <Typography variant="caption" fontWeight="300" fontSize="12px" gutterBottom>
                  G???i email ????? nh???n nh???ng ??u ????i m???i nh???t
                </Typography>
                <Box mt={2} mb={4}>
                  <Button variant="contained" size="small" style={{ backgroundColor: '#000', boxShadow: 'none' }}>
                    G???I
                  </Button>
                </Box>
              </Container>
              <Typography className={classes.footTitle} variant="h6" gutterBottom>
                G???I EMAIL CHO CH??NG T??I
              </Typography>
              <span>/////</span>
              <Grid container justifyContent="center" spacing={1}>
                <Divider width="100%" />
              </Grid>
              <Box mt={2} mb={12} textAlign="left">
                {tagList.map(item => (
                  < Chip className={classes.tag} label={item.name} variant="outlined" onClick={() => { console.log('') }} sx={{ m: 0.5 }} />
                ))}
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>

    </Router >
  );
}
