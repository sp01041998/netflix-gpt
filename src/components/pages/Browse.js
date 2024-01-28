import React, { useEffect, useState } from 'react'
import Header from '../section/Header'
import useNowPlayingMovies from '../../util/customHook/useNowPlayingMovies'
import MainContainer from '../organism/MainContainer'
import MovieListContainer from '../organism/MovieListContainer'
import usePopularMovies from '../../util/customHook/usePopularMovies'
import useTopRatedMovies from '../../util/customHook/useTopRatedMovies'
import useUpcomingMovies from '../../util/customHook/useUpcomingMovies'



const Browse = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=''>
         <Header customHeaderStyle = {`px-8 py-1 z-50 fixed ${isScrolled && "bg-zinc-900"}`} imageSize = "w-1/12"/>
          <MainContainer />
          <MovieListContainer/>
    </div>
  )
}

export default Browse 