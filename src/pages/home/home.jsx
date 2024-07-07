import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ClipLoader } from "react-spinners";
import cuteGirl from "../../assests/cuteGirl.png";
import homePage from "../../assests/HandMadeHomePage.jpg";

import Header from "../../components/header/header";
import { Email, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import products from "../../json-data/servicesData/servicesData";
import Testimonials from "../../components/testimonial/testimonial";
import Footer from "../../components/footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={150} color={"#333"} loading={loading} />
      </div>
    );
  }

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
          data-aos="fade-right"
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
        <Grid item sm={12} md={6} lg={6} data-aos="fade-left">
          <img src={homePage} alt="cutegirl" className="cute-girl-img mt-5" />
        </Grid>
      </Grid>
      <Typography
        className="better-day-text"
        variant="h3"
        textAlign={"center"}
        data-aos="zoom-in"
      >
        We Are Gonna Make Your Day Better
      </Typography>
      {/* Classy Craft End Here */}

      {/* Order Now Start Here */}
      <div className="order-start" data-aos="fade-up">
        <Typography variant="h3" className="order-now" textAlign="center">
          Order Now
        </Typography>
        <Typography variant="h3" className="my-3" textAlign="center">
          Contact us directly for product inquiries
        </Typography>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={3} sm={2} md={2} textAlign="center">
            <IconButton
              color="primary"
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              data-aos="fade-up"
            >
              <WhatsApp style={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1">WhatsApp</Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={2} textAlign="center">
            <IconButton
              color="primary"
              href="https://www.facebook.com/handmade.bhumi?mibextid=ZbWKwL"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Facebook style={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1">Facebook</Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={2} textAlign="center">
            <IconButton
              color="primary"
              href="mailto:bhoomika1692@gmail.com"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Email style={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1">Email</Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={2} textAlign="center">
            <IconButton
              color="primary"
              href="https://instagram.com/handmade_by_bhumi/?igsh=MWZ6d2R3NzZmanN5Yw%3D%3D"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Instagram style={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1">Instagram</Typography>
          </Grid>
        </Grid>
        {/* My Services Start Here */}
        <Box my={4}>
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            data-aos="fade-up"
          >
            Trending Products
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {products.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={100 * product.id}
              >
                <Card className="premium-card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* My Services End Here */}
      </div>
      {/* Order Now End Here */}

      {/* Client Testimonial Start Here */}
      <Testimonials />
      {/* Client Testimonial End Here */}

      {/* Footer Start Here */}
      <Footer />
      {/* Footer End Here */}
    </>
  );
};

export default Home;
