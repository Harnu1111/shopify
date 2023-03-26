import React from "react";
import Weeklys from "../Weekly.json";
import "../App.css";


const Weekly = () => {
  return (
    <div className="RecentlyAdded">
      <div className="Recently_title">
        <h1>Weekly Featured</h1>
      </div>
      <div className="Recently">
        {Weeklys &&
          Weeklys.map((week) => {
            return (
              <div key={week.id}>
                <div className="Recently_container">
                  <div className="Recently_wrapper">
                    <a href="/">
                      <div className="Recently_image">
                        <img src={week.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Recently_text">
                        <h3>{week.itemInfo.name}</h3>
                        <p>{week.itemInfo.description1}</p>
                      </div>
                      <div className="Recently_price">
                        <h3>${week.itemInfo.newItemPrice}</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Weekly;
