import React, { useState } from "react";
import CardHovered from "./CardHovered";
import { useDispatch } from "react-redux";
import { removeMovieDetail } from "../../util/appStore/moviesSlice";

const MovieCard = ({ poster, movieId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch()
  if(!isHovered){
    dispatch(removeMovieDetail())
  }
  return (
    <div 
        className="rounded-md" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? <img
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt="poster"
        className="max-w-none h-48 rounded-md"
      /> : <CardHovered poster={poster} movieId={movieId}/>}
      

    </div>
  );
};

export default MovieCard;
