import React from "react";
import Gamings from "../Gamings.json"
import "../App.css";

const Gaming = () => {
  return (
    <div className="RecentlyAdded">
     
      <div className="Recently">
        {Gamings &&
          Gamings.map((game) => {
            return (
              <div key={game.id}>
                <div className="Recently_container">
                  <div className="Recently_wrapper">
                    <a href="/">
                      <div className="Recently_image">
                        <img src={game.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Recently_text">
                        <h3>{game.itemInfo.name}</h3>
                        <p>{game.itemInfo.description1}</p>
                      </div>
                      <div className="Recently_price">
                        <h3>${game.itemInfo.newItemPrice}</h3>
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

export default Gaming;
