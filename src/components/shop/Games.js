import React, { useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Games = () => {
  const { games } = useSelector((state) => state.GameReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state.GameReducer);
  useEffect(() => {
    dispatch({ type: "GAME", id });
  }, [dispatch, id]);
  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>Games</h1>
        <button>
          <a href="/">See All Games</a>
        </button>
      </div>
      <div className="Shop">
        {games.map((game) => {
          return (
            <div key={game.id}>
              <div className="Shop_container">
                <div className="Shop_wrapper">
                  <Link to={`/GameCard/${game.id}`}>
                    <div className="Shop_image">
                      <img src={game.itemImg[0]} alt="phone" />
                    </div>
                    <div className="Shop_text">
                      <h3>{game.name}</h3>
                      <p>{game.description1}</p>
                    </div>
                    <div className="Recently_price">
                      <h3>${game.newItemPrice}</h3>
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

export default Games;
