import React from 'react';
import Clock from '../images/clock-img.png';
import Square from '../images/about-square.png';

const Booking = () => {
    return ( 
        <div className="booking">
            <div className="booking-content">

                <h1>BOOK A TABLE</h1>
                <div className="inputs">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone"/>
                    <input type="number" placeholder="People"/>
                    <input type="date" placeholder="Date"/>
                    <input type="t" placeholder="Time"/>
                </div>
                <button>BOOK NOW</button>

            </div>
            <div className="booking-img">
                <img src={Clock} alt=""/>
                <img src={Square} alt=""/>
            </div>
        </div>
     );
}
 
export default Booking;