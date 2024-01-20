import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieDetail: {},
    },
    reducers : {
        addNowPlayingMovies  : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload
        },
        addMovieDetail : (state, action) => {
            state.movieDetail = action.payload
        },
        removeMovieDetail : (state, action) => {
            delete state.movieDetail;
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieDetail, removeMovieDetail} = moviesSlice.actions

export default moviesSlice.reducer;