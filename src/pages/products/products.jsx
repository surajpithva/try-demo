import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Dialog, DialogContent, DialogContentText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './products.css';

const ActionAreaCard = ({ image, name, description }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card  sx={{ maxWidth: 400, boxShadow: 3 }} className='container product-card '>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={name}
            className='productImg'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='product-name'>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='product-description'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent className='dialog-content'>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className='dialog-close-button'
          >
            <CloseIcon />
          </IconButton>
          <img src={image} alt={name} className='dialog-img' />
          <DialogContentText className='dialog-text'>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ActionAreaCard;
