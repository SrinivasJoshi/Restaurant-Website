import logo from '../images/logo-circle.png';
import menu from '../images/menu-hun.png';
import {useState} from 'react';

const Navbar = () => {
    let style2={
        top:'3%',
    }
    let [navMenu, setNavMenu] = useState(false);
    let [linkStyle, setLinkStyle] = useState({display:'none',});

    const changeMenu = () =>{
        setNavMenu(navMenu=!navMenu)
        if(navMenu){
            setLinkStyle( linkStyle={
                position: 'static',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                backgroundColor: '#171717',   
            })
        }
        else{
            setLinkStyle(linkStyle={display:'none'})
        }
    }
    return ( 
        <div className="navbar">
            <div className="logosmall" style={style2}>
                    <img src={logo} alt="" />
            </div>
            <div className="nav-items" style={linkStyle}>
                <li>home</li >
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
            <img src={menu} className="menu-btn" onClick={changeMenu}/>
        </div>
     );
}
 
export default Navbar;