import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    genres: {}
}

export const homeSlicer = createSlice({
    name: 'home',
    initialState,
    reducers:{
        getApiConfiguration: (state, action) =>{
            state.url = action.payload
        },
        getGenres: (state, action) =>{
            state.genres = action.payload
        }
    }
})

export const {getApiConfiguration, getGenres} = homeSlicer.actions

export default homeSlicer.reducer