import React, { useState } from "react";
import MidComponentItem from "./MidComponentItem";
import MidPhone1 from "../../assets/images/SEO.png";
import MidPhone2 from "../../assets/images/webdesign.png";
import { IconButton, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const MidComponentParent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Social media marketing & Google Ads",
      text1: "1)Facebook, Instagram, LinkedIn",
      text2: "2)Keyword Research",
      text3: "3)Posting 15 poster/videos/stories",
      text4: "4)Content Planning for month",
      text5: "5)Ad manager creation",
      text6: "6)2 Facbook, Instagram & Google Ad Campaign",
      text7: "7)Google my business setup",
      img: MidPhone1,
      reverse: true
    },
    {
      title: "Web Development Pack",
      img: MidPhone2
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handlePrev}>
        <ArrowBackIos />
      </IconButton>
      <Box flexGrow={1} mx={2}>
        <MidComponentItem
          title={items[currentIndex].title}
          text1={items[currentIndex].text1}
          text2={items[currentIndex].text2}
          text3={items[currentIndex].text3}
          text4={items[currentIndex].text4}
          text5={items[currentIndex].text5}
          text6={items[currentIndex].text6}
          text7={items[currentIndex].text7}
          img={items[currentIndex].img}
          reverse={items[currentIndex].reverse}
        />
      </Box>
      <IconButton onClick={handleNext}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default MidComponentParent;
