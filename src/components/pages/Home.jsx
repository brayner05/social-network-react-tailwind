import { useState } from "react"
import NavBar from "../NavBar"
import Post from "../Post"
import ProfileBar from "../ProfileBar"

const Home = () => {
    const [posts, setPosts] = useState([
        {
            id: 0,
            title: "My First Post",
            author: "b.rayn05",
            profilePicture: "",
            likes: 21,
            dislikes: 0,
            content:
                "Occaecat excepteur laborum amet proident reprehenderit voluptate laboris adipisicing ipsum exercitation tempor ut. Cillum do sint irure tempor exercitation cupidatat aute.",
        },
    ])
    return (
        <div className="h-screen bg-white select-none">
            <NavBar />
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
            <ProfileBar />
        </div>
    )
}

export default Home
