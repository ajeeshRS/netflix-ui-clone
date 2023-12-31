import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from "../../Axios";
function Banner() {
  const [movie, setmovie] = useState();
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;

    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[randomNumber]);
        setmovie(response.data.results[randomNumber]);
      }).catch((err)=>{
        console.log(err.message);
      })
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">
          {movie ? (movie.title ? movie.title : movie.name) : ""}
        </h1>
        <div className="banner_buttons">
          <button className="button">play</button>
          <button className="button">my list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
