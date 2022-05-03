import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import "../../styles/library.css"

export default function MediaCard(props) {
    const {book} = props
    const [bookRes, setBookRes] = useState({})
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${book.google_books_id}`)
        .then(res => setBookRes(res.data))
    }, [props.deleteBook])  

    const deleteBook = (id) => {
        const {shelfId} = props
        axios.delete(`/library`, {data: {book_id: id, shelf_id: shelfId}})
        props.deleteBook(id)
    }

    let url = `/info/${book.google_books_id}`

    return (
        <div className="media-card">
           <Link to={url}> <img className="media-card-img" src={bookRes.volumeInfo?.imageLinks?.thumbnail} /> </Link>
           <div className="media-card-info">
           <p className="media-card-p">{bookRes?.volumeInfo?.title}</p>
           <p className="media-card-p">{bookRes?.volumeInfo?.authors}</p>
           <p className="media-card-p">Pages: {bookRes?.volumeInfo?.pageCount}</p>
           <button className="media-delete-btn" onClick={() => deleteBook(book.book_id)}>Delete</button>
           </div>
        </div>
    )
}