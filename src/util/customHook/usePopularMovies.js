
import { useDispatch } from "react-redux";
import { BEARER_ACCESS_TOKEN } from '../../util/const'
import axios from 'axios'
import { addPopularMovies } from '../../util/appStore/moviesSlice'
import { useEffect } from "react";


const usePopularMovies = () => {
    const dispatch = useDispatch()
  const getPopularMovies = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEARER_ACCESS_TOKEN}`,
    };
    const moviesData = await axios.get("https://api.themoviedb.org/3/movie/popular?&page=1", {headers})
    dispatch(addPopularMovies(moviesData?.data?.results))
  }

  useEffect(() => {
    getPopularMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default usePopularMovies