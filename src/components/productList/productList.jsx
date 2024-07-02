import React, { useState, useEffect } from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import ActionAreaCard from '../../pages/products/products';

import products from '../../json-data/productData/productData';
import Header from '../header/header';
import Footer from '../footer/footer';

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed or replace with actual data fetching logic

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <Typography variant="h3" className="text-center ">
        ALL PRODUCTS
      </Typography>
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '50vh' }}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
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
      )}
      <Footer />
    </>
  );
};

export default ProductList;
