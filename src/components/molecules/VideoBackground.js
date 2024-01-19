import axios from "axios";
import React, { useEffect, useState } from "react";
import { BEARER_ACCESS_TOKEN } from "../../util/const";

const VideoBackground = ({ movieId }) => {
  const [backgroundTrailerId, setBackgroundTrailerId] = useState(null);
  const getMoviesVideos = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_ACCESS_TOKEN}`,
    };
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      { headers }
    );
    let trailer = [];
    data?.data?.results?.filter((video) => {
      if (video?.type === "Trailer" && video?.name === "Official Trailer") {
        trailer.push(video);
      }
    });
    if (!trailer.length) {
      data?.data?.results?.filter((video) => {
        if (video?.site === "YouTube") {
          if (!trailer.length) {
            trailer.push(video);
          }
        }
      });
    }
    setBackgroundTrailerId(trailer[0]?.key);
  };

  useEffect(() => {
    getMoviesVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleVideoClick = () => {
    const iframe = document.getElementById("backgroundVideo");
    iframe.src = `https://www.youtube.com/embed/${backgroundTrailerId}?autoplay=1&mute=1`;
    iframe.muted = false;
  };
  return (
    <div className="" onMouseEnter={handleVideoClick}>
      <iframe
      id="backgroundVideo"
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${backgroundTrailerId}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
