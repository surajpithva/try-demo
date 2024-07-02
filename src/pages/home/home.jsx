import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import "./home.css";
import cuteGirl from "../../assests/cuteGirl.png";
import Header from "../../components/header/header";
import { Email, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import products from "../../json-data/servicesData/servicesData";
import Testimonials from "../../components/testimonial/testimonial";
import Footer from "../../components/footer/footer";

const Home = () => {
  console.log(products);
  return (
    <>
      {/* Header Start Here */}
      <Header />
      {/* Header End Here */}

    
      {/* Classy Craft Start Here */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          sm={12}
          md={6}
          lg={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h1" // Adjust the variant to increase text size
            className="amita-regular"
            align="center"
            gutterBottom
          >
            Classy Craft
          </Typography>
          <Typography
            variant="h5" // Adjust the variant to increase text size
            align="center"
            className="description"
          >
            Your One-Stop-Shop For Unique Handmade Products, Including Hoops
            Moti Art, Rakhi, Wall Art, Hamper And More
          </Typography>
          <Box>
            <Button variant="contained" color="secondary" className="mt-4">
              Send Message
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <img src={cuteGirl} alt="cutegirl" className="cute-girl-img" />
        </Grid>
      </Grid>
      <Typography className="better-day-text" variant="h3" textAlign={"center"}>
        We Are Gonna Make Your Day Better
      </Typography>
      {/* Classy Craft End Here */}

      {/* Order Now Start Here */}
      <div className="order-start">
        <Typography variant="h3" className="order-now" textAlign="center">
          Order Now
        </Typography>
        <Typography variant="h3" className="my-3" textAlign="center">
          Contact us directly for product inquiries
        </Typography>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={3} sm={2} md={2} textAlign="center">
            <IconButton color="primary" href="https://wa.me/yourwhatsapplink" target="_blank">
              <WhatsApp style={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1">WhatsApp</Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={2} textAlign="center">
            <IconButton color="primary" href="https://facebook.com/yourfacebooklink" target="_blank">
              <Facebook style={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1">Facebook</Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={2} textAlign="center">
            <IconButton color="primary" href="mailto:youremail@example.com" target="_blank">
              <Email style={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1">Email</Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={2} textAlign="center">
            <IconButton color="primary" href="https://instagram.com/yourinstagramlink" target="_blank">
              <Instagram style={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1">Instagram</Typography>
          </Grid>
        </Grid>
         {/* My Services Start Here */}
         <Box my={4}>
      <Typography variant="h3" textAlign="center" gutterBottom>
        Services
      </Typography>
      {products.map((product, index) => (
        <Grid
          container
          spacing={4}
          key={product.id}
          alignItems="center"
          className="service-item"
          my={2}
        >
          {index % 2 === 0 ? (
            <>
              <Grid item xs={12} md={6}>
                <img src={product.image} alt={product.title} className="service-image" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom className="text-shadow-black">
                  {product.title}
                </Typography>
                <Typography variant="h5" className="service-description">
                  {product.description}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom className="text-shadow-black">
                  {product.title}
                </Typography>
                <Typography variant="h4" className="service-description">
                  {product.description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={product.image} alt={product.title} className="service-image" />
              </Grid>
            </>
          )}
        </Grid>
      ))}
    </Box>
      {/* My Services End Here */}
      </div>
      {/* Order Now End Here */}


      {/* Client Testimonial Start Here */}
      <Testimonials/>
      {/* Client Testimonial End Here */}
      {/* Footer Start Here */}
      <Footer/>
      {/* Footer End Here */}




     
    </>
  );
};

export default Home;
