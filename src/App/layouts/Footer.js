import React, { useState, useEffect } from 'react';
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

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import footerImg from '../../assets/images/footer_extend.png'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    overflow: 'hidden',
    height: 'fit-content',
    color: 'white',
    background: '#000'
  },
  footerDetails: {
    color: '#999',
    '&:hover': {
      color: '#789529',
    }
  },
  footerSubDetails: {
    color: '#999',
    listStyleType: 'none',
    '&:hover': {
      color: '#789529',
      listStyleType: 'square',
    }
  }
});

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid mt={5} container direction="row" justifyContent="center" alignItems="flex-start" spacing={0}>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <ul item styles={{ margin: '0px!important' }}>
              <Typography variant="h6" gutterBottom >
                LIÊN HỆ VỚI CHÚNG TÔI
              </Typography>
              <Typography className={classes.footerDetails} variant="body2" gutterBottom >
                <span style={{ color: '#789529' }}><LocationOnIcon /></span> Tầng 4, tòa nhà Hanoi Group Số 442 Đội Cấn, P.Cống Vị, Q. Ba Đình, Hà Nội
              </Typography>
              <Typography className={classes.footerDetails} variant="body2" gutterBottom sx={{ display: 'inline-block' }}>
                <span style={{ color: '#789529' }}><PhoneIcon /></span>
                (04) 6674 2332
              </Typography>
              <Typography className={classes.footerDetails} variant="body2" gutterBottom sx={{ display: 'inline-block', marginLeft: '7px', marginRight: '0px' }}>
                <span style={{ color: '#789529' }}><PhoneIcon /></span>
                (04) 3786 8904
              </Typography>
              <Typography className={classes.footerDetails} variant="body2" gutterBottom sx={{ display: 'inline-block' }}>
                <span style={{ color: '#789529' }}><PhoneIcon /></span>
                (04) 6680 9686
              </Typography>
              <Typography className={classes.footerDetails} variant="body2" gutterBottom sx={{ display: 'inline-block', marginLeft: '7px', marginRight: '0px' }}>
                <span style={{ color: '#789529' }}><MailIcon /></span>
                Support@bizweb.vn
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <ul item styles={{ margin: '0px!important' }}>
              <Typography variant="h6" gutterBottom >
                CHUYỂN HÀNG
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Mua sắm trực tuyến</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Đến từ chúng tôi gửi đến</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Chính sách vận chuyển</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Vận chuyển thông tin</li>
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} sm>
            <ul item styles={{ margin: '0px!important' }}>
              <Typography variant="h6" gutterBottom >
                HỖ TRỢ
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Câu chuyện của chúng tôi</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Thanh toán an toàn</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Tùy chọn vận chuyển</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Chính sách vận chuyển</li>
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} sm>
            <ul item styles={{ margin: '0px!important' }}>
              <Typography variant="h6" gutterBottom >
                THÔNG TIN
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Về chúng tôi</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Điều khoản & Điều kiện</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Chính sách riêng tư</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Đơn đặt hàng và returns</li>
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} sm>
            <ul item styles={{ margin: '0px!important' }}>
              <Typography variant="h6" gutterBottom >
                MY ACCOUNT
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Xem giỏ hàng</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Sản phẩm yêu thích</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Kiểm tra</li>
              </Typography>
              <Typography className={classes.footerSubDetails} variant="body2" gutterBottom >
                <li>Theo dõi đặt hàng của tôi</li>
              </Typography>
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={0} ml={0} mt={5}>
          <Divider style={{ backgroundColor: '#222', width: '60%' }} />
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Typography style={{ color: '#999' }} variant="body2" >
              © Copyright 2008-2014 DKT Technology JSC
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} textAlign="right">
            <img src={footerImg} />
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}
