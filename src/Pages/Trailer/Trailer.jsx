import React from "react";
import { Button } from "react-bootstrap";
import { useParams , useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Trailer = ({ movies }) => {
    const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  // console.log(id)
  const goBack = ()=>{
    navigate("/")
  }
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const movieDetails = movies.find((movie) => movie.id == id);
  console.log(movieDetails);
  return (
    <div>
      <h1>Movie Details </h1>
      <YouTube
        videoId={movieDetails.trailer_ID}
        opts={opts}
        onReady={onReady}
      />
      <h3>Description : </h3>
      <p>  {movieDetails.Description} </p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Trailer;
