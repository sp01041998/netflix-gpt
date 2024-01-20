import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : 'user',
    initialState : {
        "isCardHovered" : false
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
        }
    }
})

export const {addUser, removeUser, isCardHoveredByUser} = userSlice.actions
export default userSlice.reducer