import React from "react";
import "./photo.css";

function Photo() {
  return (
    <div className="Pic">
      <img
        src={process.env.PUBLIC_URL + "./images/hero_desktop.jpg"}
        alt="Self-Portrait"
      />
    </div>
  );
}

export default Photo;
