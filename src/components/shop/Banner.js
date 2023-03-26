import React from 'react';
import "../../App.css"

const Banner = () => {
  return (
    <div className="Shop_Banner_container">
      <div className="Shop_Banner_wrapper">
        <a href="/" className="Shop_Banner_card" id="BC1">
          <p> SmartPhones</p>
        </a>
        <a href="/" className="Shop_Banner_card" id="BC2">
          <p>Laptops</p>
        </a>
        <a href="/" className="Shop_Banner_card" id="BC3">
          <p>Speakers</p>
        </a>
        <a href="/" className="Shop_Banner_card" id="BC4">
          <p> Games</p>
        </a>
        <a href="/" className="Shop_Banner_card" id="BC5">
          <p>Televisions</p>
        </a>
      </div>
    </div>
  );
}

export default Banner