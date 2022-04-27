import React from "react"
import Genres from "./Genres/Genres"
import {Link} from "react-router-dom"

export default function Browse() {
    const genres = ["ammish fiction", "art", "biography", "business", "children's", "christian", "classics", "comics", "contemporary",
"cookbooks", "crime", "ebooks", "fantasy", "fiction", "gay and lesbian", "graphic novels", "historical fiction", "history", "horror", "humor and comedy", "memoir", "music", "mystery", "nonfiction", "poetry", "psychology", "romance", "science", "science fiction", "self help", "sports", "suspence", "thriller", "travel", "young adult"]
    return (
        <div className="browse-box">
            {genres.map((genre) => {
                return <Link to={"/genre/"+ genre}>{genre}</Link>
            })}
        </div>
    )
}