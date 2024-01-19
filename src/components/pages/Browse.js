import React from 'react'
import Header from '../section/Header'
import useNowPlayingMovies from '../../util/customHook/useNowPlayingMovies'
import MainContainer from '../organism/MainContainer'



const Browse = () => {
  useNowPlayingMovies()
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
    </div>
  )
}

export default Browse