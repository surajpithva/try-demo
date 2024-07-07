import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./footer.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box component="footer" className="footer mt-3">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className="footer-grid"
      >
        <Grid item xs={12} sm={4} className="footer-column" data-aos="fade-up">
          <Typography variant="h4" gutterBottom>
            Quick Links
          </Typography>
          <List className="footer-list">
            <Link to="/" className="footer-link">
              <ListItem>
                <ListItemText primary="Home" className="text-center" />
              </ListItem>
            </Link>
            <Link to="/aboutus" className="footer-link">
              <ListItem>
                <ListItemText primary="About Us" className="text-center" />
              </ListItem>
            </Link>
            <Link to="/contactus" className="footer-link">
              <ListItem>
                <ListItemText primary="Contact Us" className="text-center" />
              </ListItem>
            </Link>
            <Link to="/products" className="footer-link">
              <ListItem>
                <ListItemText primary="Products" className="text-center" />
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item xs={12} sm={4} className="footer-column" data-aos="fade-up">
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
          <List className="footer-list">
            <ListItem>
              <ListItemText
                className="mx-2 text-center"
                primary="+91 81602 39340"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                className="mx-2 text-center "
                primary="bhoomika1692@gmail.com"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={4} className="footer-column" data-aos="fade-up">
          <Typography variant="h4" gutterBottom>
            Address
          </Typography>
          <List className="footer-list">
            <ListItem>
              <ListItemText
                className="mx-2 text-center"
                primary="A-1203 Elite Ornate
Tragad Rd, Godrej Garden City, Chandkheda, Ahmedabad, Gujarat 382470"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider className="footer-divider" />
      <Box textAlign="center" className="footer-bottom">
        <Typography variant="body2">
          Designed and developed by Suraj Pithva
        </Typography>
        <Typography variant="body2">&copy; 2024 All rights reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
