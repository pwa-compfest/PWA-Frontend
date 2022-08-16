import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const COLOR = {
    INITIAL: "#F0F0F3",
    HIGH: "#4FE0B6",
    MEDIUM: "#FBD85C",
    LOW: "#FF6868"
}

function CircleProgressBar({ value }) {
    const [ pathColor, setPathColor ] = useState(COLOR.INITIAL)

    useEffect(() => {
        if ( value < 40 ) {
            setPathColor(COLOR.LOW)
        } else if ( value < 80 ) {
            setPathColor(COLOR.MEDIUM) 
        } else {
            setPathColor(COLOR.HIGH)
        }

    }, [value])

    return (
        <CircularProgressbar
            value={value}
            text={value}
            strokeWidth={12}
            styles={buildStyles({
            textColor: "#14151A",
            textSize: "24px",
            pathColor: pathColor,
            trailColor: COLOR.INITIAL
            })}
        />
    )
}

export default CircleProgressBar;