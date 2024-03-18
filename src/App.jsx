import { useState } from "react"
import NavBar from "./components/NavBar"
import Post from "./components/Post"
import ProfileBar from "./components/ProfileBar"
import { Route, Router, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import "./index.css"
import Create from "./components/pages/Create"

const App = () => {
    return (
        <div className="h-dvh bg-white select-none">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
            <ProfileBar />
        </div>
    )
}

export default App
