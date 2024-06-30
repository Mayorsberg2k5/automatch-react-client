import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


const Faq = () => {
    return (

      
<div className="pagebackground">
  <div className="faqs">
    <div className="container">
      <div className="accordion">
        <details className="accordion-item">
          <summary className="accordion-link">
            How can I save my results?
          </summary>
          <div className="answer">
            <p>
              {" "}
              Using the account login <FontAwesomeIcon icon={faUser} /> button
              you can create an account which allows you to save your results.
            </p>
          </div>
        </details>
        <details className="accordion-item">
          <summary className="accordion-link">
            How soon will I get my vehicle recommendations?
          </summary>
          <div className="answer">
            <p>
              {" "}
              As soon as you complete the questionnaire, your recommendations
              will populate.
            </p>
          </div>
        </details>
        <details className="accordion-item">
          <summary className="accordion-link">
            Can I share my results with others?
          </summary>
          <div className="answer">
            <p> That feature is not built in yet, but we are working on it.</p>
          </div>
        </details>
        <details className="accordion-item">
          <summary className="accordion-link">
            Does this process cost money?
          </summary>
          <div className="answer">
            <p>
              {" "}
              This is absolutely free of charge. All we ask is that you create
              an account to keep track of your results and tell your friends
              about it!
            </p>
          </div>
        </details>
      </div>
      <div>
        <a href="./Form" className="get-startedfaq">
          Get Started
        </a>
      </div>
    </div>
  </div>
</div>
    )
  }

  export default Faq