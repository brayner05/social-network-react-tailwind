import ProfileBar from "./components/ProfileBar"
import { Route, Router, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Create from "./components/pages/Create"
import Profile from "./components/pages/Profile"
import "./index.css"

const App = () => {
    return (
        <div className="h-dvh bg-white select-none flex flex-col">
            <div className="bg-white overflow-auto select-none flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/user" element={<Profile user={null} />} />
                </Routes>
            </div>
            <ProfileBar />
        </div>
    )
}

export default App
