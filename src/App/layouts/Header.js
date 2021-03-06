import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import logo from '../../assets/images/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import productImg from '../../assets/images/product.png'

import '../../styles/base/header.css';




const useStyles = makeStyles({
  root: {
    position: 'fixed',
    zIndex: '9999!important'
  },
  menuFont: {
    fontSize: '14px!important',
    fontWeight: '600!important',
    color: '#222',
    textDecoration: 'none',
    '&:hover': {
      color: '#789529'
    }
  },
  navIcon: {
    color: '#222!important'
  },
  headerSubItem: {
    fontWeight: '500!important',
    color: '#999',
    listStyleType: 'none',
    textDecoration: 'none!important',
    '&:hover': {
      color: '#789529',
      listStyleType: 'disc',
    }
  },
  menuFontmobile: {
    fontSize: '14px!important',
    fontWeight: '600!important',
    color: '#222',
    textDecoration: 'none',
    display: 'block',
    '&:hover': {
      color: '#789529'
    }
  },
  IconButtonAppbar: {
    borderRadius: '0px!important',
    backgroundColor: 'rgb(0,0,0,0)!important'
  }
});

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: '#fff',
    minWidth: 'fit-content!important',
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: theme.typography.pxToRem(12),
    border: '2px solid #789529',
    [`& .${tooltipClasses.arrow}`]: {
      color: '#789529',
    },
  },

}));

const dropdownItem = [
  { name: '??o kho??c' },
  { name: 'B??? ??o li???n qu???n' },
  { name: 'V??y' },
  { name: 'Qu???n / V??y' },
  { name: 'Qu???n short' },
  { name: 'Qu???n jean' },
  { name: '????? ??an' },
  { name: '??o n???' },
];

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState("none");
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const [openToolTip, setOpenToolTip] = React.useState(false);
  const [openToolTipStore, setOpenToolTipStore] = React.useState(false);
  const [openToolTipStore1, setOpenToolTipStore1] = React.useState(false);
  const [status, setStatus] = React.useState(true)
  const handleTooltipClose = () => {
    setOpenToolTip(false);
  };

  const handleTooltipOpen = () => {
    setOpenToolTip(true);
  };

  const handleTooltipStoreClose = () => {
    setOpenToolTipStore(false);
  };

  const handleTooltipStoreOpen = () => {
    setOpenToolTipStore(true);
  };

  const handleTooltipStoreClose1 = () => {
    setOpenToolTipStore1(false);
  };

  const handleTooltipStoreOpen1 = () => {
    setOpenToolTipStore1(true);
  };

  const changeStatus = () => {
    setStatus(!status)
    console.log(status);
    handleClickOpen();
  }

  const handleClickOpen = () => {
    status === false ?
      setOpen("none") : setOpen("flex")
  };

  const [subItem, setSubItem] = React.useState(false)

  const handleDialogSubItem = () => {
    setSubItem(!subItem)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar sx={{ backgroundColor: 'rgb(255,255,255,0.3)' }}>
        <Container>
          <Toolbar>
            <img src={logo} width="170px" />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "flex", md: "flex", lg: "none", xl: "none" } }} id="autoMobile" />
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" } }} id="autoDestop" />
            <Grid sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" } }}>
              <IconButton className={classes.IconButtonAppbar} size="large">
                <Typography className={classes.menuFont} variant="body1" component="a" href="./">
                  TRANG CH???
                </Typography>
              </IconButton>
              <IconButton className={classes.IconButtonAppbar} size="large">
                <Typography className={classes.menuFont} variant="body1" component="a" href="./introduce">
                  GI???I THI???U
                </Typography>
              </IconButton>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <IconButton className={classes.IconButtonAppbar} size="large">
                  <HtmlTooltip leaveDelay={300} onClose={handleTooltipClose}
                    title={
                      <React.Fragment>
                        <Grid container direction="row" justifyContent="space-between" alignItems="right" style={{ width: '500px' }}>
                          <Grid item xs={4}>
                            <ul>
                              <Box mt={3} mb={3}>
                                <Typography variant="body1" gutterBottom>
                                  D?????NG DA
                                </Typography>
                                <Divider />
                              </Box>
                              {dropdownItem.map(item => (
                                <Typography className={classes.headerSubItem} variant="body2" gutterBottom component="a" href="./product-details" >
                                  <li>{item.name}</li>
                                </Typography>
                              ))}
                            </ul>
                          </Grid>
                          <Grid item xs={4}>
                            <ul>
                              <Box mt={3} mb={3}>
                                <Typography variant="body1" gutterBottom>
                                  N?????C HOA
                                </Typography>
                                <Divider />
                              </Box>
                              {dropdownItem.map(item => (
                                <Typography className={classes.headerSubItem} variant="body2" gutterBottom component="a" href="./product-details" >
                                  <li>{item.name}</li>
                                </Typography>
                              ))}
                            </ul>
                          </Grid>
                          <Grid item xs={4}>
                            <ul >
                              <Box mt={3} mb={3}>
                                <Typography variant="body1" gutterBottom>
                                  TRANG S???C
                                </Typography>
                                <Divider />
                              </Box>
                              {dropdownItem.map(item => (
                                <Typography className={classes.headerSubItem} variant="body2" gutterBottom component="a" href="./product-details" >
                                  <li>{item.name}</li>
                                </Typography>
                              ))}
                            </ul>
                          </Grid>
                        </Grid>
                      </React.Fragment>
                    }>
                    <ListItem sx={{ m: 0, p: 0 }}>
                      <Typography className={classes.menuFont} variant="body1" component="a" href="./products">
                        S???N PH???M
                      </Typography>
                      <KeyboardArrowDownIcon className={classes.menuFont} onClick={handleTooltipOpen} />
                    </ListItem>
                  </HtmlTooltip>
                </IconButton>
              </ClickAwayListener>
              <IconButton className={classes.IconButtonAppbar} size="large">
                <Typography className={classes.menuFont} variant="body1" component="a" href="/news">
                  TIN T???C
                </Typography>
              </IconButton>
              <IconButton className={classes.IconButtonAppbar} size="large">
                <Typography className={classes.menuFont} variant="body1" component="a" href="./page-not-found">
                  B???N ?????
                </Typography>
              </IconButton>
              <IconButton className={classes.IconButtonAppbar} size="large">
                <Typography className={classes.menuFont} variant="body1" component="a" href="./contact">
                  LI??N H???
                </Typography>
              </IconButton>
            </Grid>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" } }} />
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" } }}>

              <ClickAwayListener onClickAway={handleTooltipStoreClose}>
                <IconButton >
                  <HtmlTooltip onClose={handleTooltipStoreClose}
                    title={
                      <React.Fragment>
                        <Grid container justifyContent="space-between">
                          <Grid item xs={4} >
                            <img src={productImg} />
                          </Grid>
                          <Grid container xs={6} mt={1} >
                            <Grid item>
                              <Typography variant="caption">
                                ??o s?? mi nam
                              </Typography>
                            </Grid>
                            <Grid xs>
                              <Typography id="fontPriceStoreHeader" sx={{ fontWeight: 1000, color: '#789529' }}>
                                350.000 <sup>??</sup>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}>
                            <CloseIcon />
                          </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between" mt={2}>
                          <Grid item xs={4}>
                            <img src={productImg} />
                          </Grid>
                          <Grid container xs={6} mt={1} >
                            <Grid item>
                              <Typography variant="caption">
                                ??o s?? mi nam
                              </Typography>
                            </Grid>
                            <Grid xs>
                              <Typography id="fontPriceStoreHeader" sx={{ fontWeight: 1000, color: '#789529' }}>
                                350.000 <sup>??</sup>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}>
                            <CloseIcon />
                          </Grid>
                        </Grid>
                        <Box my={1}>
                          <Divider />
                        </Box>
                        <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item xs={4} textAlign="center" alignItems="center">
                            <Typography variant="caption">
                              T???ng
                            </Typography>
                          </Grid>
                          <Grid item xs={7}>
                            <Typography id="fontPriceStoreHeader" sx={{ fontWeight: 1000, color: '#789529' }}>
                              700.000 <sup>??</sup>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Button variant="contained" size="small" sx={{ backgroundColor: '#000', fontSize: '11px', m: 1, '&:hover': { backgroundColor: '#000' } }} href="/cart">
                          Gi??? h??ng
                        </Button>
                      </React.Fragment>
                    }>
                    <ShoppingCartIcon className={classes.navIcon} onClick={handleTooltipStoreOpen} />
                  </HtmlTooltip>
                </IconButton>
              </ClickAwayListener>
              <IconButton>
                <SearchIcon className={classes.navIcon} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" } }}>
              <ClickAwayListener onClickAway={handleTooltipStoreClose1}>
                <IconButton >
                  <HtmlTooltip onClose={handleTooltipStoreClose1} open={openToolTipStore1} disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                      <React.Fragment>
                        <Grid container justifyContent="space-between">
                          <Grid item xs={4} >
                            <img src={productImg} />
                          </Grid>
                          <Grid container xs={6} mt={1} >
                            <Grid item>
                              <Typography variant="caption">
                                ??o s?? mi nam
                              </Typography>
                            </Grid>
                            <Grid xs>
                              <Typography id="fontPriceStoreHeader" sx={{ fontWeight: 1000, color: '#789529' }}>
                                350.000 <sup>??</sup>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}>
                            <CloseIcon />
                          </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between" mt={2}>
                          <Grid item xs={4}>
                            <img src={productImg} />
                          </Grid>
                          <Grid container xs={6} mt={1} >
                            <Grid item>
                              <Typography variant="caption">
                                ??o s?? mi nam
                              </Typography>
                            </Grid>
                            <Grid xs>
                              <Typography id="fontPriceStoreHeader" sx={{ fontWeight: 1000, color: '#789529' }}>
                                350.000 <sup>??</sup>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}>
                            <CloseIcon />
                          </Grid>
                        </Grid>
                        <Box my={1}>
                          <Divider />
                        </Box>
                        <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item xs={4} textAlign="center" alignItems="center">
                            <Typography variant="caption">
                              T???ng
                            </Typography>
                          </Grid>
                          <Grid item xs={7}>
                            <Typography id="fontPriceStoreHeader" sx={{ fontWeight: 1000, color: '#789529' }}>
                              700.000 <sup>??</sup>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Button variant="contained" size="small" sx={{ backgroundColor: '#000', fontSize: '11px', m: 1, '&:hover': { backgroundColor: '#000' } }} href="/cart">
                          Gi??? h??ng
                        </Button>
                      </React.Fragment>
                    }>
                    <ShoppingCartIcon className={classes.navIcon} onClick={handleTooltipStoreOpen1} />
                  </HtmlTooltip>
                </IconButton>
              </ClickAwayListener>
              <IconButton>
                <SearchIcon className={classes.navIcon} />
              </IconButton>
              <IconButton onClick={changeStatus}
                size="large"
                aria-label="show more"
                color="inherit"
              >
                <MenuIcon className={classes.navIcon} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <Box sx={{ display: { xs: open, sm: open, md: "none" } }}>
          <Container>
            <Container>
              <List>
                <ListItem>
                  <Typography className={classes.menuFont} variant="body1" component="a" href="./">
                    TRANG CH???
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.menuFont} variant="body1" component="a" href="./introduce">
                    GI???I THI???U
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.menuFont} variant="body1" component="a" href="./products">
                    S???N PH???M
                  </Typography>
                  <KeyboardArrowDownIcon className={classes.menuFont} onClick={handleDialogSubItem} />
                </ListItem>
                <ListItem>
                  <Typography className={classes.menuFont} variant="body1" component="a" href="./news">
                    TIN T???C
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.menuFont} variant="body1" component="a" href="./page-not-found">
                    B???N ?????
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.menuFont} variant="body1" component="a" href="./contact">
                    LI??N H???
                  </Typography>
                </ListItem>
              </List>
            </Container>
          </Container>
        </Box>
        <Dialog open={subItem} onClick={handleDialogSubItem} sx={{ minHeight: '340px', maxHeight: '340px' }}>
          <Typography >
            <Grid container direction="row" justifyContent="space-between" alignItems="right">
              <Grid item xs={12} sm={12} md>
                <ul>
                  <Box mt={3} mb={3}>
                    <Typography variant="body1" gutterBottom>
                      D?????NG DA
                    </Typography>
                    <Divider width="20%" />
                  </Box>
                  {dropdownItem.map(item => (
                    <Typography className={classes.headerSubItem} variant="body2" gutterBottom component="a" href="./product-details" >
                      <li>{item.name}</li>
                    </Typography>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12} sm={12} md>
                <ul>
                  <Box mt={3} mb={3}>
                    <Typography variant="body1" gutterBottom>
                      N?????C HOA
                    </Typography>
                    <Divider width="20%" />
                  </Box>
                  {dropdownItem.map(item => (
                    <Typography className={classes.headerSubItem} variant="body2" gutterBottom component="a" href="./product-details" >
                      <li>{item.name}</li>
                    </Typography>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12} sm={12} md>
                <ul >
                  <Box mt={3} mb={3}>
                    <Typography variant="body1" gutterBottom>
                      TRANG S???C
                    </Typography>
                    <Divider width="20%" />
                  </Box>
                  {dropdownItem.map(item => (
                    <Typography className={classes.headerSubItem} variant="body2" gutterBottom component="a" href="./product-details" >
                      <li>{item.name}</li>
                    </Typography>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Typography>
        </Dialog>
      </AppBar >
    </Box >
  );

}