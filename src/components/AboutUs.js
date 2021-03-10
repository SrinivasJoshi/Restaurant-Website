import React from 'react';
import abtImg from '../images/about-img.png';
import abtSqr from '../images/about-square.png';

const AboutUs = () => {
    return ( 
        <div className="aboutus">
            <div className="abt-text">
                <h1>ABOUT US</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <p>Duis at velit maximus, molestie est a, tempor magna.
                   Integer ullamcorper neque eu purus euismod, ac faucibus mauris posu
                   ere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper 
                   feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. 
                   Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis 
                   semper laoreet.</p>
            </div>
            <div className="abt-img">
                <img src={abtImg} alt=""/>
                <img src={abtSqr} alt=""/>
            </div>
        </div>
     );
}
 
export default AboutUs;