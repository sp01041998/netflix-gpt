import axios from "axios";
import { BEARER_ACCESS_TOKEN } from "../const";
import { useEffect, useState } from "react";

const FetchMovieVideos = (movieId) => {
  const [backgroundTrailerId, setBackgroundTrailerId] = useState(null);

  useEffect(() => {
    getMoviesVideos(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMoviesVideos = async (movieId) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_ACCESS_TOKEN}`,
    };
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      { headers }
    );
    // console.log(data?.data?.results);
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
    // console.log(trailer[0]?.key, "keeey");
    setBackgroundTrailerId(trailer[0]?.key);
  };
  return backgroundTrailerId
};

export default FetchMovieVideos;
