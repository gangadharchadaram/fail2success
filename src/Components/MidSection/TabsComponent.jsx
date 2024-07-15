import React, { useContext, useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../../DataForPage/dummyData";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import { styled, keyframes } from "@mui/system";

// Define keyframes for animations
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

const slowFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Content = styled("div")({
  animation: `${fadeIn} 1.5s ease-out`,
});

const AnimatedTabPanel = styled(TabPanel)({
  animation: `${slowFade} 2s ease-out`,
});

const AnimatedImage = styled("img")({
  animation: `${fadeIn} 2s ease-out, ${slideUp} 2s ease-out`,
});

const TabsComponent = () => {
  const [paddingLeft, setPaddingLeft] = useState('200px');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setPaddingLeft('50px');
      } else if (width <= 1024) {
        setPaddingLeft('100px');
      } else {
        setPaddingLeft('200px');
      }
    };

    handleResize(); // Set the initial padding
    window.addEventListener('resize', handleResize); // Update padding on resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { theme } = useContext(ThemeBgContext);

  return (
    <div id="Features" style={{ marginBottom: "90px" }}>
      <Tabs
        id="custom-animation"
        value="bedroom"
        className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center content-between w-full"
      >
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
          <Content>
            <h1
              className={
                theme === "light"
                  ? "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              Features
            </h1>
            <p
              className={
                theme === "light"
                  ? "sm:text-xl text-2xl pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-xl text-2xl pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              Bujji offers many great features. 
            </p>
          </Content>
          <TabsHeader className="sm:flex-col flex justify-center items-center content-center bg-gray-100">
            {tabsData.map(({ label, value }) => (
              <Tab className="" key={value} value={value}>
                <p className="text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case">
                  {label}
                </p>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, desc, linkText }) => (
              <AnimatedTabPanel key={value} value={value}>
                <p
                  className={
                    theme === "light"
                      ? "text-lg relative right-3 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                      : "text-lg relative right-3 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                  }
                >
                  {desc}
                </p>
                <span className="text-red font-inter leading-normal no-underline align-middle tracking-wide normal-case relative cursor-pointer right-3 hover:animate-puls">
                  {linkText}
                </span>
              </AnimatedTabPanel>
            ))}
          </TabsBody>
        </div>
        <div>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, img }) => (
              <AnimatedTabPanel key={value} value={value}>
                <AnimatedImage className="h-[250px]" src={img} alt="phone" style={{ paddingLeft }} />
              </AnimatedTabPanel>
            ))}
            {tabsData.map(({ value, text }) => (
              <AnimatedTabPanel key={value} value={value}>
                <p style={{ textAlign: 'center', color: "white" }}>{text}</p>
              </AnimatedTabPanel>
            ))}
          </TabsBody>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
