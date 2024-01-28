import React from "react";
import { useParams } from "react-router-dom";
import FetchMovieVideos from "../../util/customHook/useFetchMovieVideos";

const WatchMovie = () => {
  const { movieId } = useParams();
  const data = FetchMovieVideos(movieId);
  return (
    <div >
      <iframe
        id="backgroundVideo"
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${data}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default WatchMovie;
