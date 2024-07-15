import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { keyframes } from "@mui/system";

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

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setPhoneNumber("");
    console.log("email", email);
  };

  return (
    <div className="flex items-center justify-center content-center justify-items-centerrelative">
      <div className="sm:flex-col sm:py-10 bottom-14 h-full flex justify-evenly bg-white w-4/5 py-24 rounded-xl translate-y-32 duration-700">
        <div style={{animation: `${fadeIn} 1s ease-out, ${slideUp} 1s ease-out`,}}>
          <h2 className="sm:text-2xl w-full text-4xl pt-4 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-blue pl-2">
            Connect With Us
          </h2>
        
        </div>
        <div className="sm:flex-col flex items-center justify-center content-center">
          <div className="sm:flex-col flex pb-4 pt-4 w-64 text-black animate-fadeIn">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white"
              label="Email"
            />
            <Input
              name="number"
              type="Phone number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white"
              label="Phone number"
            />
          </div>
          <div>
            <Button onClick={handleEmail} ripple={true} className="ml-40">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
