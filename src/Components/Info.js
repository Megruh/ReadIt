import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import "../styles/info.css"

export default function Info() {
    const [bookInfo, setBookInfo] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${params.bookId}`)
        .then((res) => {
            console.log(res.data)
            setBookInfo(res.data)
            // let urls = res.data.items.map(book => book.id)
            // setBookInfo(urls)  
        })
    }, [])
    return (
        <div className="info-box">
           <h1>{bookInfo?.volumeInfo?.title}</h1>
        </div>
    )
}