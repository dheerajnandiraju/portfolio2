import React from "react";
import "./contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  function sendEmail() {
    window.location = "mailto:dheerajnandiraju@gmail.com";
  }

  function insta() {
    window.location = "https://www.instagram.com/dheerajnandiraju/";
  }

  function linkedin() {
    window.location = "https://www.linkedin.com/in/dheeraj-nandiraju/";
  }
  return (
    <div className="mid">
      <div className="get">GET IN TOUCH</div>
      <div className="circle">
        <div className="insidecir">GET IN TOUCH</div>
        <div className="insidediv">
          <button onClick={sendEmail} className="insidebutt">
            <span>START A PROJECT</span>
          </button>
          <p className="tt">
            If you want to reach me out for a Recruitment, New Projects,
            Freelance or just for Consulting
          </p>
          <div className="text1">
            <div className="numm">1</div>
            <div className="ttt">Write me an email</div>
          </div>

          <p className="mail">dheerajnandiraju@gmail.com</p>

          <div className="text1">
            <div className="numm">2</div>
            <div className="ttt">Let's be social</div>
          </div>
          <div className="icons">
            <FaInstagram onClick={insta} />
            <FaLinkedinIn onClick={linkedin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
