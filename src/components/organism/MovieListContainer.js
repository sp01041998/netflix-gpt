import React from 'react'
import MovieListByCategory from '../molecules/MovieListByCategory'
import { useSelector } from 'react-redux'
const MovieListContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies)
    const nowPlayingMovies = useSelector((store) => store?.movies?.popularMovies)
    const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies)
    const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies)

    if(!movies || !movies?.length) return
    if(!nowPlayingMovies) return
    if(!topRatedMovies) return
    if(!upcomingMovies) return
  return (
    <div className='bg-black'>
        <div className='-mt-60 relative z-20'>
            <MovieListByCategory movies= {movies} category="Now Playing"/>
        </div>
        
        <MovieListByCategory movies= {nowPlayingMovies} category="Popular"/>
        <MovieListByCategory movies= {topRatedMovies} category="Top Rated"/>
        <MovieListByCategory movies= {upcomingMovies} category="Upcoming"/>
    </div>
  )
}

export default MovieListContainer