import React, { useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Televison = () => {
  const { tvs } = useSelector((state) => state.TvReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tv } = useSelector((state) => state.TvReducer);
  useEffect(() => {
    dispatch({ type: "SPEAKER", id });
  }, [dispatch, id]);
  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>Games</h1>
        <button>
          <a href="/">See All Tvs</a>
        </button>
      </div>
      <div className="Shop">
        {tvs.map((tv) => {
          return (
            <div key={tv.id}>
              <div className="Shop_container">
                <div className="Shop_wrapper">
                  <Link to={`/TvCard/${tv.id}`}>
                    <div className="Shop_image">
                      <img src={tv.itemImg[0]} alt="phone" />
                    </div>
                    <div className="Shop_text">
                      <h3>{tv.name}</h3>
                      <p>{tv.description1}</p>
                    </div>
                    <div className="Shop_price">
                      <h3>${tv.newItemPrice}</h3>
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

export default Televison;
