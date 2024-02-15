import React from "react";
import FetchMovieVideos from "../../util/customHook/useFetchMovieVideos";

const VideoBackground = ({ movieId }) => {
  const backgroundTrailerId =   FetchMovieVideos(movieId)

  return (
    <div className="">
      <iframe
      id="backgroundVideo"
        className="w-screen aspect-video h-screen"
        src={`https://www.youtube.com/embed/${backgroundTrailerId}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
