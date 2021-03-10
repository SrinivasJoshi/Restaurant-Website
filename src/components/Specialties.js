import React from 'react';
import strawberry from '../images/strawberry.png';
import bg from '../images/specialty-bg.png';
import square from '../images/about-square.png';

const Specialties = () => {
    return ( 
        <div className="specialties">
            <div className="spe-img">
                <img src={strawberry} alt=""/>
                <img src={square} alt=""/>
            </div>

            <div className="spe-text">
                <h1>SPECIALTIES</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a</h3>
                <p>.Tempor magna.Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
            </div>

        </div>
     );
}
 
export default Specialties;