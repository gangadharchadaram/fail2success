import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, useMediaQuery, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useTransition, animated } from '@react-spring/web';

const images = [
  {
    src: 'https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg',
    alt: 'Snowy Mountains',
    title: 'Snowy Mountains',
    description: 'A beautiful view of snowy mountains.'
  },
  {
    src: 'https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg',
    alt: 'Ocean Wave',
    title: 'Ocean Wave',
    description: 'A powerful ocean wave captured in motion.'
  },
  {
    src: 'https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg',
    alt: 'Dancing Dunes',
    title: 'Dancing Dunes',
    description: 'Capturing the breathtaking beauty of sand dunes.'
  },
  {
    src: 'https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg',
    alt: 'Rocky Coast',
    title: 'Rocky Coast',
    description: 'A rugged rocky coastline with crashing waves.'
  },
  {
    src: 'https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg',
    alt: 'Sunset Beach',
    title: 'Sunset Beach',
    description: 'A serene sunset over a peaceful beach.'
  },
  {
    src: 'https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg',
    alt: 'Forest Path',
    title: 'Forest Path',
    description: 'A tranquil path through a lush forest.'
  },
];

function Works() {
  const [rotate, setRotate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleRotate = () => {
    setRotate(!rotate);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / (isSmallScreen ? 1 : 4)));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(images.length / (isSmallScreen ? 1 : 4))) % Math.ceil(images.length / (isSmallScreen ? 1 : 4)));
  };

  const imagesToShow = images.slice(currentIndex * (isSmallScreen ? 1 : 4), currentIndex * (isSmallScreen ? 1 : 4) + (isSmallScreen ? 1 : 4));

  const transitions = useTransition(imagesToShow, {
    keys: (item) => item.src,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    config: { duration: 500 }
  });

  const imageContainerStyles = {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '133.33%', // Aspect ratio of 3:4 (width:height)
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 2,
    transition: 'transform 0.5s',
    overflow: 'hidden',
  };

  const imageOverlayStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '16px',
    opacity: 0,
    transition: 'opacity 0.5s ease',
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4 }} id="Projects">
      <Typography variant="h3" gutterBottom align="center" sx={{fontWeight: '700', color: 'white'}}>My Works</Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{fontWeight: '300', color: 'white', paddingBottom: '10px', fontSize: '18px'}}>
      A visually appealing and fully responsive landing page for promoting a live demo, incorporating a contact form and embedded Google Map using React and Material-UI.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={handlePrevious}><ArrowBackIos /></IconButton>
        <Grid container spacing={2} justifyContent="center">
          {imagesToShow.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                className={`image-container ${rotate ? 'rotate' : ''}`}
                sx={{
                  ...imageContainerStyles,
                  backgroundImage: `url(${image.src})`,
                  '&:hover .image-overlay': {
                    opacity: 1,
                  },
                  '&.rotate': {
                    transform: 'rotate(180deg)',
                  },
                }}
              >
                <Box className="image-overlay" sx={imageOverlayStyles}>
                  <Typography variant="h6">{image.title}</Typography>
                  <Typography variant="body2">{image.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNext}><ArrowForwardIos /></IconButton>
      </Box>
    </Box>
  );
}

export default Works;
