import { useDispatch } from "react-redux";
import { BEARER_ACCESS_TOKEN } from '../../util/const'
import axios from 'axios'
import { addMovieDetail} from '../../util/appStore/moviesSlice'
import { useEffect } from "react";


const useMovieDetail = (movieId) => {
    const dispatch = useDispatch()
  const getMovieDetail = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEARER_ACCESS_TOKEN}`,
    };
    const moviesData = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {headers})
    // console.log(moviesData?.data)
    dispatch(addMovieDetail(moviesData?.data))
  }

  useEffect(() => {
    if(!movieId) return
    getMovieDetail()
  }, [])
}

export default useMovieDetail