import React, { useState, useEffect, useContext } from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import { sliderData } from "../../DataForPage/dummyData";
import MidChild from "./MidChild";
import { motion } from "framer-motion";
import MidButton from "./MidButton";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const MidFilterSection = () => {
  const buttons = [
    { id: "1", name: "Click" },
    { id: "2", name: "To know" },
    { id: "3", name: "Me more" },
  ];

  const { theme } = useContext(ThemeBgContext);
  const [selected, setSelected] = useState("1");
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);

  const filterData = (button) => {
    const filter = sliderData.filter((item) => item.id === button);
    setData(filter);
    setSelected(button);
    setClick(true);
  };

  useEffect(() => {
    const putData = (data) => {
      setData(data.filter((item) => item.id === "1"));
    };
    putData(sliderData);
  }, []);

  return (
    <Box
      id="About"
      sx={{
        mx: "auto",
        pt: 9,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
          textAlign: 'start',
          fontWeight: '900',
          marginLeft: { xs: "4rem", sm: "1rem", md: "45rem" },
          marginTop: { xs: "7rem", sm: "1rem", md: "10rem" },
          marginBottom: { xs: "1rem", sm: "1rem", md: "0rem" },
          textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 4px 4px 0 #000', // Add multiple shadows for a 3D effect
          transform: 'rotateX(10deg) rotateY(-1deg)', // Slight 3D rotation
          color: '#0164a5',
          letterSpacing: '0.1em', // Add letter spacing
          fontFamily: '"Lucida Console", "Courier New', // Add font family
        }}
      >
        ABOUT BUJJI
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={5}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem" },
                textAlign: 'start',
                marginLeft: { xs: "1rem", sm: "1rem", md: "3rem" },
                color: theme === "light" ? "white" : "white",
              }}
            >
              My name is Bujji and a passionate website designer and digital marketing service with 2 years of experience in creating visually stunning and user-friendly websites. I will transform your business ideas into stunning websites and promote your business website in order to bring in more visitors
            </Typography>
            <Box sx={{ marginLeft: { xs: "1rem", sm: "1rem", md: "3rem" }, textAlign: 'center' }}>
              <MidButton buttons={buttons} filter={filterData} selected={selected} />
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={5} sx={{ marginBottom: '400px' }}>
          <MidChild data={data} click={click} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MidFilterSection;
