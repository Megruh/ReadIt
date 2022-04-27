import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from "./Components/Header"
import Landing from "./Components/Landing/Landing"
import Home from "./Components/Home/Home"
import Library from "./Components/Library/Library"
import Genres from "./Components/Genres/Genres"
import Register from "./Components/Landing/Register";
import Login from "./Components/Landing/Login";
import MediaCard from "./Components/Library/MediaCard"

function App() {
  return (
    <div className="App"> 
    <Router>
    <Header />
      <Routes>
        <Route path='/'  element={<Landing />}/>
        <Route path='/home'  element={<Home />}/>
        <Route path='/library'  element={<Library />}/>
        <Route path="/genre/:genre" element={<Genres />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
