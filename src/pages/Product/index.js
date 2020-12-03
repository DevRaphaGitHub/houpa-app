import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';
import Navbar from '../../components/Navbar';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  home: {
    padding: 10,
  },
  containerImg: {
    width: '100%',
    height: '80%'
  }
}));

const Product = () => {
  const classes = useStyles();
  const baseUrl = "http://localhost/houpa-app/src/services/";
  const [product, setProduct] = useState({});
  const location = useLocation();

  // Requisição para api PHP por ID do produto
  const getProductById = async() => {
    await axios.get(baseUrl + `${location.search}`)
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