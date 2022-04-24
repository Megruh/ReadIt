import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <nav className="header">
            <div className="project-name">
                <img className="books-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopKi19sxALrLOZGOUSRek8GFwYbQX6MHfXQ&usqp=CAU"/>
                <h2>ReadIt</h2>
            </div>
            <div className="nav-titles">
                <Link to="/home">
                    <h3>Home</h3>
                </Link>
                <Link to="/library">
                    <h3>My Library</h3>
                </Link>
                <box-icon name='search-alt' color="#C4BBAF"></box-icon>
            </div>
        </nav>
    )
}