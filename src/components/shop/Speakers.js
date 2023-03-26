import React, { useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Speakers = () => {
  const { speakers } = useSelector((state) => state.SpeakerReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SPEAKER", id });
  }, [dispatch, id]);
  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>Speakers</h1>
        <button>
          <a href="/">See All Speakers </a>
        </button>
      </div>
      <div className="Shop">
        {speakers.map((speaker) => {
          return (
            <div key={speaker.id}>
              <div className="Shop_container">
                <div className="Shop_wrapper">
                  <Link to={`/SpeakerCard/${speaker.id}`}>
                    <div className="Shop_image">
                      <img src={speaker.itemImg[0]} alt="phone" />
                    </div>
                    <div className="Shop_text">
                      <h3>{speaker.name}</h3>
                      <p>{speaker.description1}</p>
                    </div>
                    <div className="Shop_price">
                      <h3>${speaker.newItemPrice}</h3>
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

export default Speakers;
