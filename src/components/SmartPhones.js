import React from "react";
import "../App.css";
import Phones from "../Phones.json";

const SmartPhones = () => {
  return (
    <div className="RecentlyAdded">
      
      <div className="Recently">
        {Phones &&
          Phones.map((phone) => {
            return (
              <div key={phone.id}>
                <div className="Recently_container">
                  <div className="Recently_wrapper">
                    <a href="/">
                      <div className="Recently_image">
                        <img src={phone.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Recently_text">
                        <h3>{phone.name}</h3>
                        <p>{phone.description1}</p>
                      </div>
                      <div className="Recently_price">
                        <h3>${phone.newItemPrice}</h3>
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

export default SmartPhones;
