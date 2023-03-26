import React from "react";
import Records from "../Records.json";
import Tab from "../components/Tab";
import Banner from "../components/Banner";
import Weekly from "../components/Weekly";

const Home = () => {
  return (
    <div className="Home_container">
      <div className="Home_wrapper">
        <div className="Home_first">
          <h1>FIND YOUR NEXT FAVORITE GADGET</h1>
          <p>Shop Our Collections Now</p>
          <button>Start Shopping</button>
        </div>

        <div className="Home_banner">
          <a href="/" className="Grid" id="Grid1">
            <div className="Grid_text">
              <h4> Speakers</h4>
            </div>
          </a>
          <a href="/" className="Grid" id="Grid2">
            <div className="Grid_text">
              <h4> Laptops & Computers</h4>
            </div>
          </a>
          <div className="Grid" id="Grid3">
            <div className="Grid_text">
              <h4> Smart Phones</h4>
            </div>
          </div>
          <a href="/" className="Grid" id="Grid4">
            <div className="Grid_text">
              <h4>Televisions</h4>
            </div>
          </a>
          <a href="/" className="Grid" id="Grid5">
            <div className="Grid_text">
              <h4> Video Games</h4>
            </div>
          </a>
        </div>
      </div>

      <div className="RecentlyAdded">
        <div className="Recently_title">
          <h1>Recently Added</h1>
        </div>
        <div className="Recently">
          {Records &&
            Records.map((record) => {
              return (
                <div key={record.id}>
                  <div className="Recently_container">
                    <div className="Recently_wrapper">
                      <a href="/">
                        <div className="Recently_image">
                          <img src={record.itemImg} alt="phone" />
                        </div>
                        <div className="Recently_text">
                          <h3>{record.name}</h3>
                          <p>{record.description1}</p>
                        </div>
                        <div className="Recently_price">
                          <h3>{record.newItemPrice}</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <section>
        <Tab />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Weekly />
      </section>

      <section className="Delivery_container">
        <div className="Delivery_title">
          <h1>We Serve You The Best Product At Best Prices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptatem minus officia quas reiciendis excepturi nostrum esse
            itaque nesciunt.
          </p>
        </div>
        <div className="Delivery_card">
          <div className="deliver">
            <img src={require("../IMAGES/delivery.png")} alt="" />
            <h3>Free Shipping</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <span className="line">
            <hr></hr>
          </span>
          <div className="deliver">
            <img src={require("../IMAGES/credit-card(1).png")} alt="" />
            <h3>Secured Payment</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <span className="line">
            <hr></hr>
          </span>
          <div className="deliver">
            <img src={require("../IMAGES/24-hours-support.png")} alt="" />
            <h3>24/7 Online Support</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <span className="line">
            <hr></hr>
          </span>
          <div className="deliver">
            <img src={require("../IMAGES/exchange.png")} alt="" />
            <h3>Free Returns</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      <section className="Support">
        <img src={require("../IMAGES/customer-support(1).png")} alt="" />
        <h2>Visit our Support Center</h2>
        <button>Visit</button>
      </section>
    </div>
  );
};

export default Home;
