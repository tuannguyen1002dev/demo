import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import facebookIcon from '../../assets/images/facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import googlePlusIcon from '../../assets/images/google.svg';
import pinterestIcon from '../../assets/images/pinterest.svg';
import linkedInIcon from '../../assets/images/linkedin.svg'

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        overflow: 'hidden',
        margin: '0!important',
        padding: '0!important',
    },
    mediaIcon: {
        border: '1px solid',
        borderRadius: '100%',
        borderColor: '#000',
        padding: 5,
    },
    mediaName:{
        fontStyle:'bold!important'
    },
    mediaList:{
        opacity:0.5,
        '&:hover':{
            color:'#000',
            opacity:1,
        }
    }
});

export default function MediaList() {
    const classes = useStyles();

    const itemList = [
        {
            icon: facebookIcon,
            itemName: 'FACEBOOK'
        },
        {
            icon: twitterIcon,
            itemName: 'TWITTER'
        },
        {
            icon: instagramIcon,
            itemName: 'INSTAGRAM'
        },
        {
            icon: googlePlusIcon,
            itemName: 'GOOGLE+'
        },
        {
            icon: pinterestIcon,
            itemName: 'PINTEREST'
        },
        {
            icon: linkedInIcon,
            itemName: 'LINKEDIN'
        },
    ]
    return (
        <div className={classes.root} sx={{ flexGrow: 1 }}>
            <Grid mt={5} container justifyContent="center" textAlign="center">
                {itemList.map(item => (
                    <Grid item xs={6} sm={4} md textAlign="center" justifyContent="center" alignContent="center" alignItems="center">
                        <List>
                            <ListItem className={classes.mediaList}>
                                <ListItemAvatar>
                                    <img src={item.icon} className={classes.mediaIcon} />
                                </ListItemAvatar>
                                <ListItemText secondary={item.itemName} className={classes.mediaName} />
                            </ListItem>
                        </List>
                    </Grid>
                ))}
            </Grid>
        </div >
    );
}
