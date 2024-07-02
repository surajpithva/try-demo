import React from 'react';
import owner from "../../assests/file.jpg"
import { Container, Box, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import './aboutUs.css';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Founder & CEO', image: owner },
  { name: 'Bob Smith', role: 'Chief Designer', image: owner },
  { name: 'Charlie Brown', role: 'Marketing Head', image: owner },
];

const AboutUs = () => {
  return (
    <Container maxWidth="lg" className="about-us">
      <Box className="hero-section" py={8} textAlign="center">
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5">
          Discover the story behind our handmade crafts
        </Typography>
      </Box>

      <Box py={8}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src="path_to_story_image" alt="Our Story" className="story-image" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
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
        <Typography variant="h4" gutterBottom>
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Card className="team-card">
                <Avatar src={member.image} alt={member.name} className="team-avatar" />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
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
        <Typography variant="h4" gutterBottom>
          Join Us on Our Journey
        </Typography>
        <Typography variant="body1" paragraph>
          We are always looking for passionate individuals to join our team. If you love handmade crafts as much as we do, reach out to us!
        </Typography>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;
