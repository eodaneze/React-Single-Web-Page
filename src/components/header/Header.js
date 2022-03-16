import React,{ useEffect } from 'react';

// import useeffect to make use of the AOS scroll
import "./Header.css";
import phoneHeader from "../../assets/phone-header-bg.png"
import Button from '../UI/button/Button';
import "../UI/button/Button.css";
import { BsMouse } from "react-icons/bs";
// import "../navbar/Navbar.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
      });
   },[])


  return (
     <section id='header'>
         <div className="container header">
            <div className="header-left" data-aos="fade-right">
               <h1>
                   <span>THE WORLD'S LEADING</span>
                   <span>CROSS-PLATFORM SECURE</span>
                   <span>MESSAGING SYSTEM</span>
               </h1>
               <p className='u-text-small u-text-light'>
                  DanCodeX is a Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque consectetur quia velit eius atque explicabo aspernatur, labore laborum dolores quod!

                  
               </p>
               <div className="header-cta">
                       <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"}/>
                       <Button text={"How It Works"} btnClass={"btn-orange"} href={"#faq"}/>
                   </div>
            </div>
            <div className="header-right" data-aos="fade-left">
               <img src={phoneHeader} alt="" />
            </div>
         </div>
         <div className="float-icon">
             <a href="#features">
                <BsMouse color='#fff' size={25} className="mouse" />
             </a>
         </div>
     </section>
  )
}

export default Header