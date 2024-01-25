import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : 'user',
    initialState : {
        "isCardHovered" : false,
        // "likedMovies" : []
    },
    reducers : {
        addUser : (state, action) => {
            return action.payload
        },
        removeUser : (state , action) => {
            return null
        },
        isCardHoveredByUser : (state, action) => {
            state.isCardHovered = action.payload
        },
        likedMovies : (state, action) => {
            state.likedMovies = action.payload
        },
        personalMovieList : (state, action) => {
            state.personalMovieList = action.payload
        },
    }
})

export const {addUser, removeUser, isCardHoveredByUser, likedMovies, personalMovieList} = userSlice.actions
export default userSlice.reducer