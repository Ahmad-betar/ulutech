'use client'

import React from "react";
import classes from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.one}>
        <h3>About US</h3>
        <p>Thank you for choosing ulutech as your trusted partner. Let's transform the way you do business, together.</p>
      </div>
      <div className={classes.two}>
        <h3>Social Media</h3>
        <p>Join us on our digital journey! At ulutech, we're passionate about all things technology, innovation, and digital transformation. Connect with us on social media and become part of our vibrant community.</p>
        <div className={classes.social}>
            <Link href='http://www.facebook.com' >
                <FacebookIcon/>
            </Link>
            <Link href='http://www.ulutech.com'>
                <GoogleIcon/>
            </Link>
            <Link href='http://www.linkedin.com'>
                <LinkedInIcon/>
            </Link>
            <Link href='http://www.twitter.com'>
                <TwitterIcon/>
            </Link>

        </div>
      </div>
      <div className={classes.three}>
        <h3>Contact</h3>
        <p className={classes.location}>
            www.ulutech.com
            <br></br>
            Syria Aleppo
        </p>
        <p>
        At ulutech, our vision is to be the premier partner in the realms of information technology, innovation, and digital transformation.
            
            </p>
      </div>
    </div>
  );
};

export default Footer;
