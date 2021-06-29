import React from 'react';
import headerBg from '../images/header-bg.png';
import Navbar from './Navbar';
import {motion} from 'framer-motion';

const Header = () => {
    return ( 
        <div className="header">
            <Navbar></Navbar>
            <div className="main-title">

                <motion.div className="title"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:.8,duration:1}}
                >
                <p>RESTAURANT</p>
                <h1>HUNGRY PEOPLE</h1>
                </motion.div>
                
                <div className="btns">
                <motion.button
                initial={
                    {x:'-100vw',y:0}
                }
                animate={
                    {x:0,y:0 }
                }
                transition={{type:'spring',delay:.3,stiffness:17}}
                >BOOK TABLE</motion.button>
                < motion.button
                initial={
                    {x:'100vw',y:0}
                }
                transition={{type:'spring',delay:.3,stiffness:17}}
                animate={
                    {x:0,y:0 }
                }
                >EXPLORE</motion.button>
                </div>
            </div>
        </div>
     );
}
 
export default Header;
