import React, { useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Laptop = () => {
  const { laptops } = useSelector((state) => state.ComputerReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [dispatch, id]);

  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>Laptops</h1>
        <button>
          <a href="/">See All Laptops </a>
        </button>
      </div>
      <div className="Shop">
        {laptops.map((laptop) => {
          return (
            <div key={laptop.id}>
              <div className="Shop_container">
                <div className="Shop_wrapper">
                  <Link to={`/LaptopCard/${laptop.id}`}>
                    <div className="Shop_image">
                      <img src={laptop.itemImg[0]} alt="phone" />
                    </div>
                    <div className="Shop_text">
                      <h3>{laptop.name}</h3>
                      <p>{laptop.description1}</p>
                    </div>
                    <div className="Shop_price">
                      <h3>${laptop.newItemPrice}</h3>
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

export default Laptop;