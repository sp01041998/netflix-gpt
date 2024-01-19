import { useDispatch } from "react-redux";
import { BEARER_ACCESS_TOKEN } from '../../util/const'
import axios from 'axios'
import { addNowPlayingMovies } from '../../util/appStore/moviesSlice'
import { useEffect } from "react";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
  const getNowPlayingMovies = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEARER_ACCESS_TOKEN}`,
    };
    const moviesData = await axios.get("https://api.themoviedb.org/3/movie/now_playing?&page=1", {headers})
    dispatch(addNowPlayingMovies(moviesData?.data?.results))
  }

  useEffect(() => {
    getNowPlayingMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useNowPlayingMovies