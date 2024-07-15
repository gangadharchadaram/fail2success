import React, { useContext } from "react";
import { cardData } from "../../DataForPage/dummyData";
import star from "../../assets/images/star.svg";
import starWhite from "../../assets/images/starWhite.svg";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const FurnitureFlow = () => {
  const { theme } = useContext(ThemeBgContext);
  const starList = [1, 2, 3, 4, 5];
  return (
    <div id="Why Choose us">
      <div className="text-center">
        <h2
          className={
            theme === "light"
              ? "sm:text-5xl text-dark text-center text-5xl font-bold pt-20 no-underline font-inter align-middle tracking-wide normal-case leading-none cursor-pointer"
              : "sm:text-5xl text-white text-center text-5xl font-bold pt-20 no-underline font-inter align-middle tracking-wide normal-case leading-none cursor-pointer"
          }
        >
          Why Choose us?
        </h2>
       
      </div>
      <div className="sm:grid-cols-1 grid grid-cols-3 items-center gap-4 content-between w-full pt-12">
        {cardData.map((item) => {
          return (
            <motion.div
              className="sm:pl-0 mx-auto pl-1"
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Card
                className={
                  item.id === "1"
                    ? "w-80 bg-dark border border-white"
                    : "w-80 bg-white"
                }
              >
                <CardBody className="text-center">
                  <Typography
                    variant="h5"
                    className={
                      item.id === "1"
                        ? "mb-2 fonm-inter leading-normal no-underline align-middle tracking-wide normal-case text-white"
                        : "mb-2 fonm-inter leading-normal no-underline align-middle tracking-wide normal-case text-dark"
                    }
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className={
                      item.id === "1"
                        ? "mb-2 fonm-inter font-light leading-normal no-underline align-middle tracking-wide normal-case h-28 text-white"
                        : "mb-2 fonm-inter font-light  leading-normal no-underline align-middle tracking-wide normal-case h-20 text-dark"
                    }
                  >
                    {item.text}
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex flex-col items-center content-center justify-center py-3"
                >
                  
                  <div className="flex flex-row justify-center">
                    {starList.map((index) => {
                      return (
                        <div key={index}>
                          {item.id === "1" ? (
                            <img src={starWhite} alt="star"></img>
                          ) : (
                            <img src={star} alt="star"></img>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FurnitureFlow;