import React from "react";

const Card = props => {
  return (
    <div className="cards">
      <h1>NASA photo of the Day</h1>
      <h1>{props.title}</h1>
      <h2>{props.ImgDate}</h2>
      <img className="img" src={props.imgUrl} />
      <p className="explanation">{props.photoCaption}</p>
    </div>
  );
};

export default Card;
