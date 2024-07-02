import React from 'react';
import { Grid, Typography } from '@mui/material';
import ActionAreaCard from '../../pages/products/products';

import products from '../../json-data/productData/productData';
import Header from '../header/header';
import Footer from '../footer/footer';

const ProductList = () => {
  return (
    <>
    <Header/>

    <Typography variant='h3' className='text-center '> ALL PRODUCTS </Typography>
    <Grid container spacing={3} >
        
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ActionAreaCard
            image={product.image}
            name={product.name}
            description={product.description}

          />
        </Grid>
      ))}
    </Grid>
    <Footer/>
    </>
  );
}

export default ProductList;
