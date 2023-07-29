'use client'

import React, { useEffect } from 'react'
import classes from './FristSection.module.css';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const FristSection = () => {

    const clickHandler = () => {
        window.scrollTo(0,550)

    }


    return (
        <div className={classes.background}>
            <div className={classes.shadow}>
                <div className={classes.content}>
                    <div className={classes.text}>
                        <h3>
                            Make the Difference
                        </h3>
                        <p>
                            Move to another level of success and professionalism
                            and stand out from
                            your competitors
                        </p>

                    </div>
                    <div className={classes.change}>
                        <button onClick={clickHandler}>
                            <ExpandCircleDownIcon sx={{
                                color: 'var(--main-yellow)'
                            }} />
                        </button>
                        <p>
                            Ready to make a change?
                            <br />
                            Then you are in the right place
                        </p>
                    </div>
                    {/* <button onClick={clickHandler}>
                        Hire US!
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default FristSection