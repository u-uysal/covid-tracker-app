import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import affects from "../images/affects.jpg";
import precautions from "../images/precautions.jpg";
import world from "../images/world.jpg";

function Carousel() {
  const mystyle = {
    textAlign: "center",
    fontWeight: "bold",
    top: "40%",
    maxHeight: "250px",
    position: "relative",
    color: "red",
  };

  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div id="home" className="carousel-inner">
        <div className="carousel-item active">
          <img
            style={{ width: "100%", height: "100%" }}
            src={world}
            alt="World Epidemics"
            width="1100"
            height="500"
          />
          <div style={mystyle} className="carousel-caption">
            <h3 className="mb-3" style={{ color: "#770707" }}>
              World Epidemics
            </h3>
            <p style={{ color: "#770707" }}>
              Have you ever wondered the history of World Epidemics?{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/List_of_epidemics"
              >
                Click here!
              </a>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={affects}
            alt="Deaths-Recovered-Infected Rates"
            width="1100"
            height="500"
          />
          <div style={mystyle} className="carousel-caption ">
            <h2 style={{ color: "#fff" }}>How deadly is the coronavirus?</h2>
            <p style={{ color: "#fff" }}>
              Select country <a href="#select">below</a> and see results
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={precautions}
            alt="precautions against to Covid-19"
            width="1100"
            height="500"
          />
          <div style={mystyle} className="carousel-caption">
            <h3>What should do against the Covid-19?</h3>
            <a href="#precautions">Click Here</a>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}

export default Carousel;
