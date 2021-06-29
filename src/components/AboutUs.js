import React from 'react';
import abtImg from '../images/about-img.png';
import abtSqr from '../images/about-square.png';
import { motion } from 'framer-motion';
import { Frame, Scroll } from 'framer' 



const AboutUs = () => {
    function onScroll(info) {
        console.log(info.offset, info.velocity)
      }
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
                <motion.img initial={{opacity:0}} animate={{opacity:1}} src={abtImg} alt="" loading="lazy" />
                <motion.img initial={{opacity:0}} animate={{opacity:1}} src={abtSqr} alt="" loading="lazy"/>
            </div>
            
        </div>
        
     );
}
 
export default AboutUs;