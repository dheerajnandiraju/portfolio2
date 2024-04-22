import React from "react";
import "./home.css";
function Home() {
  return (
    <div>
      {/* <div className="cir"></div> */}
      <div className="parent">
        <div
          style={{
            display: "flex",
            fontSize: "4rem",
            justifyContent: "center",
          }}
        >
          <a>Dheeraj Nandiraju</a>
        </div>
        <div>
          <h1 className="top">PORTFOLIO</h1>
          <h1 className="middle">PORTFOLIO</h1>
          <h1 className="bottom">PORTFOLIO</h1>
        </div>
        <h5 className="text">of a Front-end developer and UI/UX designer</h5>
      </div>
    </div>
  );
}

export default Home;
