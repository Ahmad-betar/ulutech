import React from "react";
import classes from "./ContactUs.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactForm from "./ContactForm/ContactForm";
import Link from "next/link";


const ContactUs = () => {
  




  return (
    <>
      <div className={classes.head}>
        <div className={classes.shadow}>
          <h3>Contact US</h3>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.firstSection}>
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>

          <div className={classes.links}>
            <span>
              <Link href = 'tel:123-123-123'>
              <LocalPhoneIcon sx={{ color: "var(--main-yellow)" }} />
              <p>+963 938882624</p>
              </Link>
            </span>
            <span>
              <Link href = "mailto:test@gmail.com">
              <MailIcon sx={{ color: "var(--main-yellow)" }} />
              <p>sadekBadwi1997@gmail.com</p>
              </Link>
            </span>
            <span>
              <Link href = 'https://goo.gl/maps/14eFnwmzPnYzvvpS9'>
              <LocationOnIcon sx={{ color: "var(--main-yellow)" }} />
                <p>Syria - Aleppo - Al Furqan </p>
              </Link>
            </span>
          </div>
        </div>
        <div className={classes.secondSection}>
          <ContactForm/>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
