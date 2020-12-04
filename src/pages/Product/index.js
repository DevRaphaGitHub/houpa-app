import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../../components/Navbar';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  home: {
    padding: 10,
  },
  containerImg: {
    width: '400px',
    height: '100px',
  }
}));

const Product = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
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

  return (
    <div id="page-home" className={classes.home}>
      <Navbar />
        <div className={classes.containerImg}>
          <img src={product.photo} alt={product.name} />
        </div>
    </div>
  );
}

export default Product;