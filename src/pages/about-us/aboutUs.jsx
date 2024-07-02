import React from 'react';
import CEO from "../../assests/CEO.jpeg";
import { Container, Box, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import './aboutUs.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const teamMembers = [
  { name: 'Bhoomi  Suthar', role: 'Founder & CEO', image: CEO },

];

const GradientTypography = styled(Typography)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
});

const AboutUs = () => {
  return (
    <>
    <Header/>
    <Container maxWidth="lg" className="about-us mt-3">
      <Box className="hero-section" py={8} textAlign="center">
        <GradientTypography variant="h2" gutterBottom>
          About Us
        </GradientTypography>
        <Typography variant="h5">
          Discover the story behind our handmade crafts
        </Typography>
      </Box>

      <Box py={8}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={CEO} alt="Our Story" className="story-image" />
          </Grid>
          <Grid item xs={12} md={6}>
            <GradientTypography variant="h4" gutterBottom>
              Our Story
            </GradientTypography>
            <Typography variant="body1" paragraph>
              At Handmade Crafts, we believe in the beauty of unique, handcrafted items. Our journey started with a passion for creating beautiful, artisanal products that bring joy to our customers. Each piece is crafted with care, attention to detail, and a touch of love.
            </Typography>
            <Typography variant="body1">
              From humble beginnings to a thriving business, our dedication to quality and craftsmanship has never wavered. Join us on our journey and discover the magic of handmade crafts.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box py={8} textAlign="center">
        <GradientTypography variant="h4" gutterBottom>
          Meet the Team
        </GradientTypography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Card className="team-card">
                <Avatar src={member.image} alt={member.name} className="team-avatar" />
                <CardContent>
                  <GradientTypography variant="h6">{member.name}</GradientTypography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box py={8} textAlign="center" className="cta-section">
        <GradientTypography variant="h4" gutterBottom>
          Join Us on Our Journey
        </GradientTypography>
        <Typography variant="body1" paragraph>
          We are always looking for passionate individuals to join our team. If you love handmade crafts as much as we do, reach out to us!
        </Typography>
        <Button variant="contained" color="primary" className="cta-button">
          Contact Us
        </Button>
      </Box>
    </Container>
    <Footer/>
    </>
  );
};

export default AboutUs;
