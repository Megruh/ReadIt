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
import Search from "./Components/Search";
import Info from "./Components/Info";

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
        <Route path="/search/:searchTerm" element={<Search />}/>
        <Route path="/info" element={<Info />}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
