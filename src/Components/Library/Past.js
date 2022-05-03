import React, { useEffect, useState } from "react"
import axios from "axios"
import Info from "../Info"
import {Link} from "react-router-dom"

export default function Finished() {
    const [finishedList, setFinishedlist] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        // let books = []
        axios.get(`http://localhost:3005/library?shelf_id=finished`)
        .then(res => {
        //     console.log(res.data)
        //    console.log(books.length)
        setBooks(res.data)
        // console.log(wishlist)
        })
    }, [])

    useEffect(() => {
        let booksArr = []
        books.forEach( elem => {
            axios.get(`https://www.googleapis.com/books/v1/volumes/${elem.google_books_id}`)
            .then(response => {
                console.log(response.data)
                booksArr.push(response.data)
                 // setWishlist([...wishlist, response.data])
            })
        })
        console.log(booksArr.length)
        setFinishedlist(booksArr)
    }, [books])
    
    return (
        <div>
            <div>
            {finishedList.map((book, id) => {
                console.log(book)
                let url= `/info/${book.id}`
                return <div key={id}>
                <Link to={url}> <img src={book?.volumeInfo?.imageLinks?.thumbnail} /> </Link> </div>
            })}
            </div>
        </div>
    )
}