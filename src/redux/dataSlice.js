import {createSlice} from "@reduxjs/toolkit";
import getData from "../components/getData";


const initialState = {
    loading: true,
    data: []
}
export const dataSlice = createSlice({
    name : "books",
    initialState,
    reducers:{
        getBooks:(state, action)=>{

        },
        setLoader:(state, action)=>{}
    }
})
export const { getBooks, setLoader} = dataSlice.actions

export const getAllBooks=()=>{
    return function (dispatch, action){
            getData('df')
                .then((response)=>{
                    dispatch(getBooks(response.data))
                })
                }
}
export const books = dataSlice.reducer