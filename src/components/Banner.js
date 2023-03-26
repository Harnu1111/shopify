import React from "react";
import Electronics from "../IMAGES/hm.png"
import "../App.css"

const Banner = () => {
  return (
    <div className="Banner_container">
      <div className="Banner_wrapper">
        <div className="Banner_text">
          <h1> HOME APPLIANCES FOR YOU</h1>
          <h4>
            Harnus store sells all varieties of premuim home appliances that can
            make your life easier
          </h4>
          <button>Shop</button>
        </div>
        <div className="Banner_image">
          <img src={Electronics} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
