import React, { useEffect, useState } from "react";
import playButton from "../../util/images/play-button.svg";
import LikeThumb from "./LikeThumb";
import useMovieDetail from "../../util/customHook/useMoveDetail";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardHovered = ({ poster, movieId }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  useMovieDetail(movieId);
  const movies = useSelector((store) => store?.movies?.movieDetail);
  const { adult, genres, runtime = 0, vote_average = 0, id, backdrop_path } = movies || {};
  let hours = Math.floor(runtime / 60);
  let minutes = runtime % 60;
  let rating = Number(vote_average).toFixed(2) || "NA"
  useEffect(() => {
    if (movies) {
        setIsDataLoaded(true);      
    }
  }, [movies]);



  if(!isDataLoaded){
    return (
      <div className="h-80 w-72 bg-nuetral-800 rounded-md pb-6 border border-red-500 overflow-hidden">
        <div className="h-40 w-72 bg-gray-300">

        </div>

      </div>
    )
  }
  return (
    <div >
      <Link to={`/movie/${movieId}`}
      >
    <div className="w-84 bg-neutral-800 overflow-hidden rounded-md pb-6  cursor-pointer">
      <div className="h-40 w-72 ">
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt="poster"
          className="max-w-none w-72 h-40 object-fill"
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
        <div className="text-white flex  mt-2 px-4 flex- gap-x-4 flex-wrap
        ">
          {genres?.map((genre) => (
            <div className="flex items-center w-fit">
                 <span className="font-bold text-slate-600 text-xl mr-1">•</span>
                 <p className="">{genre?.name}</p>
            </div>
           
          ))}
        </div>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default CardHovered;
