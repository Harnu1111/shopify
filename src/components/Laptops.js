import React from 'react';
import Computers from "../Computers.json"
import "../App.css"
const Laptops = () => {
  return (
    <div className="RecentlyAdded">
      
      <div className="Recently">
        {Computers &&
          Computers.map((laptop) => {
            return (
              <div key={laptop.id}>
                <div className="Recently_container">
                  <div className="Recently_wrapper">
                    <a href="/">
                      <div className="Recently_image">
                        <img src={laptop.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Recently_text">
                        <h3>{laptop.itemInfo.name}</h3>
                        <p>{laptop.itemInfo.description1}</p>
                      </div>
                      <div className="Recently_price">
                        <h3>${laptop.itemInfo.newItemPrice}</h3>
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
}

export default Laptops