import React from 'react'
import Header from '../section/Header'
import useNowPlayingMovies from '../../util/customHook/useNowPlayingMovies'
import MainContainer from '../organism/MainContainer'
import MovieListContainer from '../organism/MovieListContainer'
import usePopularMovies from '../../util/customHook/usePopularMovies'
import useTopRatedMovies from '../../util/customHook/useTopRatedMovies'
import useUpcomingMovies from '../../util/customHook/useUpcomingMovies'



const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div className=''>
         <Header customHeaderStyle = "px-8 py-1 z-50 fixed" imageSize = "w-1/12"/>
          <MainContainer />
          <MovieListContainer/>
    </div>
  )
}

export default Browse 