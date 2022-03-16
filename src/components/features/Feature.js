import React from 'react'
import "./Feature.css";
// import feature list from Data js
import { featureList } from './data.js';

import { BsHexagon } from "react-icons/bs"
import { FaAccessibleIcon, FaGg } from "react-icons/fa"
const Feature = ({icon, heading, text}) => {

    // instead of having your feature-left hard coded, passin a prop to the arrow function
  return (
    <div className='feature'>
         <div className="feature-icon">
              <BsHexagon color='orangered' size={55} />
              <div className="inner-icon">
                  {icon}
              </div>
         </div>
         <div className="feature-text">
              <h3>{heading}</h3>
              <p className="u-text-small">
                  {text}
              </p>
        </div>
    </div>
  )
}

export default Feature