import React from "react"
import {Link} from "react-router-dom"
import "../App.css"

export default function Browse() {
    const genres = ["AMISH FICTION", "ART", "BIOGRAPHY", "BUSINESS", "CHILDREN'S", "CHRISTIAN", "CLASSICS", "COMICS", "CONTEMPORARY",
"COOKBOOKS", "CRIME", "EBOOKS", "FANTASY", "FICTION", "GAY & LESBIAN", "GRAPHIC NOVELS", "HISTORICAL FICTION", "HISTORY", "HORROR", "HUMOR & COMEDY", "MEMOIR", "MUSIC", "MYSTERY", "NONFICTION", "POETRY", "PSYCHOLOGY", "ROMANCE", "SCIENCE", "SCIENCE FICTION", "SELF HELP", "SPORTS", "SUSPENSE", "THRILLER", "TRAVEL", "YOUNG ADULT"]
    return (
        <div>
            <h2 className="browse-title">Browse Genres:</h2>
            <div className="browse-box">
                {genres.map((genre, id) => {
                    return <Link to={"/genre/"+ genre} key={id}>{genre}</Link>
                })}
            </div>
        </div>
    )
}