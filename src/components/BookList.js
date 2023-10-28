import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
    return (
        <div className="container">
            <div className="row mt-2 d-flex justify-content-center book-list">
                {
                    props.book.map((book, index) => <BookCard info={book} id={book} key={index}/>)
                }
            </div>
        </div>
    )
}
export default BookList