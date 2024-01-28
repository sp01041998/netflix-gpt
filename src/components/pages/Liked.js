import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BEARER_ACCESS_TOKEN } from '../../util/const'
import axios from 'axios'
import Header from '../section/Header'
import MovieCard from '../atom/MovieCard'

const Liked = () => {
    const [movieData, setMovieData] = useState(null)
    const myList = useSelector(store => store.user.likedMovies)
    useEffect(() => {
        fetchMoviesData()
    }, [])
    function fetchMoviesData(){
        const movieData = myList?.map((movieId) => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BEARER_ACCESS_TOKEN}`,
              };
              return axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {headers})
        })

        Promise.all(movieData).then((values) => {
            console.log(values)
            setMovieData(values)
        }).catch((error) => {
            console.log(error?.message)
        })
    }
    if(!movieData){
        return (
            <Header customHeaderStyle = "px-8 py-1 z-50 bg-zinc-800"/>
        )
    }
  return (
    <div className='bg-black pb-8 min-h-screen'>
        <Header  customHeaderStyle = "px-8 py-1 z-50 bg-zinc-800 sticky top-0"/>
        <div className='flex flex-wrap px-10 gap-4 pt-16'>
        {movieData.map((movie) => (
            <MovieCard
                key = {movie.data.id}
                poster = {movie.data.poster_path}
                movieId = {movie?.data.id}
            />
        ))}
        </div>
    </div>
  )
}

export default Liked