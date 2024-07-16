import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const features = [
  'Responsive websites',
  'E-Commerce Websites',
  'POS',
  'Social Media Marketing',
  'EASY TO USE SOFTWARE',
  'Pay Per Click',
  'SEO',
  'DOMAIN SUPPORT',
  'Mobile Applications',
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
`;

const Content = styled(Container)({
  position: 'relative',
  textAlign: 'center',
  alignItems: 'center',
  textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 4px 4px 0 #000', // Add multiple shadows for a 3D effect
  transform: 'rotateX(10deg) rotateY(-1deg)', // Slight 3D rotation
  color: '#0164a5',
  letterSpacing: '0.2em', // Add letter spacing
  fontFamily: '"Lucida Console", "Courier New',
  marginBottom: '20px',
  animation: `${fadeIn} 1s ease-out, ${slideUp} 1s ease-out`,
});

const Icon = styled(Typography)({
  fontSize: '50px',
  marginBottom: '10px',
  animation: `${fadeIn} 1s ease-out, ${slideUp} 1s ease-out`,
});

const FeatureBox = styled(Box)({
  paddingX: 2,
  animation: `${fadeIn} 1s ease-out, ${slideUp} 1s ease-out`,
  animationDelay: '0.5s',
});

const Cards = () => {
  return (
    <>
      <Content>
        <Icon variant="h3" gutterBottom>
          🤖
        </Icon>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          What makes Bujji special?
        </Typography>
      </Content>
      <Box id="Explore" sx={{ width: '80%',padding: '2rem',marginLeft: '10%', backgroundColor: '#A8CCD7', opacity: '0.8' }}>
        <Box position="relative" textAlign="center" color="white"></Box>
        <Box sx={{ padding: '20px' }}>
          <Grid container spacing={3} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureBox>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      padding: '10px 20px',
                      textTransform: 'none',
                      fontSize: '16px',
                      borderColor: 'black',
                      color: '#333',
                      '&:hover': {
                        borderColor: '#999',
                      },
                    }}
                  >
                    {feature}
                  </Button>
                </FeatureBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
