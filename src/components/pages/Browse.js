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
        <Header customHeaderStyle = "bg-gradient-to-b from-black px-8 py-1 z-20" imageSize = "w-1/12"/>
        {/* -- cretae mainContainer
          - movies info
          - button
          - movie trailer play
        -- create movies list by category * n
          - movie card * n */}
          <MainContainer />
          <MovieListContainer/>
    </div>
  )
}

export default Browse