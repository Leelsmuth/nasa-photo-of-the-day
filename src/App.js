import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=ImKgMnxQNGf2ScBad9oi68atzxgcaY1rz3yOKuVs&date=2019-07-11")
      .then(response => {
        setData(response.data);
      }, [])
      .catch(error => {
        console.log("Error!!!!");
      });
  });
  return (
    <div className="App">
      <Card
        title={data.title}
        ImgDate={data.date}
        photoCaption={data.explanation}
        imgUrl={data.url}
      />
    </div>
  );
}

export default App;
