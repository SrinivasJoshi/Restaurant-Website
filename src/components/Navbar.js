import logo from '../images/logo-circle.png';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="nav-items">
                <li>home</li>
                <li>about</li>
                <li>team</li>
                <li>booking</li>
                <div className="logo">
                <img src={logo} alt=""/>
                </div>
                <li>menu</li>
                <li>galerie</li>
                <li>events</li>
                <li>contact</li>
                </div>
            <li className="btn">v</li>
        </div>
     );
}
 
export default Navbar;