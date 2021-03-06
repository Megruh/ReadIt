import React, {useState, useEffect} from "react"
import axios from "axios"
import Carousel from "./Carousel";
import "../styles/carousel.css"
const randomWords = require('random-words');

export default function Discover() {
    const [randomWord, setRandomWord] = useState(randomWords())
    const [bookList, setBookList] = useState([])
    const [bookImgs, setBookImgs] = useState([])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${randomWord}&maxResults=12`)
        .then((res) => {
            let urls = res.data.items.map(book => book?.volumeInfo?.imageLinks?.thumbnail)
            setBookImgs(urls)
            setBookList(res.data.items)
        })
    }, [])

    return (
        <div>
            <h2 className="discover-title">Discover New Titles:</h2>
            <div className="discover-box">
                <Carousel bookImages={bookList}/>
            </div>
        </div>
    )
}