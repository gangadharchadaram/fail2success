import React, { useContext, useRef } from "react";
import { room } from "../../DataForPage/dummyData";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const MidComponentItem = ({ title, img, text1, text2, text3, text4, text5, text6, text7, reverse }) => {
  const { theme } = useContext(ThemeBgContext);
  const targetSectionRef = useRef(null);
  const handleButtonClick = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: '70px', fontSize: '45px', textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 4px 4px 0 #000', // Add multiple shadows for a 3D effect
          transform: 'rotateX(10deg) rotateY(-1deg)', // Slight 3D rotation
          color: '#0164a5',
          letterSpacing: '0.1em', // Add letter spacing
          fontFamily: '"Lucida Console", "Courier New', fontWeight: '700'}}>MEET BUJJI</h1>
    <p className="sm:text-5sm" style={{textAlign: 'center', marginTop: '10px', fontSize: '15px', color: 'white'}}>Here are the services we are providing</p>
    <div id="company">
      {reverse ? (
        <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
          <motion.div
            className="sm:w-full sm:pl-4 w-4/5 pl-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h2 style={{color: '#fff'}}
              className={
                theme === "light"
                  ? "sm:text-xl text-4xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-info"
                  : "sm:text-xl text-4xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-info"
              }
            >
              {title}
            </h2>
            <p
              className={
                theme === "light"
                  ? "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text1}
            </p>
            <p
              className={
                theme === "light"
                  ? "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text2}
            </p>
            <p
              className={
                theme === "light"
                  ? "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text3}
            </p>
            <p
              className={
                theme === "light"
                  ? "sm:text-sm text-2sm w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-sm text-2sm w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text4}
            </p>
            <p
              className={
                theme === "light"
                  ? "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text5}
            </p>
            <p
              className={
                theme === "light"
                  ? "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text6}
            </p>
            <p
              className={
                theme === "light"
                  ? "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-sm text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text7}
            </p>
            <button className="pushable mt-4">
              <span className="front">Start now</span>
            </button>
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <img
              className="sm:h-[275px] h-[475px] pt-10 hover:rotate-6 duration-1000 cursor-pointer"
              src={img}
              alt="phone1"
            ></img>
          </motion.div>
        </div>
      ) : (
        <div
          id="room"
          className="sm:flex-col flex flex-row-reverse justify-around items-center w-full"
        >
          <div className="sm:w-full sm:pl-4 pb-4">
            <h2 style={{color: '#fff'}}
              className={
                theme === "light"
                  ? "sm:text-2sm text-4xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-info"
                  : "sm:text-2sm text-4xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-info"
              }
            >
              {title}
            </h2>

            <div className="flex flex-col">
              {room.map((item) => {
                return (
                  <div className="flex items-center py-2" key={item.id}>
                    <p
                      className={"sm:text-sm text-xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white w-full "
                      }
                    >
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div ref={targetSectionRef} id="connect">
            <button className="pushable mt-6" onClick={handleButtonClick}>
              <span className="front">Start now</span>
            </button>
            </div>
          </div>
          
          <div>
            <img
              className="sm:h-[275px] h-[575px] pt-1 hover:rotate-[-6deg] duration-1000 cursor-pointer"
              src={img}
              alt="phone"
            ></img>
          </div>
        
        </div>
      )}
    </div>
  </>
  );
};

export default MidComponentItem;
