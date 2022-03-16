import React,{useEffect} from 'react'
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons/";
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./Download.css"

// react icon context is used if you want to add the same styling to a react icon so icon context is used to aviod repetation

const Download = () => {
  useEffect(() => {
    AOS.init({
       duration: 1000,
    });
  },[])
  return (
    <section id='download'>
      <div className="container download" data-aos="fade-down">
        <h2>
          SOCIALX MESSENGER DOWNLOAD
        </h2>
        <p className="u-text-small u-text-light">
          Our apps are available for download on all stores
        </p>
        <IconContext.Provider value={{ size: "15"}}>
           


          <div className="download-icons">
            <div className="download-icon">
              < FaApple /> <p>IOS</p>
            
            </div>
            <div className="download-icon">
            < FaWindows /> <p>Windows</p>
            </div>
            <div className="download-icon">
            <GrAndroid /> <p>Andriod</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  )
}

export default Download