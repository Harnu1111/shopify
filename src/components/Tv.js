import React from 'react'
import Tvs from "../Tvs.json";
import "../App.css"
const Tv = () => {
  return (
    <div className="RecentlyAdded">
      
      <div className="Recently">
        {Tvs &&
          Tvs.map((tv) => {
            return (
              <div key={tv.id}>
                <div className="Recently_container">
                  <div className="Recently_wrapper">
                    <a href="/">
                      <div className="Recently_image">
                        <img src={tv.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Recently_text">
                        <h3>{tv.itemInfo.name}</h3>
                        <p>{tv.itemInfo.description1}</p>
                      </div>
                      <div className="Recently_price">
                        <h3>${tv.itemInfo.newItemPrice}</h3>
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

export default Tv