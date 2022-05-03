import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import "../styles/info.css"
import AuthContext from "../context/AuthProvider"

export default function Info() {
    const { auth } = useContext(AuthContext)
    const [bookInfo, setBookInfo] = useState([])
    const [libShelf, setLibShelf] = useState('')
    // const [currentlyReading, setCurrentlyReading] = useState([])
    // const [alreadyRead, setAlreadyRead] = useState([])

    const params = useParams()
    // const bookDescription = bookInfo?.volumeInfo?.description
    // dangerouslySetInnerHTML={{__html: bookDescription}}

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${params.bookId}`)
        .then((res) => {
            setBookInfo(res.data)
            // let urls = res.data.items.map(book => book.id)
            // setBookInfo(urls)  
        })
    }, [])

    const handleClick = (e) => {
        axios.post(`http://localhost:3005/library`, {book_id: bookInfo.id, shelf_id: libShelf, user_id: auth.user_id})
        .then((res) => {
            alert("Book has been added to your bookshelf!")
        })
        .catch(err => console.log(err.response))
    }

    return (
        <div className="info-box">
           <h1 className="book-title">{bookInfo?.volumeInfo?.title}</h1>
           <h3 className="book-author">{bookInfo?.volumeInfo?.authors}</h3>
           <img className="book-pic" src={bookInfo?.volumeInfo?.imageLinks?.thumbnail}/>
           <div className="book-desc" >{bookInfo?.volumeInfo?.description}</div>
           <p className="book-pages">Page Count: {bookInfo?.volumeInfo?.pageCount}</p>
           <p className="book-cat">Category: {bookInfo?.volumeInfo?.categories} </p>
           <select onChange={e => setLibShelf(e.target.value)} className="select">
               <option value={"Add to Your Library"} disabled={true} selected>Add to Your Library</option>
               <option value={"wishlist"}>Want to Read</option>
                <option value={"current"}>Currently Reading</option>
                <option value={"finished"}>Finished Reading</option>
           </select>
           <button onClick={handleClick}>Add to List</button>
        </div>
    )
}