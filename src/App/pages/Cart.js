import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import FilledInput from '@mui/material/FilledInput';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';

import cartProduct1 from '../../assets/images/cart_product_1.png'
import { Superscript } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

import '../../styles/pages/Cart.css'

var useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        overflow: 'hidden!important',
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
    sendButton: {
        backgroundColor: '#789529!important',
    },
    controlButton: {
        boxShadow: 'none!important',
        marginLeft: '10px!important',
        backgroundColor: '#000!important',
        '&:hover': {
            backgroundColor: '#000!important'
        }
    }
});

export default function News() {
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
                    <Divider />
                    <Box mt={4} >
                        <Typography className={classes.title}>
                            GIỎ HÀNG
                        </Typography>
                    </Box>
                </Container>
            </Container>
            <Container>
                <Grid container direction="row">
                    <Grid item xs={12} sm={12}>
                        <Box mt={5} mb={12} textAlign="right" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <table id="cartItem">
                                <thead>
                                    <tr>
                                        <th>Ảnh</th>
                                        <th>Tên sản phẩm </th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Tổng Số</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={cartProduct1} alt="" />
                                        </td>
                                        <td>
                                            <p>lắc tay D&G</p>
                                        </td>
                                        <td>
                                            <Typography class="price">345.000<sup>đ</sup></Typography>
                                        </td>
                                        <td>
                                            <p>1</p>
                                        </td>
                                        <td>
                                            <Typography class="price">345.000<sup>đ</sup></Typography>
                                        </td>
                                        <td>
                                            <Button variant="outlined" color="error">
                                                <DeleteIcon />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={cartProduct1} /></td>
                                        <td><p>lắc tay D&G</p></td>
                                        <td><Typography class="price">345.000<sup>đ</sup></Typography></td>
                                        <td><p>1</p></td>
                                        <td><Typography class="price">345.000<sup>đ</sup></Typography></td>
                                        <td>
                                            <Button variant="outlined" color="error">
                                                <DeleteIcon />
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <Button className={classes.controlButton} variant="contained" component="a" href="./products">
                                Tiếp tục mua hàng
                            </Button>
                            <Button className={classes.controlButton} variant="contained">
                                Xóa
                            </Button>
                            <Button className={classes.controlButton} variant="contained">
                                Cập nhật
                            </Button>
                        </Box>
                        <Box mt={5} mb={12} textAlign="right" sx={{ display: { xs: 'block', sm: 'none' } }} textAlign="center">
                            <table id="cartItem">
                                <tbody>
                                    <tr>
                                        <img src={cartProduct1} alt="" />
                                    </tr>
                                    <tr>
                                        <p>lắc tay D&G</p>
                                    </tr>
                                    <tr>
                                        <Typography class="price">345.000<sup>đ</sup></Typography>
                                    </tr>
                                    <tr>
                                        <p>1</p>
                                    </tr>
                                    <tr>
                                        <Typography class="price">345.000<sup>đ</sup></Typography>
                                    </tr>
                                    <tr>
                                        <Button variant="outlined" color="error">
                                            <DeleteIcon />
                                        </Button>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <Button style={{ display: 'block', marginTop: 10 }} className={classes.controlButton} variant="contained" component="a" href="./products">
                                Tiếp tục mua hàng
                            </Button>
                            <Button style={{ display: 'block', marginTop: 10 }} className={classes.controlButton} variant="contained" component="a" href="./products">
                                Xóa
                            </Button>
                            <Button style={{ display: 'block', marginTop: 10 }} className={classes.controlButton} variant="contained" component="a" href="./products">
                                Cập nhật
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Router >
    );
}
