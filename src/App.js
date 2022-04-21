import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from "./Components/Header"
import Landing from "./Components/Landing/Landing"
import Home from "./Components/Home/Home"
import Library from "./Components/Library/Library"
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
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
