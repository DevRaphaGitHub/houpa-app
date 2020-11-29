import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Navbar from '../../components/Navbar';

const useStyles = makeStyles({
  root: {
  },
  home: {
    padding: 10,
  },
  container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
  },
  card: {
    maxWidth: 250,
    margin: 10,
  },
  media: {
    height: 300,
  },
});

const Home = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  // Requisição para api PHP
  useEffect(() => {
    fetch("http://localhost/houpa-app/src/api/")
      .then(response => response.json())
      .then(
        (result) => {
          setProducts(result);
        }
      )
  }, []);

  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.container}>
      {products.map((product) => (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.photo}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <span>{product.name}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      </div>
    </div>
  );
}

export default Home;