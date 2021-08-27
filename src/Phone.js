import React from "react";
import Data from "./data.json";
import style from "./phones.module.css";
import "./App.css";

function Phone() {
  return (
    <>
      <div className="phones">
        {Data.map((post) => {
          return (
            <div className={style.phones_card}>
              <h3>{post.name}</h3>
              <h4>{post.manufacturer}</h4>
              <p>{post.description}</p>
              <h5>{post.price}</h5>
              <h5>{post.color}</h5>
              <img className={style.images} src={post.imageFileName} alt="" />
              <h5>{post.screen}</h5>
              <h5>{post.processor}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Phone;
