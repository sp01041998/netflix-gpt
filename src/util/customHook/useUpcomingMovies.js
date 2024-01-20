
import { useDispatch } from "react-redux";
import { BEARER_ACCESS_TOKEN } from '../../util/const'
import axios from 'axios'
import { addUpcomingMovies } from '../../util/appStore/moviesSlice'
import { useEffect } from "react";


const useUpcomingMovies = () => {
    const dispatch = useDispatch()
  const getUpComingMovies = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEARER_ACCESS_TOKEN}`,
    };
    const moviesData = await axios.get("https://api.themoviedb.org/3/movie/upcoming?&page=1", {headers})
    console.log(moviesData?.data?.results)
    dispatch(addUpcomingMovies(moviesData?.data?.results))
  }

  useEffect(() => {
    getUpComingMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useUpcomingMovies