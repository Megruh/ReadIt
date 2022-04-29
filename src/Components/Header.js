import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Search from "./Search"
import "../styles/header.css"

export default function Header() {
    const [search, setSearch] = useState('')
    let navigate = useNavigate()

    const submitSearch = (e) => {
        let code = e.keyCode || e.which;
    if(code === 13) { 
        navigate(`/search/${search}`)
    } 
    }

    const loggedIn = true
    return (
        <nav className="header">
            <div className="project-name">
            <img className="books-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpt15Pn3vIxWwwClfhFTwtcqFIPLwCSfL5qQ&usqp=CAU"color="white"/>
                <h2>ReadIt</h2>
            </div>
            <div className="nav-titles">
                {loggedIn ? <Link className="header-links" to="/home">
                    <h3>Home</h3>
                </Link> : <Link to="/register">
                    <h3>Register</h3>
                    </Link>}
                <Link className="header-links" to="/library">
                    <h3>My Library</h3>
                </Link>
                {/* <box-icon name='search-alt' color="#C4BBAF"></box-icon> */}
                <input className="search-bar" placeholder="Search Books..." onChange={e => setSearch(e.target.value)} onKeyPress={submitSearch}></input>
            </div>
        </nav>
    )
}