import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// Barra direita -> Botões pesquisa, favoritos e carrinho de compras
import InputBase from '@material-ui/core/InputBase';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// Logo
import logo from '../assets/logo_white.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#9414f4',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  input: {
    maxWidth: 100,
    display: 'flex',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grow: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.grow} />
          <Typography className={classes.logo}>
            <img src={logo} alt="logo" width="100px" />
          </Typography>
          <div className={classes.grow} />
          <IconButton className={classes.iconButton} edge="end" color="primary" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            color="primary"
            className={classes.input}
            placeholder="Pesquisar..."
            inputProps={{ 'aria-label': 'pesquisar' }}
          />
          <IconButton type="submit" className={classes.iconButton} color="inherit" aria-label="favorites">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton className={classes.iconButton} color="inherit" aria-label="shopping">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

export default Navbar;