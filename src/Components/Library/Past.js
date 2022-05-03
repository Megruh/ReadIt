import React, { useEffect, useState } from "react"
import axios from "axios"
import MediaCard from "./MediaCard"

export default function Finished() {
    const [books, setBooks] = useState([])

    const updateComponent = () => {
        axios.get(`http://localhost:3005/library?shelf_id=finished`)
        .then(res => {
        setBooks(res.data)
        })
    }

    useEffect(() => {
        updateComponent()
        
    }, [])

    const deleteBook = (id) => {
        setBooks(prevState => {
            let newState = prevState.filter((book, index) => {
                return book.book_id !== id
            })
            return newState
        })
    }

    const booksMapped = books.map((book) => {
        return <MediaCard book={book} shelfId={"finished"} updateComponent={updateComponent} deleteBook={deleteBook}/>
    })
    
    return (
        <div className="library-books">
            {booksMapped}
        </div>
    )
}