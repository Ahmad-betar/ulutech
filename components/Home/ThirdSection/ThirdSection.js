import React from "react";
import classes from './ThirdSection.module.css';


const ThirdSection = () => {
  return (
    <div className={classes.container}>
        <div className={classes.first}>
            <img className={classes.image} src="/5.png"/>
        </div>
        <div className={classes.second}>
            <h3>Your best choice</h3>
            <h4>Why are we your best choice?</h4>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    A team with more than 10 years of experience 
                    guarantees you the best quality service.
                </li>
                <li className={classes.li}>
                    Our attention to detail always puts us first.
                </li>
                <li className={classes.li}>
                    Our belief in providing tangible value to our 
                    customers is what distinguishes the services and 
                    products we offer.
                </li>
            </ul>
        </div>
    </div>
  );
};

export default ThirdSection;
