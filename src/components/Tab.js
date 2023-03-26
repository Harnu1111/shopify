import React from "react";
import SmartPhones from "./SmartPhones";
import Laptops from "./Laptops";
import Speakers from "./Speakers";
import Gaming from "./Gaming";
import Tv from "./Tv";
import { useState } from "react";
import "../App.css";

const Tab = () => {
  const [toggleState, setToggleState] = useState();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="Tab_container">
      <div className="Tab_title">
        <h1> Selected Just For You</h1>
        <button>see all</button>
      </div>
      <div className="Tab_wrapper">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <button> SmartPhones </button>
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <button>Laptops</button>
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <button>Speakers</button>
        </div>
        <div
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          <button>Games</button>
        </div>
        <div
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          <button>Televisions</button>
        </div>
      </div>

      <div className="Content_tab">
        <div className={toggleState === 1 ? "tabs active-content" : "content"}>
          <SmartPhones />
        </div>
        <div className={toggleState === 2 ? "tabs active-content" : "content"}>
          <Laptops />
        </div>
        <div className={toggleState === 3 ? "tabs active-content" : "content"}>
          <Speakers />
        </div>
        <div className={toggleState === 4 ? "tabs active-content" : "content"}>
          <Gaming />
        </div>
        <div className={toggleState === 5 ? "tabs active-content" : "content"}>
          <Tv />
        </div>
      </div>
    </div>
  );
};

export default Tab;
