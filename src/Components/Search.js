import React, {useState, useEffect} from "react"
import axios from "axios"
import Carousel from "./Carousel"

export default function Search() {
    const [search, setSearch] = useState('')
    const [bookImgs, setBookImgs] = useState([])
    const [bookList, setBookList] = useState([])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then((res) => {
            let urls = res.data.items.map(book => book.volumeInfo.imageLinks.thumbnail)
            setBookImgs(urls)
            setBookList(res.data.items)
        })
    }, [])
    return(
        <div>
            <Carousel bookImages={bookImgs}/>
        </div>
    )
}