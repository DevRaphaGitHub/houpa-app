import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { IconButton, Paper } from '@material-ui/core';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  product: {
    padding: 10,
  },
  drawer: {
    position: 'fixed',
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
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  containerImg: {
    width: 300,
    height: 'auto',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  containerInfo: {
    width: 500,
    display: 'flex',
    flexDirection: 'row',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    wordWrap: 'break-word',
  },
  title: {
    fontSize: 14,
  },
  subtitle: {
    marginBottom: 8,
  },
  buttons: {
    marginBottom: 5
  },
  inputCep: {
    width: 100,
    height: 20
  },
  btnCep: {
    marginTop: 10,
    marginLeft: 10,
    width: 'auto',
    height: 'auto'
  },
  socialBar: {
    position: 'fixed',
    bottom: 5
  },
  iconsSocial: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconsWh: {
    width: 30,
    height: 30
  }
}));

const Product = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [quant, setQuant] = useState({
    qtd: '',
    name: 'select',
  });
  const location = useLocation();

  // Requisição para api PHP por ID do produto
  const getProductById = async() => {
    await api.get(`${location.search}`)
    .then(response => {
      setProduct(response.data);
    });
  };

  useEffect(() => {
    getProductById();
  }, []);

  const handleChangeQtd = (event) => {
    const name = event.target.name;
    setQuant({
      ...quant,
      [name]: event.target.value,
    });
  };

  return (
    <div id="page-home" className={classes.product}>
      <Navbar />
        <div className={classes.container}>
          <Paper elevation={3} className={classes.containerInfo}>
            <img className={classes.containerImg} src={product.photo} alt={product.name} />
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  LOJA VENDEDORA
                </Typography>

                <Typography className={classes.subtitle} variant="body2" component="p">
                  {product.store}
                </Typography>

                <Divider variant="middle" />
                <Typography className={classes.title} style={{marginTop: 8}} color="textSecondary" gutterBottom>
                  PRODUTO
                </Typography>

                <Typography className={classes.subtitle} variant="body2" component="p">
                  {product.name}
                </Typography>

                <Divider variant="middle" />
                <Typography className={classes.title} style={{marginTop: 8}} color="textSecondary" gutterBottom>
                  DESCRIÇÃO
                </Typography>

                <Typography className={classes.subtitle} variant="body2" component="p">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </div>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
        >
          <List className={classes.list}>
            <Typography className={classes.title} variant="h5" component="h2">
              <b>{product.name}</b>
            </Typography>

            <Typography className={classes.title} style={{marginTop: 5}} color="textSecondary" gutterBottom>
              Produzido e entregue por {product.store}
            </Typography>
          
            <Typography className={classes.title} style={{marginTop: 10}} variant="h5" component="h1">
              <b>R$ {product.price}</b>
            </Typography>

            <Typography className={classes.title} style={{marginTop: 5}} color="textSecondary" gutterBottom>
              Ou até 5x de R$ {product.price / 5}<br></br>
              Atacado mínimo: 6 peças
            </Typography>

            <Typography className={classes.title} style={{marginTop: 10}} variant="h5" component="h2">
              <b>Tamanho</b>
            </Typography>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button>P</Button>
              <Button>M</Button>
              <Button>G</Button>
              <Button>GG</Button>
            </ButtonGroup>

            <Typography className={classes.title} style={{marginTop: 10}} variant="h5" component="h2">
              <b>Quantidade</b>
            </Typography>

            <Select
              native
              value={quant.qtd}
              onChange={handleChangeQtd}
              inputProps={{
                name: 'qtd',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </Select>

            <Typography style={{marginTop: 10, paddingRight: 10}}>
              <Button 
                className={classes.buttons} 
                variant="contained" 
                color="primary" 
                disableElevation 
                fullWidth
              >
                Comprar
              </Button>

              <Button
                fullWidth
                className={classes.buttons}
                variant="contained"
                color="secondary"
                endIcon={<ShoppingCartOutlinedIcon />}
              >
                Adicionar ao carrinho
              </Button>
            </Typography>

            <Typography className={classes.title} style={{marginTop: 10}} variant="h5" component="h2">
              <b>Frete</b>
            </Typography>

            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Calcule o frete estimado para sua região
            </Typography>

            <Typography variant="body2" component="h2">
              <TextField id="standard-basic" label="CEP" className={classes.inputCep} />
              <Button
                className={classes.btnCep}
                variant="contained" 
                color="primary" 
                disableElevation
              >
                Calcular
              </Button>
              <br></br>
              <Link to="" style={{textDecoration: 'none'}}>
                Não sei meu CEP
              </Link>
            </Typography>
            
            <div className={classes.socialBar}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Compartilhar
              </Typography>

              <Typography className={classes.iconsSocial}>
                <IconButton className={classes.iconsWh}>
                  <WhatsAppIcon />
                </IconButton>

                <IconButton className={classes.iconsWh}>
                  <PinterestIcon />
                </IconButton>

                <IconButton className={classes.iconsWh}>
                  <InstagramIcon />
                </IconButton>

                <IconButton className={classes.iconsWh}>
                  <FacebookIcon />
                </IconButton>

                <IconButton className={classes.iconsWh}>
                  <LinkedInIcon />
                </IconButton>
              </Typography>
            </div>
          </List>
        </Drawer>
    </div>
  );
}

export default Product;