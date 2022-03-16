import React,{useEffect} from 'react'
import { MdOutlineLibraryBooks } from "react-icons/md";
import "./Faq.css"
import Question from './Question';
import { questions } from './data';
import AOS from 'aos';
import "aos/dist/aos.css"
const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
   });
  },[])
  return (
    <section id='faq'>

      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color='orangered' size={30} />
          <h2>FAQS</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo natus debitis voluptatibus molestiae aliquam placeat, consectetur accusantium, distinctio architecto tempora vero? Ratione, soluta. Sapiente, quo?
          </p>
        </div>
         <div className="questions" data-aos="fade-up">
           {
             questions.map((question) => (

              <Question key={question.id}  title={question.title} answer={question.answer}/>
             ))
           }
           
         </div>
      </div>
    </section>
  )
}

export default Faq