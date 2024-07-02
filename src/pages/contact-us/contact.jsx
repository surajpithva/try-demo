import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import logo from "../../assests/logo.jpeg";
import "./contact.css";
import Swal from "sweetalert2";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = () => {
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields!",
      });
      return;
    }

    // Simulate sending message (you can add actual sending logic here)

    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });

    // Show success message to user
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been received. We'll get back to you soon!",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <Header  />
      <Container className="contact-container mt-5">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {/* Left Side Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="contact-heading">
              Contact Us
            </Typography>
            <TextField
              id="fullName"
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              color="primary"
              className="contact-button"
              onClick={handleFormSubmit}
            >
              Contact
            </Button>
          </Grid>

          {/* Right Side Content */}
          <Grid item xs={12} md={6} className="contact-info mt-5">
            {/* Logo */}
            <img src={logo} alt="Logo" className="Contact-logo" />

            
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsPage;
