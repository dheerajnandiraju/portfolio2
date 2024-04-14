import React from "react";
import "./achivements.css";
import one from "./certificates/one.jpg";
import two from "./certificates/two.jpg";
import three from "./certificates/three.jpg";
import four from "./certificates/four.jpg";
import five from "./certificates/five.jpg";
import six from "./certificates/six.jpg";
import seven from "./certificates/seven.jpg";
import eight from "./certificates/eight.jpg";
import Card from "./card";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function Achivements() {
  let box = document.getElementsByClassName("caro")[0];
  let current = 0;

  const moveUp = () => {
    let width = box.offsetHeight;
    box.scrollBy(current, current - width);
    console.log(width);
  };

  const moveDown = () => {
    let width = box.offsetHeight;
    box.scrollBy(current, current + width);
    console.log(width);
  };

  return (
    <div style={{ margin: "0rem 0rem 4vw 0rem" }}>
      <div id="head">Achivements</div>
      <button onClick={moveUp} className="arrowOut">
        <FaArrowUp className="arrow" size={30} />
      </button>
      <div className="caro">
        <Card
          img={one}
          pg={
            "This certificate marks my completion of Udemy's 'Complete 2024 Web Dev Bootcamp."
          }
        />
        <Card
          img={two}
          pg={
            "This certificate marks my achievement of 1st place in the IEEE MJCET Hackathon."
          }
        />
        <Card
          img={three}
          pg={
            "This certificate is awarded for reaching the final round at CBIT hackathon SUDHEE 2024."
          }
        />
        <Card
          img={four}
          pg={
            "This certificate marks my successful completion of the NPTEL course 'Introduction to Japanese Language and Culture.'"
          }
        />
        <Card
          img={five}
          pg={
            "This certificate is presented in recognition of my attendance and completion of the Microsoft Student Ambassadors JavaScript & React.js Bootcamp."
          }
        />
        <Card
          img={six}
          pg={
            "This certificate marks my successful completion of a 7-day bootcamp with DevTown on JavaScript & React.js."
          }
        />
        <Card
          img={seven}
          pg={
            "This certificate is presented in recognition of my attendance and completion of the Microsoft Learn Student Ambassador Backend Web Development using JavaScript, Node.js, and Express Bootcamp."
          }
        />
        <Card
          img={eight}
          pg={
            "This certificate marks my successful completion of the Google Developer Student Clubs course in Backend Web Development using JavaScript, Node.js, and Express."
          }
        />
      </div>
      <button onClick={moveDown} className="arrowOut down">
        <FaArrowDown className="arrow" size={30} />
      </button>
    </div>
  );
}

export default Achivements;
