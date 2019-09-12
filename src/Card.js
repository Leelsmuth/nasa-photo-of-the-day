import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: red;
  font-family: italic;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 400px;
  height: 400px;
`;

const StyledPtag = styled.p`
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;
  font-family: cursive;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  font-family: cursive;
`;

const Card = props => {
  return (
    <div className="cards">
      <StyledH1>NASA photo of the Day</StyledH1>
      <h1>{props.title}</h1>
      <h2>{props.ImgDate}</h2>
      <StyledImage className="img" src={props.imgUrl} />
      <StyledPtag className="explanation">{props.photoCaption}</StyledPtag>
      <br />
      <StyledForm>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Message:
          <input type="text" />
        </label>
        <br />
        <input type="submit" value="Submit" src="" />
      </StyledForm>
    </div>
  );
};

export default Card;
