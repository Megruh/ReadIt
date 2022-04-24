import React, {useState, useEffect} from "react"
import axios from "axios"
import Carousel from "./Carousel";
const randomWords = require('random-words');

export default function Discover() {
    const [randomWord, setRandomWord] = useState(randomWords())
    const [bookList, setBookList] = useState([])
    const [bookImgs, setBookImgs] = useState([])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${randomWord}`)
        .then((res) => {
            let urls = res.data.items.map(book => book.volumeInfo.imageLinks.thumbnail)
            setBookImgs(urls)
            setBookList(res.data.items)
        })
    }, [])

    return (
        <div className="discover-box">
            <Carousel bookImages={bookImgs}/>
        </div>
    )
}