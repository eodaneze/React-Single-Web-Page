import React,{useEffect} from 'react'
import "./Subscribe.css"
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import AOS from 'aos';
import "aos/dist/aos.css"

const Subscribe = () => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
      })
   },[])
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Subsribe Now!</h2>

        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
        </form>


        <IconContext.Provider value={{ size: "15" }}>
          <div className="social-icons">
            <div className="social-icon">
              <TiSocialGooglePlus />
            </div>
            <div className="social-icon">
              <FaFacebookF />
            </div>
            <div className="social-icon">
              <FaTwitter />
            </div>
            <div className="social-icon">
              <FaInstagram />
            </div>

          </div>

        </IconContext.Provider>
      </div>
    </section>
  )
}

export default Subscribe