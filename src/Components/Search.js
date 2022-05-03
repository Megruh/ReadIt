import React, {useState, useEffect} from "react"
import axios from "axios"
import Carousel from "./Carousel"
import "../styles/search.css"
import { useParams, Link } from "react-router-dom"

export default function Search() {
    const [search, setSearch] = useState('')
    const [bookImgs, setBookImgs] = useState([])
    const [bookList, setBookList] = useState([])
    const params = useParams()

    useEffect(() => {
        console.log(params.search)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params.searchTerm}&maxResults=25`)
        .then((res) => {
            let urls = res.data.items.map(book => book?.volumeInfo?.imageLinks?.thumbnail)
            setBookImgs(urls)
            setBookList(res.data.items)
        })
    }, [params.searchTerm])
    return(
        <div className="search-container">
             {bookList.map((book, id) => {
                 let url= `/info/${book.id}`
                return <> <Link to={url}> <img src={book?.volumeInfo?.imageLinks?.thumbnail} key={id} /> </Link></>
            })}
        </div>
    )
}