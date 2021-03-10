import React from 'react';
import headerBg from '../images/header-bg.png';
import Navbar from './Navbar';

const Header = () => {
    return ( 
        <div className="header">
            <img src={headerBg} alt=""/>
            <Navbar></Navbar>
            <div className="main-title">

                <div className="title">
                <p>RESTAURANT</p>
                <h1>HUNGRY PEOPLE</h1>
                </div>
                
                <div className="btns">
                <button>BOOK TABLE</button>
                <button>EXPLORE</button>
                </div>
            </div>
        </div>
     );
}
 
export default Header;
