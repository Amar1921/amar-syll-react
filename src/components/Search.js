import React, {useState} from "react"
import axios from 'axios'
import BookList from "./BookList"
import {Spinner} from "reactstrap";
import Footer from "./footer";

//require('dotenv').config();
const Search = () => {

    const [Livre, setLivre] = useState('');
    const [books, setBooks] = useState([]);
    const [maxResult, setMaxResult] = useState(15);
    const [spinner, setSpinner] = useState("");
    const [errorApi, setErrorApi] = useState("");
    const [error, setError] = useState("")
    const API_KEY = `AIzaSyC5jXdarFSUuY_-I-8rNZWHM_3bG9gcZ48`
    const Max_Results = maxResult
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${Livre}&maxResults=${Max_Results}&key=${API_KEY}`;
    // console.log(API_URL)
    const bookName = (e) => {
        setLivre(e.target.value)
    }


    /****************Function verification value input***************/
    const verifInputAndSearchBook = () => {

        if (Livre === '') {
            document.getElementById('errorTitle').innerText = 'Set Book Name'
        } else if (!(Livre === '')) {
            document.getElementById('errorTitle').innerText = ''
            searchBooks()
        }

    }
    /****************Function verification value input***************/


    /******************Define Max results******************/
    const maxResults = (result) => {
        if (isNaN(result.target.value)) {
            setTimeout(() => {
                document.getElementById('MaxResult').style.borderColor = 'red'
            }, 1000)
            setTimeout(() => {
                document.getElementById('MaxResult').style.borderColor = 'white'
            }, 3000)
            document.getElementById('errorType').innerText = 'Not a Number !!'
        }
        if (isNaN(result.target.value) === false) {
            document.getElementById('errorType').innerText = ''
        }
        if (result.target.value === '') {
            document.getElementById('errorResult').innerText = 'Set Max Results'
        }
        if (!(result.target.value === '')) {
            document.getElementById('errorResult').innerText = ''
        }
        if (result.target.value > 40 || result.target.value <= 0) {
            document.getElementById('errorResult').innerText = 'Set a number less than 40 ! '
        } else {
            document.getElementById('errorResult').innerText = '';
        }
        setMaxResult(result.target.value);

    }

    /******************Define Max results******************/

    /*************RESULT SEARCH O ERROR API***************/
    function searchBooks() {
        setErrorApi('')
        setSpinner(() => (<Spinner animation="grow" size="lg"/>))

        axios
            .get(API_URL)
            .then((response) => {
                const res = response.data.items
                console.log(res)
                setBooks([...res])
            })
            .then(() => setSpinner(""))
            .catch(err => {
                setSpinner("")
                const er = `Error network ${err}`
                console.error(er)
                setErrorApi(er)
                // console.log(er)
            })
    }

    /*************RESULT SEARCH O ERROR API END**********/
    const DisplayResult = errorApi === "" ? <BookList book={books}/> :
        <h3 className="text-center text-danger">Error Network !!</h3>
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
                <div className="row mt-3 d-flex justify-content-center ">
                    <div className="col-4 d-flex justify-content-center ">
                        <input type="text" className=" form-control m-3 text-center "
                            placeholder="Book title"    value={Livre} onChange={bookName}/>
                    </div>

                </div>
                <div className="row d-flex justify-content-center ">
                    <div className="col-3 d-flex justify-content-center my-2">
                        <button className="btn btn-light px-4" onClick={verifInputAndSearchBook} type="submit"><i
                            className="fa fa-search " aria-hidden="true"> </i></button>
                        <input type="number" style={{width: "70px"}} id="MaxResult"
                               className="text-center mx-2 form-control " placeholder="Max Result" value={maxResult}
                               onChange={maxResults}/>
                    </div>

                </div>
            </div>
            {/*************DISPLAYING SPINNER************/}
            <div className="row d-flex justify-content-center  ">
                <div className="col d-flex justify-content-center mt-2  " style={{height: "40px"}}>
                    {spinner}
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
            {DisplayResult}
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