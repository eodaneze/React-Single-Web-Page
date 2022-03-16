import React from 'react'
import "./Button.css"

const Button = ({text, btnClass, href}) => {
    // the parameter that is passed inside the above braces is called props
  return (
     <a href={href} className={`btn ${btnClass}`}>{text}</a>
  )
}

export default Button