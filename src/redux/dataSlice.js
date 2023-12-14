import {createSlice} from "@reduxjs/toolkit";
import getData from "../components/getData";


const initialState = {
    loading: true,
    name: "",
    data: [],
    maxResult: 15,
    error: false
}
const API_KEY = process.env.REACT_APP_API_KEY


export const dataSlice = createSlice({
    name : "books",
    initialState,
    reducers:{
        getBooks:(state, action)=>{
             state.data = action.payload
        },
        setLoader:(state, action)=>{
            state.loading = action.payload
        },
        setError:(state, action)=>{
            state.error = action.payload
        },
        setName:(state, action)=>{
            state.name = action.payload
        },
        setMaxResult:(state, action)=>{
            state.maxResult = action.payload

        }
    }
})
export const {setMaxResult ,setName, getBooks,setError, setLoader} = dataSlice.actions

export const getAllBooks=(name, max)=>{
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=${max}&key=${API_KEY}`;
    return function (dispatch, action){
            getData(API_URL)
                .then((response)=>{
                    dispatch(setLoader(false))
                    dispatch(setError(false))
                    dispatch(getBooks(response.data))
                })
                .catch((error)=>{
                    dispatch(setLoader(false))
                    dispatch(setError(true))
                })
                }
}
export const books = dataSlice.reducer