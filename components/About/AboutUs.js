import React from "react";
import classes from "./AboutUs.module.css";
import StarIcon from "@mui/icons-material/Star";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const AboutUs = () => {
  return (
    <>
      <div className={classes.head}>
        <div className={classes.shadow}>
          <h3>About US</h3>
        </div>
      </div>
      <div className={classes.all}>
        <h3 className={classes.h3}>
          We offer a unique coffee house environment unlike any other in N.Y.
        </h3>

        <div className={classes.first}>
          <div className={classes.one}>
            <StarIcon
              sx={{
                width: "20%",
                height: "auto",
                color: "yellow",
              }}
            />
            <p>+100</p>
            <p>Stars Reviewed</p>
          </div>
          <div className={classes.two}>
            <HandshakeIcon
              sx={{
                width: "20%",
                height: "auto",
                color: "yellow",
              }}
            />
            <p>+30</p>
            <p>Projects Done</p>
          </div>
          <div className={classes.three}>
            <AccessTimeIcon
              sx={{
                width: "20%",
                height: "auto",
                color: "yellow",
              }}
            />
            <p>+10</p>
            <p>Years Experience</p>
          </div>
        </div>

        <div className={classes.second}>
          <div className={classes.one}>
            <p>
              We are excited to introduce our Coffee Shop magna aliqua. Ut enim
              ad minim veniam, quis nostrud.
            </p>
          </div>
          <div className={classes.two}>
            <h4 className={classes.h4}>
              The perfect place to enjoy your coffee
            </h4>
            <ul className={classes.ul}>
              <li className={classes.li} key= '1'>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </li>
              <li className={classes.li} key= '2'>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </li>
              <li className={classes.li} key= '3'>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </li>
            </ul>
          </div>
        </div>

        {/* <div className={classes.second}>
          <div className={classes.one}>
            <p>
              We are excited to introduce our Coffee Shop magna aliqua. Ut enim
              ad minim veniam, quis nostrud.
            </p>
            <hr></hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Consectetur adipisicing elit.
            </p>
          </div>
          
        </div> */}
      </div>
    </>
  );
};

export default AboutUs;
