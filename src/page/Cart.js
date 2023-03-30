import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="Cart_container">
      <div className="Cart_wrapper">
        <div className="Cart_product">
          <div className="Cart_head">
            <h1>Shopping Cart</h1>
            <span>
              Sub Total [{totalQuantities} items] <strong>${totalPrice}</strong>
            </span>
          </div>
          {products.length > 0 ? (
            <>
              {products.map((product) => (
                <div className="Cart_product_wrapper" key={product.id}>
                  <div className="Cart_container">
                    <button className="Clear">Clear Cart</button>
                    <div className="Cart_detail">
                      <div className="Cart_index">
                        <div className="Index_line"></div>{" "}
                        <div className="index">01</div>{" "}
                      </div>
                      <div className="Cart_image">
                        <img src={`/images/${product.image}`} alt="no" />
                      </div>
                      <div className="Cart_product_title">
                        <h3>{product.name}</h3>
                        <span className="Cart_product_description">
                          {" "}
                          <h3>{product.description1}</h3>
                        </span>
                        <span className="Cart_color">
                          <h4> Color :</h4>
                          <p>Space gray</p>
                        </span>
                        <div className="Cart_unit">
                          <h4> Quantity</h4>
                          <span className="Cart_quantity">
                            <span
                              className="reduce"
                              onClick={() =>
                                dispatch({ type: "DEC", payload: product.id })
                              }
                            >
                              <svg
                                className="fill-current text-gray-600 w-3"
                                viewBox="0 0 448 512"
                              >
                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                              </svg>
                            </span>{" "}
                            <p>{product.quantity}</p>{" "}
                            <span
                              className="add"
                              onClick={() =>
                                dispatch({ type: "INC", payload: product.id })
                              }
                            >
                              <svg
                                className="fill-current text-gray-600 w-3"
                                viewBox="0 0 448 512"
                              >
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="Cart_price">
                        <div className="Cart_total_price">${product.price}</div>
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
                      <span className="Total_delivery_amount">
                        ${totalPrice}
                      </span>
                    </div>{" "}
                    <button className="Delivery_btn1">Continue Shopping</button>{" "}
                    <button className="Delivery_btn2">
                      Proceed to Check Out
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="mt-10 ">Your Cart is Empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
