import React, {useState, useEffect} from "react"
import Discover from "../Discover"
import Browse from "../Browse"
import axios from "axios"
import Carousel from "../Carousel"
import "../../styles/carousel.css"


export default function Home() {
    // const [randomWord, setRandomWord] = useState(randomWords())
    const [bookList, setBookList] = useState([])
    const [bookPics, setBookPics] = useState([])
    

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=12`)
        .then((res) => {
            console.log(res.data)
            let urls = res.data.items.map(book => book?.volumeInfo?.imageLinks?.thumbnail)
            setBookPics(urls)
            setBookList(res.data.items)
        })
    }, [])

    return (
        <div className="home-container">
            <Discover />
            <div className="recs-box">
                <Carousel bookImages={bookPics} />
            </div>
            <Browse />
        </div>
    )
}
