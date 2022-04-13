import React from "react"

export default function Header() {
    return (
        <nav className="header">
            <div className="project-name">
                <img className="books-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopKi19sxALrLOZGOUSRek8GFwYbQX6MHfXQ&usqp=CAU"/>
                <h2>ReadIt</h2>
            </div>
            <div className="nav-titles">
                <h3>Home</h3>
                <h3>My Library</h3>
            </div>
        </nav>
    )
}