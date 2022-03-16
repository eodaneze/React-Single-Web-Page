import React,{useEffect} from 'react'
import './Features.css'
import { BsFillBookmarkStarFill } from "react-icons/bs"
import phoneFeatures from "../../assets/phone-features.png"
import Feature from './Feature'
import { featureList } from './data.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
      <section id='features'>
         <div className="container">
             <div className="u-title" data-aos="fade-up">
                 <BsFillBookmarkStarFill color='orangered' size={30}/>
                 <h2>Core Features</h2>
                 <p className="u-text-small u-text-dark">
                    SocialX App has a Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde, excepturi aut numquam amet eligendi.
                 </p>
              </div>

              <div className="features-content">
                  <div className="features-left" data-aos="fade-right">
                     <img src={phoneFeatures} alt="phone" />
                  </div>
                  <div className="features-right" data-aos="fade-left">
                    {/* map through the data that is holding the feature left */}

                    {
                      featureList.map((feature) => (
                        <Feature
                         key={feature.id}
                          icon={feature.icon} 
                          heading={feature.heading} text={feature.text}
                         />

                        // reference a key first to avoid console.log error
                      ))
                    }
                    
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Features