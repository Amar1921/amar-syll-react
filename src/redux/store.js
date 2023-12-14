import {configureStore} from "@reduxjs/toolkit";
import {books} from "./dataSlice";


export const store = configureStore({
    reducer :{
        books
    }
})