import React from 'react'
import classes from './SecondSection.module.css'
import CodeIcon from '@mui/icons-material/Code';
import dynamic from 'next/dynamic';


const SecondSection = () => {




  return (
    <div className={classes.secondSection}>
        <div className={classes.header}>
            <h3 className={classes.services}>OUR SERVICES</h3>
            <p className={classes.provide}>We provide our sevices with the best quality and the fastest time</p>
            <hr className={classes.hr}/>
        </div>
        <div className={classes.all}>
            <div className={classes.element}>
                    <img className={classes.img} src='/7.png'/>
                
                <h4>Website design and E-commerce Services</h4>
                <p>The world is living inside the Internet, and you are what is holding you back so far from them…!??</p>
                <button>HIRE US!</button>
            </div>
            <div className={classes.element}>
                <div className={classes.container}>
                    <CodeIcon sx={{
                        color : 'var(--main-dark-yellow)',
                        width : '100%',
                        height : '100%'
                    }}/>
                </div>
                <h4>Design and e-marketing</h4>
                <p>It is undoubtedly indispensable and makes a special and unique imprint for your company or organization</p>
                <button>HIRE US!</button>
            </div>
            <div className={classes.element}>
                <div className={classes.container}>
                    <CodeIcon sx={{
                        color : 'var(--main-dark-yellow)',
                        width : '100%',
                        height : '100%'
                    }}/>
                </div>
                <h4>Mobile Application Development</h4>
                <p>Design and development of mobile applications on Android and iOS</p>
                <button>HIRE US!</button>
            </div>
            <div className={classes.element}>
                <div className={classes.container}>
                    <CodeIcon sx={{
                        color : 'var(--main-dark-yellow)',
                        width : '100%',
                        height : '100%'
                    }}/>
                </div>
                <h4>Programming and Technical Solutions</h4>
                <p>We create software and technology solutions to enable our partners to increase their productivity and competencies </p>
                <button>HIRE US!</button>
            </div>
        </div>

    </div>
  )
}

export default SecondSection