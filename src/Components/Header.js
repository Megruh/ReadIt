import React, {useState, useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"
import "../styles/header.css"
import axios from "axios"

export default function Header(props) {
    const [search, setSearch] = useState('')
    

    let navigate = useNavigate()

    let isLoggedIn = props.isLoggedIn ? <h1>Hello World </h1>: <><Link className="header-links" to="/register">
    <h3>Register</h3>
    </Link>
<Link className="header-links" to="/login">
    <h3>Login</h3>
    </Link> </>
    const submitSearch = (e) => {
        let code = e.keyCode || e.which;
    if(code === 13) { 
        navigate(`/search/${search}`)
    } 
    }

    useEffect(() => {
        axios.get('http://localhost:3005/api/user')
        .then(res => console.log(res.data))
    }, [])

    return (
        <nav className="header">
            <div className="project-name">
            <img className="books-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpt15Pn3vIxWwwClfhFTwtcqFIPLwCSfL5qQ&usqp=CAU"color="white"/>
                <h2>ReadIt</h2>
            </div>
            <div className="nav-titles">
                {props.isLoggedIn ? <><Link className="header-links" to="/home">
                    <h3>Home</h3>
                </Link>
                <Link className="header-links" to="/library">
                    <h3>My Library</h3>
                </Link></>
                : isLoggedIn}
                <input className="search-bar" placeholder="Search Books..." onChange={e => setSearch(e.target.value)} onKeyPress={submitSearch}></input>
            </div>
        </nav>
    )
}