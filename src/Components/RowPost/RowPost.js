import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from "../../Axios";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios.get(props.link).then((Response) => {
      // console.log(Response.data.results)
      setMovies(Response.data.results);
    });
  }, [props.link]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    // console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("empty array");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => {
          return (
            <img
              key={index}
              onClick={() => handleMovie(obj.id)}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
              className="poster"
            />
          );
        })}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
