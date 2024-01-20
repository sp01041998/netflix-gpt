
import { useDispatch } from "react-redux";
import { BEARER_ACCESS_TOKEN } from '../../util/const'
import axios from 'axios'
import { addTopRatedMovies } from '../../util/appStore/moviesSlice'
import { useEffect } from "react";


const useTopRatedMovies = () => {
    const dispatch = useDispatch()
  const getTopRatedMovies = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEARER_ACCESS_TOKEN}`,
    };
    const moviesData = await axios.get("https://api.themoviedb.org/3/movie/top_rated?&page=1", {headers})
    dispatch(addTopRatedMovies(moviesData?.data?.results))
  }

  useEffect(() => {
    getTopRatedMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useTopRatedMovies