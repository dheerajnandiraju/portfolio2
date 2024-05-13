import React from "react";
import "./projects.css";
import Pro_cards from "./pro_cards";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function Projects() {
  let box = document.getElementsByClassName("car")[0];

  const moveleft = () => {
    let width = box.offsetWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const moveright = () => {
    let width = box.offsetWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div>
      <div className="he">Projects</div>
      <div className="par">
        <div className="car">
          <Pro_cards
            num="1"
            name="Project-ion"
            dis="An online integrated platform for project management"
            git = "https://github.com/dheerajnandiraju/project-ion" vercel = ""
          />
          <Pro_cards
            num="2"
            name="Safe-Circle"
            dis="A digital hub for community to boost community safety engagement"
            git = "https://github.com/dheerajnandiraju/safe-circle" vercel = ""
          />
          <Pro_cards
            num="3"
            name="Spotify clone"
            dis="An exact replica of Spotify UI using React js, html, css"
            git = "https://github.com/dheerajnandiraju/spotify-clone" vercel = "https://spotify-clone2610.vercel.app/"
          />
        </div>
      </div>
      <div className="butt">
        <button onClick={moveleft} className="butto">
          <FaArrowLeft className="arrow" size={30} />
        </button>
        <button onClick={moveright} className="butto">
          <FaArrowRight className="arrow" size={30} />
        </button>
      </div>
    </div>
  );
}

export default Projects;
