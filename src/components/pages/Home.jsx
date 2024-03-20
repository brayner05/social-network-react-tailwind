import { useEffect, useRef, useState } from "react"
import axios from "axios"
import NavBar from "../NavBar"
import Post from "../Post"
import { API } from "../../util"

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios
            .get(API + "/posts")
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <NavBar />
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Home
