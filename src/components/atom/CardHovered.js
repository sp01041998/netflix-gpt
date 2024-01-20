import React from "react";
import playButton from "../../util/images/play-button.svg";
import LikeThumb from "./LikeThumb";
import useMovieDetail from "../../util/customHook/useMoveDetail";
import { useSelector } from "react-redux";

const CardHovered = ({ poster, movieId }) => {
  useMovieDetail(movieId);
  const movies = useSelector((store) => store?.movies?.movieDetail);
  const { adult, genres, runtime, vote_average, id } = movies || {};
  let hours = Math.floor(runtime / 60);
  let minutes = runtime % 60;
  let rating = Number(vote_average).toFixed(2);
  return (
    <div>
    <div className="w-84 bg-neutral-800 overflow-hidden rounded-md pb-6 absolute">
      <div className="h-40 w-72 ">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="poster"
          className="max-w-none w-80 h-40"
        />
      </div>
      <div>
        <div className="mt-4 flex gap-2 px-4">
          <div className="bg-white rounded-full  flex items-center justify-center px-3 py-3 w-10 h-10">
            <img src={playButton} alt="Play Button" className="w-4" />
          </div>
          <div className="rounded-full text-3xl text-white font-medium border-2 border-gray-500 flex items-center justify-center w-10 h-10">
            +
          </div>
          <div className="border-2 border-gray-500 flex items-center justify-center w-10 h-10 rounded-full">
            <LikeThumb />
          </div>
        </div>
        <div className="text-white flex mt-4 gap-2 px-4 text-base" >
            <p className="border border-white px-2">{adult ? "U/A 16+" : "U/A 13+"}</p>
            <p>{hours}h {minutes}min</p>
            <p className="border border-white px-2">IMDb {rating}</p>
        </div>
        <div className="text-white flex gap-4 mt-2 px-4">
          {genres?.map((genre) => (
            <div className="flex items-center">
                 <span className="font-bold text-slate-600 text-xl mr-1">•</span>
                 <p className="">{genre?.name}</p>
            </div>
           
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardHovered;
