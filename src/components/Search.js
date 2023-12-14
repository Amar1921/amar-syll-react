import React, {useEffect, useState} from "react"
import axios from 'axios'
import BookList from "./BookList"
import {Spinner} from "reactstrap";
import Footer from "./footer";
import {useDispatch} from "react-redux";
import {getAllBooks, setMaxResult, setName} from "../redux/dataSlice";
import bookList from "./BookList";
import {TextField} from "@mui/material";

//require('dotenv').config();
const Search = () => {


  const dispatch = useDispatch()


    /*************RESULT SEARCH O ERROR API END**********/

    /****************RETURN FUNCTION SEARCH**********/

    return (
        <div className="container-fluid mt-2 mx-xs-0">
            <div id="background">
                <div className="row">
                    <div className="col-12 text-white d-flex justify-content-center mt-3">
                        <h1 className=" mt-1 col-xs-5 rounded"><span id="titre" className="bg-dark px-1">Book Finder <i
                            className="fa fa-book" aria-hidden="true"> </i></span></h1>
                    </div>
                </div>
                <div className="row mt-3 d-flex flex-row   justify-content-center ">
                    <div className="col-2 px-0 rounded  d-flex justify-content-center" >

                        <TextField
                            sx={{
                                background: "white"
                            }}  onChange={(e)=>{
                            dispatch(setName(e.target.value))
                            dispatch(getAllBooks(e.target.value,15))

                        }} label="Search book" variant="filled" color="success"  />
                    </div>

                </div>
                <div className="row d-flex justify-content-center ">

                    <div className="col-3 d-flex justify-content-center my-2">
                        <input  type="number" style={{width: "100px"}} id="MaxResult"
                               className="text-center mx-2 form-control " placeholder="Max Result"
                               onChange={(e)=>{
                                   dispatch(setMaxResult(e.target.value))


                               }}/>

                    </div>

                </div>


            </div>
            {/*************DISPLAYING SPINNER************/}
            <div className="row d-flex justify-content-center  ">
                <div className="col d-flex justify-content-center mt-2  " style={{height: "40px"}}>

                </div>
            </div>
            {/*************DISPLAYING SPINNER END************/}
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h2 id="errorType"></h2>
                        <h2 id="errorResult"></h2>
                        <h2 id="errorTitle"></h2>
                    </div>
                </div>
            </div>
            {/********DISPLAY RESULTS ***************/}
            <BookList  books={bookList} />
            {/********DISPLAY RESULTS END ***************/}
        {/* FOOTER   */}
            <hr/>
          <div className="row d-flex justify-content-center bg-light">
              <div className="col-sm-10">
                  <Footer/>
              </div>
          </div>
        </div>
    )
}
export default Search