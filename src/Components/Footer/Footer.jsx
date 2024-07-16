import React from "react";
import { FooterData1 } from "../../DataForPage/dummyData";

import logo from "../../assets/images/logo.png";


import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="sm:grid-cols-2 grid grid-cols-4 gap-0 items-center justify-items-center">
        <div className="sm:w-full sm:pl-8 h-64 mx-auto pl-24">
          <div>
            <img className="h-35 w-40 cursor-pointer" src={logo} alt="logo"></img>
          </div>
          
        </div>
        <div className="sm:pr-4 h-64">
          <h3 className="text-dark font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case">
            Features
          </h3>
          {FooterData1.map((item) => {
            return (
              <div key={item.id}>
                <p className="text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="sm:pr-8 h-80">
        <Grid item xs={12} md={6}>
            <Box>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2848752979976!2d82.20148707483957!3d17.688292599624037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967fc3e226b91%3A0x23456cebcde9e6e4!2sAkkayyapalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1671461463068!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            
            </Box>
          </Grid>
        </div>
        <div className="sm:pl-8 h-64">
        <Box mt={2}>
                <Typography variant="body1">
                  <strong>Location:</strong> Akkayyapalem, Visakhapatnam
                </Typography>
                <Typography variant="body1">
                  <strong>Availability:</strong> 24/7
                </Typography>
                <Typography variant="body1">
                  <strong>Phone:</strong> 321-555-5555
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> fail2succes@gmail.com
                </Typography>
              </Box>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="sm:w-full h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex justify-around items-center py-6">
        <div>
          <p className="sm:text-sm text-dark pb-2 font-inter font-medium cursor-pointer no-underline align-middle tracking-wide normal-case">
            Fail 2 Success
          </p>
        </div>
        <div>
          <p className="sm:text-xs text-dark pb-2 font-inter font-light cursor-pointer no-underline align-middle tracking-wide normal-case">
            Copyright {year} page by F2S
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
