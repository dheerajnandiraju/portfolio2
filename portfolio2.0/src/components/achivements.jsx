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

function Achivements() {
  return (
    <div>
      <div id="head">Achivements</div>
      <div className="carousal">
        <Card
          img={one}
          pg={
            "This certificate marks my completion of Udemy's 'Complete 2024 Web Dev Bootcamp.' Now I'm equipped to build full-stack applications, from design to database!"
          }
        />
        <Card img={two} pg={"fkajdhfhadgfjahgdfjhgadsjfhgdshfjadsh"} />
        <Card img={three} pg={"fkajdhfhadgfjahgdfjhgadsjfhgdshfjadsh"} />
        <Card img={four} pg={"fkajdhfhadgfjahgdfjhgadsjfhgdshfjadsh"} />
        <Card img={five} pg={"fkajdhfhadgfjahgdfjhgadsjfhgdshfjadsh"} />
        <Card img={six} pg={"fkajdhfhadgfjahgdfjhgadsjfhgdshfjadsh"} />
        <Card img={seven} pg={"fkajdhfhadgfjahgdfjhgadsjfhgdshfjadsh"} />
        <Card img={eight} pg={"fkajdhfhadgfjahgdfjhgadsjfhgdshfjadsh"} />
      </div>
    </div>
  );
}

export default Achivements;
