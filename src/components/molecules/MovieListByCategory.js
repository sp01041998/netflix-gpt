import React from "react";
import MovieCard from "../atom/MovieCard";

const MovieListByCategory = ({ movies, category }) => {
  return (
    <div className="px-12 mb-12 overflow-x-scroll">
      <h1 className="text-xl text-white font-medium mb-2">{category}</h1>
      <div className="flex gap-4 overflow-x-scroll">
        {movies?.map((movieData) => (
          <MovieCard
            key= {movieData?.id}
            poster={movieData?.poster_path}
            movieId = {movieData?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieListByCategory;
