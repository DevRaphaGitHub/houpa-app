import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import Navbar from '../../components/Navbar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  home: {
    padding: 10,
  },
  container: {
    float: 'right',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
  },
  card: {
    width: 198,
    margin: 10,
  },
  media: {
    height: 300,
  },
  favorite: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'red',
  },
  drawer: {
    position: 'fixed',
    zIndex: -1,
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list: {
    paddingTop: 75,
    paddingLeft: 10,
  },
  marginInput: {
    marginBottom: 3,
  }
}));

const Product = () => {
  const classes = useStyles();
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div id="page-home" className={classes.home}>
      <Navbar />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <List className={classes.list}>
            <Typography variant="body2" component="h2" style={{marginBottom: 20}}>
              <span>Preços</span>
            </Typography>
            <TextField
              type="number"
              label="Valor Inicial"
              id="standard-start-adornment"
              className={clsx(classes.marginInput, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            />
            <TextField
              style={{marginBottom: 20}}
              type="number"
              label="Valor Final"
              id="standard-start-adornment"
              className={clsx(classes.marginInput, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            />
            <Divider light variant="middle" />
            <Typography variant="body2" component="h2" style={{marginBottom: 20, marginTop: 20}}>
              <span>Categorias</span>
            </Typography>
            <InputLabel id="demo-simple-select-label">Selecione uma categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={handleChange}
            >
              <MenuItem value={'fem'}>Moda Feminina</MenuItem>
              <MenuItem value={'mas'}>Moda Masculina</MenuItem>
              <MenuItem value={'inf'}>Infantil</MenuItem>
              <MenuItem value={'esp'}>Esportivo</MenuItem>
              <MenuItem value={'int'}>Íntima</MenuItem>
              <MenuItem value={'pra'}>Praia</MenuItem>
              <MenuItem value={'gee'}>Geek</MenuItem>
            </Select>
          </List>
        </Drawer>
        <main>
          <Typography>
          <div className={classes.container}>
              <Card className={classes.card}>
                <CardActionArea>
                  <Checkbox
                    className={classes.favorite}
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />}
                  />
                  <CardMedia
                    className={classes.media}
                    image={'Foto'}
                    title={'Nome'}
                  />
                  <CardContent>
                    <Typography align="center" gutterBottom variant="body2" component="h2">
                      <span>{'Nome'}</span>
                    </Typography>
                    <Typography align="center" gutterBottom variant="body2" component="h2">
                      <span><b>R$ {'Preço'}</b></span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined">COMPRAR</Button>
                    <IconButton>
                      <ShoppingCartOutlinedIcon />
                    </IconButton>
                  </CardActions>
                </CardActionArea>
              </Card>
          </div>
          </Typography>
        </main>
    </div>
  );
}

export default Product;