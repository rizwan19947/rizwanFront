import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Navbar from './navbar';
import Facebook from './images/f.svg'
import Instagram from './images/i.svg'
import Twitter from './images/t.svg'
import Email from './images/e.svg'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                AkaysTravels
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '50.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1];

export default function Album() {
    const classes = useStyles();

    const style1 ={
        background: '#9E9E9E',

    };


    return (
        <>
            <div style={style1}>
            <Navbar />
            <React.Fragment>
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                About Us
            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                A onestop window for everyone. get easy tickets for transport for any and all locations. This includes air travel as well as land travel via bus and train both.
            </Typography>
                        </Container>
                    </div>

                    <Container className={classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                            <img src={Facebook} alt="" width="10%" />
                            Facebook.com/AkaysTravels
            </Typography>
                        <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                            <img src={Instagram} alt="" width="10%" />
                            Instagram.com/AkaysTravels
            </Typography>
                        <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                            <img src={Twitter} alt="" width="10%" />
                            Twitter.com/AkaysTravels
            </Typography>
                        <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                            <img src={Email} alt="" width="10%" />
                              info@akaystravels.com
            </Typography>
                        <Grid container spacing={4}>



                            {/* {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Facebook-512.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Facebook
                    </Typography>
                    <Typography>
                      https://facebook.com/voyager
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))} */}
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        The Easy Way to Get Away
        </Typography>
                    <Copyright />
                </footer>
                {/* End footer */}
            </React.Fragment>
            </div>
        </>
          
    );
}