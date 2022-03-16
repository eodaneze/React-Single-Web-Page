import React from 'react';
import "./Footer.css"
import Logo from "../../assets/logo-2.png"
import{
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
 
}
from "react-icons/fa"

const Footer = () => {
  return (
    <footer id="footer">
       <div className="container footer">
          <div className="footer-box">
             <h4>Useful Links</h4>
             <div className="footer-links">
                <a href="">&bull; Support</a>
                <a href="">&bull; About</a>
                <a href="">&bull; Learn</a>
                <a href="">&bull; Hosting</a>
                <a href="">&bull; Messenger</a>
             </div>
          </div>
          <div className="footer-box">
          <h4>Support</h4>
             <div className="footer-links">
                <a href="">&bull; Support</a>
                <a href="">&bull; About</a>
                <a href="">&bull; Learn</a>
                <a href="">&bull; Hosting</a>
                <a href="">&bull; Messenger</a>
             </div>
          </div>
          <div className="footer-box">
             <h4>Contact Us</h4>
              <div className="footer-contact">
                   <p>
                      <FaMapMarkerAlt /> &nbsp; Address: United States
                   </p>
                   <p>
                      <FaPhoneAlt />  &nbsp;  Phone: +2348164869025
                   </p>
                   <p>
                      <FaFax /> &nbsp;  Fax: +2348164869025
                   </p>
                   <p>
                      <FaEnvelope />  &nbsp;  Email: info@gmail.com
                   </p>
                   <p>
                      <FaGlobe />  &nbsp;  Website: www.dancode.com
                   </p>
              </div>
          </div>
          <div className="footer-box">
             <img src={Logo} alt="logo" />
             <p className="u-small-text">
                &copy; Copyright 2022. Dancode
             </p>
          </div>
       </div>
    </footer>
  )
}

export default Footer