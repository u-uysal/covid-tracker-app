import React from "react";

function Precautions() {
  return (
    <div id="precautions">
      <h1 style={{ textDecoration: "underline" }} className="mt-5">
        Precautions
      </h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="youtube"
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/-Fdo_HT3X80"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Precautions;
