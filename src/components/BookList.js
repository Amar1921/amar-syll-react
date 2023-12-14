import React, {useState} from "react";
import BookCard from "./BookCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllBooks} from "../redux/dataSlice";

const BookList = () => {

    const books = useSelector((state)=>state.books)
    // console.log()
    const listBooks = books.data.items
    const dispatch = useDispatch()
    if ( !books.loading && !books.error){

    }
    return (
        <div className="container">
            <div className="row mt-2 d-flex justify-content-center book-list">
                {
                    listBooks && listBooks.map((book, index) => <BookCard info={book} id={book} key={index}/>)
                }
            </div>
        </div>
    )
}
export default BookList