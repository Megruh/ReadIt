import React, {useState, useEffect} from "react"
import "../../styles/genres.css"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

export default function Genres() {
    const [genreImg, setGenreImg] = useState([])
    const [genres, setGenres] =useState([])
    const params = useParams()
    
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params.genre}&maxResults=24`)
        .then((res) => {
            let urls = res.data.items.map((book, id) => book?.volumeInfo?.imageLinks?.thumbnail)
            setGenreImg(urls)
            setGenres(res.data.items)
        })
    }, [])
    return (
        <div className="genres">
            <h2>Books in this Genre:</h2>
            <div className="genre-container">
            {genres.map((book, id) => {
                let url= `/info/${book.id}`
                return <div key={id}> 
                <Link to={url}> <img src={book?.volumeInfo?.imageLinks?.thumbnail} /> </Link>  </div>
            })}
            </div>
        </div>
    )
}