
import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, useMediaQuery, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useTransition, animated } from '@react-spring/web';
import vizagservices from '../../assets/videos/vizagservices.webm';
import portfolio from '../../assets/videos/portfolio.webm';
const videos = [
  {
    src: `${vizagservices}`,
    alt: 'Vizag Services',
    title: 'Vizag AC Services',
    description: 'Home appliance repair services.',
  },
  {
    src: `${portfolio}`, // Example external video file
    alt: 'Ocean Wave',
    title: 'Ocean Wave',
    description: 'A powerful ocean wave captured in motion.',
  },
  {
    src: `${portfolio}`, // Example external video file
    alt: 'Dancing Dunes',
    title: 'Dancing Dunes',
    description: 'Capturing the breathtaking beauty of sand dunes.',
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(videos.length / (isSmallScreen ? 1 : 4)));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(videos.length / (isSmallScreen ? 1 : 4))) % Math.ceil(videos.length / (isSmallScreen ? 1 : 4)));
  };

  const videosToShow = videos.slice(currentIndex * (isSmallScreen ? 1 : 4), currentIndex * (isSmallScreen ? 1 : 4) + (isSmallScreen ? 1 : 4));

  const transitions = useTransition(videosToShow, {
    keys: (item) => item.src,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    config: { duration: 500 },
  });

  const videoContainerStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 2,
    transition: 'transform 0.5s',
  };

  const videoStyles = {
    width: '100%',
    height: 'auto',
  };

  const videoOverlayStyles = {
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
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: '700',  textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 4px 4px 0 #000', // Add multiple shadows for a 3D effect
          transform: 'rotateX(10deg) rotateY(-1deg)', // Slight 3D rotation
          color: '#0164a5',
          letterSpacing: '0.2em', // Add letter spacing
          fontFamily: '"Lucida Console", "Courier New', }}>
        My Works
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        align="center"
        sx={{ fontWeight: '300', color: 'white', paddingBottom: '10px', fontSize: '18px' }}
      >
        A visually appealing and fully responsive landing page for promoting a live demo, incorporating a contact form and
        embedded Google Map using React and Material-UI.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={handlePrevious}>
          <ArrowBackIos />
        </IconButton>
        <Grid container spacing={2} justifyContent="center">
          {videosToShow.map((video, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
              <Box
                className={`video-container ${rotate ? 'rotate' : ''}`}
                sx={{
                  ...videoContainerStyles,
                  '&:hover .video-overlay': {
                    opacity: 1,
                  },
                  '&.rotate': {
                    transform: 'rotate(180deg)',
                  },
                }}
              >
                <video src={video.src} alt={video.alt} style={videoStyles} autoPlay loop muted />
                <Box className="video-overlay" sx={videoOverlayStyles}>
                  <Typography variant="h6">
                    <a href="https://vizagservices.in/" target="blank">
                      {video.title}
                    </a>
                  </Typography>
                  <Typography variant="body2">{video.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Works;
