import React from 'react';

const Contact = () => {
    return ( 
        <div className="contact">
            <h1>CONTACT</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Officia doloribus laborum dolorum excepturi labore,</p>

            <div className="contact-inputs">
                <input type="text" placeholder="Name "/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Phone"/>
                <input type="text" placeholder="Message"/>
            </div>
            <button>SEND MESSAGE</button>
        </div>
     );
}
 
export default Contact;