import React from 'react'
import { useSelector } from 'react-redux'
import VideoInfo from '../molecules/VideoInfo'
import VideoBackground from '../molecules/VideoBackground'


const MainContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies)
    if(!movies) return
    const randomNumber = Math.floor(Math.random() * 20);
    const {original_title, overview, id} = movies[randomNumber]

  return (
    <div className=''>
       <VideoInfo title = {original_title} overview={overview}/>
       <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer