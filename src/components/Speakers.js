import React from 'react';
import Sspeakers from "../Sspeakers.json"
import "../App.css"
const Speakers = () => {
  return (
    <div className="RecentlyAdded">
      
      <div className="Recently">
        {Sspeakers &&
          Sspeakers.map((speaker) => {
            return (
              <div key={speaker.id}>
                <div className="Recently_container">
                  <div className="Recently_wrapper">
                    <a href="/">
                      <div className="Recently_image">
                        <img src={speaker.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Recently_text">
                        <h3>{speaker.itemInfo.name}</h3>
                        <p>{speaker.itemInfo.description1}</p>
                      </div>
                      <div className="Recently_price">
                        <h3>${speaker.itemInfo.newItemPrice}</h3>
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

export default Speakers