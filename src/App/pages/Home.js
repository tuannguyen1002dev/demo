import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
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
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import NewProductCardList from '../components/NewProductCardList';
import MediaList from '../components/MediaList';

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
    fontSize: '45px!important',
    color: '#789529',
    fontWeight: '100!important',
  },
  tabPanel: {
    backgroundImage: `url(${feedBackImgBackground})`,
    backgroundSize: '600px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '550px -30px',
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
  { name: 'Nước hoa' },
  { name: 'Giày' },
  { name: 'Trẻ em' },
  { name: 'Thời trang nữ' },
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
        <Container maxWidth>
          <Grid container justifyContent="space-between" alignItems="center" textAlign="center">
            <Grid item xs={12} sm={12} md={6} lg={6} >
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{display:{xs:"flex",sm:"flex",md:"none"}}}>
                <img src={newProductLayer} width="100%" />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{display:{xs:"none",sm:"none",md:"block"}}}>
                <img src={newProductLayer} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography className={classes.title} id="fontTitle" fontSize={{ xs: '50px', sm: '64px', md: '70px', lg: '103px', xl: '120px' }}>
                  Green Vera
                </Typography>
                <Typography style={{ fontSize: '19px', color: '#6c3c33' }} id="fontPrice">
                  Sản phẩm tinh dầu dưỡng da mới nhất của Mandala
                </Typography>
                <Typography className={classes.titlePrice} id="fontPrice" gutterBottom>
                  GIÁ CHỈ 750.000 <sup>đ</sup>
                </Typography>
                <Typography variant="h5" fontWeight="300" id="fontPrice">
                  MUA HÀNG
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left">
              <img src={layerImg} width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid mt={5} container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={12} md={4} lg={4} textAlign="center" >
          <img src={planeIcon} />
          <Typography variant="body1" >
            Free domestic shipping
          </Typography>
        </Grid>
        <Divider width="100%" style={{ marginTop: '10px', marginBottom: '10px' }} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }} />
        <Grid item xs={12} sm={12} md={4} lg={4} textAlign="center" sx={{ borderLeft: '1px solid', borderRight: '1px solid', borderColor: '#c2c2c2' }}>
          <img src={giftIcon} />
          <Typography variant="body1">
            Give away a gift worth 350,000 VND
          </Typography>
        </Grid>
        <Divider width="100%" style={{ marginTop: '10px', marginBottom: '10px' }} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }} />
        <Grid item xs={12} sm={12} md={4} lg={4} textAlign="center" >
          <img src={starIcon} />
          <Typography variant="body1">
            30% off for orders over 5,000,000 VND
          </Typography>
        </Grid>
      </Grid>

      <Container>
        <Grid mt={5} container direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={ItemMother1} width="100%" />
            <img src={ItemMother2} width="100%" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={ringImg} width="100%" />
          </Grid>
        </Grid>
        <Grid mt={0} container direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={comboTeaImg} width="100%" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={ItemMother3} width="100%" />
            <img src={ItemMother4} width="100%" />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box mt={10}>
          <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChange} transitionDuration={1000}>
            <TabPanel className={classes.tabPanel} value={value} index={0} dir={theme.direction}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={12} sm={12} md={2} lg={2} justifyContent="center" alignItems="center" textAlign="center">
                  <img style={{ minWidth: 119, }} alt="feedBackImg1" src={feedBackImg1} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={10} width="100%" >
                  <Typography variant="body1" width={{ xs: '100%', sm: '100%', md: '75%', lg: '65%' }}>
                    "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                  </Typography>
                  <Typography className={classes.tabItem} variant="body2" mt={5}>
                    TUTILE <span style={{ color: '#999', fontStyle: 'italic' }}> _ Giám đốc phát triển sản phẩm</span>
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1} dir={theme.direction}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={12} sm={12} md={2} lg={2} justifyContent="center" alignItems="center" >
                  <img style={{ minWidth: 119, }} alt="feedBackImg1" src={feedBackImg1} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={10} width="100%" >
                  <Typography variant="body1" width="65%" >
                    "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                  </Typography>
                  <Typography className={classes.tabItem} variant="body2" mt={5}>
                    TUTILE <span style={{ color: '#999', fontStyle: 'italic' }}> _ Giám đốc phát triển sản phẩm</span>
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2} dir={theme.direction}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={12} sm={12} md={2} lg={2} justifyContent="center" alignItems="center" >
                  <img style={{ minWidth: 119, }} alt="feedBackImg1" src={feedBackImg2} style={{ border: '1px solid', borderRadius: '100%', borderColor: '#789529', padding: 10 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={10} width="100%" >
                  <Typography variant="body1" width="65%" >
                    "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                  </Typography>
                  <Typography className={classes.tabItem} variant="body2" mt={5}>
                    TUTILE <span style={{ color: '#999', fontStyle: 'italic' }}> _ Giám đốc phát triển sản phẩm</span>
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
          </SwipeableViews>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={12} md={2} lg={2}>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { display: "none", }, }}>
                <Tab style={{ minWidth: 10 }} label={value === 0 ? dotTabEnable : dotTabDisable} disableFocusRipple={true} disableRipple={true} />
                <Tab style={{ minWidth: 10, padding: 0 }} label={value === 1 ? dotTabEnable : dotTabDisable} disableFocusRipple={true} disableRipple={true} />
                <Tab style={{ minWidth: 10 }} label={value === 2 ? dotTabEnable : dotTabDisable} disableFocusRipple={true} disableRipple={true} />
              </Tabs>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Grid mt={5} container justifyContent="center" textAlign="center" heigh={{ xs: "900px", sm: "900px", md: "800px", lg: "700px" }} style={{ borderTop: '1px', backgroundImage: `url(${hotProductBackground})`, backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', }}>
        <Container maxWidth>
          <Container maxWidth="md">
            <Grid mt={5} container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item xs={12} sm={12} mdtextAlign="center">
                <Typography variant="h5" id="newProduct" style={{ color: '#999', }}>
                  Sản phẩm mới
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={12} sm={12} md textAlign="center" style={{ position: "relative" }}>
                <Typography variant="h4" id="newProduct" style={{ color: '#789529', }}>
                  Sản phẩm bán chạy
                </Typography>
                <Grid container direction="row" justifyContent="center" alignItems="center" style={{ position: 'absolute', }} sx={{ display: { xs: 'none', sm: 'none' } }}>
                  <Grid item xs dir="rtl" >
                    <span style={{ width: '100px', height: '1px', background: '#999', display: 'inline-block', top: '12px' }}></span>
                  </Grid>
                  <Grid item xs>
                    <span style={{ display: 'inline-block' }}>
                  //////////
                    </span>
                  </Grid>
                  <Grid item xs>
                    <span style={{ width: '100px', height: '1px', background: '#999', display: 'inline-block', top: '12px' }}></span>
                  </Grid >
                </Grid>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={12} sm={12} md textAlign="center">
                <Typography variant="h5" id="newProduct" style={{ color: '#999', }}>
                  Sản phẩm đặc biệt
                </Typography>
              </Grid>
            </Grid>
            <Grid mt={7} container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item xs={12} sm={4} md>
                <Typography className={classes.tabItem} variant="body2" id="mypham">
                  Mỹ phẩm
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem color="#999" width="3px" style={{ borderRadius: '100%' }} />
              <Grid item xs={12} sm={4} md>
                <Typography className={classes.tabItem} variant="body2">
                  Chăm sóc da
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem color="#999" width="3px" style={{ borderRadius: '100%' }} />
              <Grid item xs={12} sm={4} md >
                <Typography className={classes.tabItem} variant="body2">
                  Giành cho tóc
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem color="#999" width="3px" style={{ borderRadius: '100%' }} />
              <Grid item xs={12} sm={4} md>
                <Typography className={classes.tabItem} variant="body2">
                  Nước hoa
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem color="#999" width="3px" style={{ borderRadius: '100%' }} />
              <Grid item xs={12} sm={4} md>
                <Typography className={classes.tabItem} variant="body2">
                  Trang sức
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem color="#999" width="3px" style={{ borderRadius: '100%' }} />
              <Grid item xs={12} sm={4} md>
                <Typography className={classes.tabItem} variant="body2">
                  Quà Tặng
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
                VỀ CHÚNG TÔI
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
                  GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA
                </Typography>
                <Typography variant="caption" fontWeight="300" fontSize="12px" gutterBottom>
                  Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                  khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các nàng ...
                  sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                  khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các nàng ...
                  sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                  khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                </Typography>
              </Grid>
              <Box mt={2} textAlign='left'>
                <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./introduce">
                  Xem thêm
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
                  Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                  khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                </Typography>
                <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./">
                  Bởi NamTran (27/05/2015)
                </Typography>
                <Box mt={1} mb={1} sx={{ width: '100%' }}>
                  <Divider width="100%" />
                </Box>
                <Grid container >
                  <Grid item xs={6}>
                    <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./news">
                      Đọc thêm <span><ArrowForwardIosIcon fontSize="1px" /></span>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <Typography className={classes.link} variant="caption" fontWeight="300" fontSize="11px" component="a" href="./">
                      23 Bình luận
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign="center">
            <Container>
              <Typography className={classes.footTitle} variant="h6" gutterBottom>
                GỬI EMAIL CHO CHÚNG TÔI
              </Typography>
              <span>/////</span>
              <Grid container justifyContent="center" spacing={1}>
                <Divider width="100%" />
              </Grid>
              <Container maxWidth style={{ padding: '0px' }}>
                <Box mt={4} mb={2}>
                  <TextField color="success" label="Email của bạn" variant="outlined" autoComplete fullWidth size="small" />
                </Box>
                <Typography variant="caption" fontWeight="300" fontSize="12px" gutterBottom>
                  Gửi email để nhận những ưu đãi mới nhất
                </Typography>
                <Box mt={2} mb={4}>
                  <Button variant="contained" size="small" style={{ backgroundColor: '#000', boxShadow: 'none' }}>
                    GỬI
                  </Button>
                </Box>
              </Container>
              <Typography className={classes.footTitle} variant="h6" gutterBottom>
                GỬI EMAIL CHO CHÚNG TÔI
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
