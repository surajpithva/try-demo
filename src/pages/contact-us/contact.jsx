import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Email, Room, Instagram, Facebook } from "@mui/icons-material";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import logo from "../../assests/logo.jpeg";
import "./contact.css";

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <Container className="contact-container">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Left Side Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="contact-heading">
              Contact Us
            </Typography>
            <TextField
              id="full-name"
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              className="contact-button"
            >
              Contacts
            </Button>
          </Grid>

          {/* Right Side Content */}
          <Grid item xs={12} md={6} className="contact-info mt-5">
            {/* Logo */}
            <img src={logo} alt="Logo" className="Contact-logo" />

            {/* Contact Details */}
           

            {/* Social Media Icons */}
            {/* <Box mt={2}>
            <Instagram className="social-icon" />
            <Facebook className="social-icon" />
          </Box> */}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsPage;
