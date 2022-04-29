import React, {useState, useEffect} from "react"
import axios from "axios"
import Carousel from "./Carousel"
import "../styles/search.css"
import { useParams} from "react-router-dom"

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
    }, [])
    return(
        <div className="search-container">
             {bookImgs.map((image, id) => {
                return <img src={image} key={id} />
            })}
        </div>
    )
}