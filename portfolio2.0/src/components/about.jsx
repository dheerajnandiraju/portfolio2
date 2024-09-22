import React from "react";
import "./about.css";
import img from "./me.png";

function About() {
  return (
    <div>
      <div className="left">
        <h1 className="head">Meet the Maker</h1>

        <img className="img" src={img} alt="" />
      </div>
      <div className="right">
        <p>
          Hey there! I'm Dheeraj Nandiraju. The world of web design and
          front-end development has captured my interest, and I'm constantly
          learning and exploring new ways to bring websites and applications to
          life.
        </p>
        <p>
          Outside of academics, I enjoy:
          <ul>
            <li>
              Capturing the world around me through photography. There's a
              special satisfaction in freezing a fleeting moment in time and
              sharing it with others.
            </li>
            <li>
              Expressing my creativity through sketching. Whether it's a quick
              doodle or a more detailed piece, sketching allows me to explore
              ideas and unwind.
            </li>
          </ul>
        </p>
        <p>
          This website is a window into my journey as a web developer. I'll be
          showcasing my projects here, so feel free to browse and see what I'm
          working on!
        </p>
      </div>
    </div>
  );
}

export default About;
