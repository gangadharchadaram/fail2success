import React, { useState, useEffect, useContext } from "react";
import { Button, Grid, Typography, Box, Paper } from "@mui/material";
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
        // pb: 7,
        textAlign: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={5} sx={{ marginTop: '100px' }}>
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
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                textAlign: 'start',
                marginLeft: {xs: "1rem", sm: "1rem", md: "3rem"},
                fontWeight: "bold",
                color: theme === "light" ? "white" : "white",
              }}
            >
              About Bujji
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" },
                textAlign: 'start',
                marginLeft: {xs: "1rem", sm: "1rem", md: "3rem"},
                paddingTop: '20px',
                color: theme === "light" ? "white" : "white",
              }}
            >
              My name is Bujji and a passionate freelance website designer <br /> with 2 years of experience in creating visually stunning and user-friendly websites
            </Typography>
            <Box sx={{ marginLeft: { xs: "1rem", sm: "1rem", md: "3rem" }, textAlign: 'center' }}>
              <MidButton buttons={buttons} filter={filterData} selected={selected} />
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={5} sx={{ marginBottom: '400px', marginTop: { xs: "1rem", sm: "1rem", md: "5rem" }}}>
          <MidChild data={data} click={click} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MidFilterSection;
