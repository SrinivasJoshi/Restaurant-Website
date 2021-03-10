import React from 'react';
import chef from '../images/chef.png';
import teamBg from '../images/team-bg.png';
import square from '../images/about-square.png';

const Team = () => {
    return ( 
        <div className="team">
            <div className="team-img">
                <img src={chef} alt=""/>
                <img src={square} alt=""/>
            </div>
            <div className="team-text">
                <h1>MASTERCHEF</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a</h3>
                <p>.Tempor magna.Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
            </div>
        </div>
     );
}
 
export default Team;