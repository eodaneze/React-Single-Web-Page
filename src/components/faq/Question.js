import React, { useState } from 'react'
// import usestate to toggle between questions & answers
import "./Question.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { questions } from './data.js'


// add a prop to get the questions and the answers from the Data.js
const Question = ({title, answer}) => {
    // codeblock for faq toggle

    const [showAnswer, setShowAnswer] = useState(false)

    // create the onclick function handleclick

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }
  return (
    <div className='container question'>
        <div className="question-title">
            <h4>{title}</h4>
             
             {/* add onclick properties to button to toggle between questions $ answers */}
            <button className='question-icon' onClick={handleClick}>

                    {/* creating a toggle function that we hid & display the plus and minus icon onclick */}
                 {
                     
                     

                     showAnswer ? <AiOutlineMinus color='red' /> : <AiOutlinePlus color='#1f93ff' />
                 }
            </button>
        </div>
        <div className="question-answer">
            
            {/* <p className="u-text-small">You can learn ReactJs from Dancode.com</p> */}
             {/* this expression means if showanswer is true then display the content of the p tag */}
            {showAnswer &&  <p className="u-text-small">{answer}</p>}
        </div> 
    </div>
  )
}

export default Question