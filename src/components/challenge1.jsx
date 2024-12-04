import React from "react";
import reactDom from 'react-dom'

function Greeting() {
    const date = new Date;
    const currentTime = date.getHours()
    let greeting;
    if (currentTime < 12) {
        greeting="Good Morning"
    } else if (currentTime < 18) {
        greeting="Good Afternoon"
    }
    else {
        greeting="Good Night"
    }
    return (
        <>
            <h2>{ greeting}</h2>
        </>
    )
}
export default Greeting;