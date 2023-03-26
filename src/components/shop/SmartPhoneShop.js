import React, { useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SmartPhoneShop = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [dispatch, id]);

  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>SmartPhones</h1>
        <button>
          <a href="/">See All SmartPhones</a>
        </button>
      </div>
      <div className="Shop">
        {products.map((product) => {
          return (
            <div key={product.id} phones={product}>
              <div className="Shop_container">
                <div className="Shop_wrapper">
                  <Link to={`/PhoneCard/${product.id}`}>
                    <div className="Shop_image">
                      <img src={product.itemImg[0]} alt="phone" />
                    </div>
                    <div className="Shop_text">
                      <h3>{product.name}</h3>
                      <p>{product.description1}</p>
                    </div>
                    <div className="Shop_price">
                      <h3>${product.newItemPrice}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SmartPhoneShop;
