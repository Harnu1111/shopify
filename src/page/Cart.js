import React from "react";
import "../App.css";

const Cart = () => {
  return (
    <div className="Cart_container">
      <div className="Cart_wrapper">
        <div className="Cart_product">
          <div className="Cart_head">
            <h1>Shopping Cart</h1>
            <span>
              Sub Total [6 items] <strong>$4810</strong>
            </span>
          </div>
          <div className="Cart_product_wrapper">
            <div className="Cart_container">
              <button className="Clear">Clear Cart</button>
              <div className="Cart_detail">
                <div className="Cart_index">
                  <div className="Index_line"></div>{" "}
                  <div className="index">01</div>{" "}
                </div>
                <div className="Cart_image">
                  <img
                    src={require("../IMAGES/5e90a856c7c8f9000434dd97.webp")}
                    alt=""
                  />
                </div>
                <div className="Cart_product_title">
                  <h3>iPhone 11 pro max</h3>
                  <span className="Cart_product_description">
                    {" "}
                    <h3>iPhone 11 pro max - space gray</h3>
                  </span>
                  <span className="Cart_color">
                    <h4> Color :</h4>
                    <p>Space gray</p>
                  </span>
                  <div className="Cart_unit">
                    <h4> Quantity</h4>
                    <span className="Cart_quantity">
                      - <p>1</p> +
                    </span>
                  </div>
                </div>
                <div className="Cart_price">
                  <div className="Cart_total_price">$565</div>
                  <div className="Cart_amount">1 x 565</div>
                </div>
              </div>
            </div>
            <div className="Cart_pay">
              <div className="CP-1">
                {" "}
                <div className="Delivery_line">
                  <h4>Delivery : </h4>
                  <span className="Free">
                    <h4>Free</h4>
                  </span>
                </div>
                <p>Delivery by Septmber 20th, 2023</p>
              </div>
              <div className="Promo">
                <h3>PROMOCODE</h3>
                <button>Apply</button>
              </div>
              <div className="Discount_card">
                <div className="Discount">
                  Discount
                  <span className="percent">10%</span>
                </div>
                <div className="Discount">
                  Delivery
                  <span className="percent">$3</span>
                </div>
                <div className="Discount">
                  {" "}
                  Tax <span className="percent">$3.45</span>
                </div>
              </div>
              <div className="Total_delivery">
                Total
                <span className="Total_delivery_amount">$4335.45</span>
              </div>{" "}
              <button className="Delivery_btn1">Continue Shopping</button>{" "}
              <button className="Delivery_btn2">Proceed to Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
