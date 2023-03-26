import React from "react";
import Banner from "../components/shop/Banner";
import SmartPhoneShop from "../components/shop/SmartPhoneShop";
import Laptop from "../components/shop/Laptop";
import Speaker from "../components/shop/Speakers";
import Games from "../components/shop/Games";
import Televison from "../components/shop/Televison";

const Shop = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section className="Shopify">
        <SmartPhoneShop />
      </section>
      <section className="Shopify">
        <Laptop />
      </section>
      <section className="Shopify">
        <Speaker />
      </section>
      <section className="Shopify">
        <Games />
      </section>
      <section className="Shopify">
        <Televison />
      </section>
    </div>
  );
};

export default Shop;
