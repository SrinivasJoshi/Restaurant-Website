import React from 'react';
import smbg from '../images/specialty-bg.png';
import eve1 from '../images/eve1.png';
import eve2 from '../images/eve2.png';
import square from '../images/about-square.png';
import img1 from '../images/inside-1.png';
import img2 from '../images/inside-2.png';
import img3 from '../images/inside-3.png';
import img4 from '../images/inside-4.png';

const Events = () => {
    return ( 
        <div className="events">
            <h3>PRIVATE EVENTS</h3>
            <div className="event-img-1">

                <div className="part1">
                  <img src={square} alt=""/>
                  <img src={eve1} alt=""/>
                </div>
                
                <div className="part2">
                    <img src={eve2} alt=""/>
                    <img src={square} alt=""/>
                </div>
                
            </div>
            <p>For private events please call: +40 729 131 637/+40 726 458 782 or use the contact form.</p>
            <div className="event-img-2">
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
            </div>
        </div>
    );
}
 
export default Events;