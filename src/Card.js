import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: red;
`;

const Card = props => {
  return (
    <div className="cards">
      <StyledH1>NASA photo of the Day</StyledH1>
      <h1>{props.title}</h1>
      <h2>{props.ImgDate}</h2>
      <img className="img" src={props.imgUrl} />
      <p className="explanation">{props.photoCaption}</p>
    </div>
  );
};

export default Card;
