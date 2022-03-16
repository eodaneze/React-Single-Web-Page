import React, { useState } from 'react'
// to make responsive navbar import use state
// import Button from '../components/UI/button/Button';
import "./Navbar.css"

import { SiAnaconda } from "react-icons/si";
import { RiCloseLine } from "react-icons/ri";
import Button from '../UI/button/Button';
import "../UI/button/Button.css"



const Navbar = () => {
    // creating a show manu state
    const [showMenu, setShowMenu] = useState(false);
    // if the above use state is set to false then the close icon will not show

    const toggleMenu = () => {
        setShowMenu(!showMenu)

        // the above will nagate the icons.. if you click on the menu icon, it will show the close icon and vice versa
    }


    return (

        <div className="all-nav">
            <nav className='container navbar'>
                <div className="logo">
                    <SiAnaconda color='#fff' size={33} />
                    <p className="logo-text">DanCode<span>X</span></p>
                </div>
                <main>
                    <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
                        {/* add an id to the ul tag for mobile responsiveness */}
                        <li><a href="#">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#download">Download</a></li>
                        <li><a href="#subscribe">Subscribe</a></li>
                        {/* <li className='nav-btn'><a href="#" className='btn btn-dark'>Get Started</a></li> */}
                        <li className='nav-btn'>
                             <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"}/>
                        </li>
                        

                    </ul>
                </main>
                <div className="menu-icons" onClick={toggleMenu}>
                    {/* creating a toggle function that we hid & display the menu onclick */}
                    {
                        showMenu ? (
                            <RiCloseLine color="#fff" size={30} />
                        ) : (<i className="fa fa-bars" color='#fff'></i>
                        )}
                </div>


            </nav >
        </div>
    )
}

export default Navbar

