import NavBar from "./components/NavBar"
import Post from "./components/Post"
import ProfileBar from "./components/ProfileBar"
import "./index.css"

const App = () => {
    return (
        <div className="h-screen bg-white">
            <NavBar />
            <Post
                title={"My First Post"}
                author={"b.rayn05"}
                content={
                    "Occaecat excepteur laborum amet proident reprehenderit voluptate laboris adipisicing ipsum exercitation tempor ut. Cillum do sint irure tempor exercitation cupidatat aute."
                }
            />
            <Post
                title={"My First Post"}
                author={"b.rayn05"}
                content={
                    "Occaecat excepteur laborum amet proident reprehenderit voluptate laboris adipisicing ipsum exercitation tempor ut. Cillum do sint irure tempor exercitation cupidatat aute."
                }
            />
            <Post
                title={"My First Post"}
                author={"b.rayn05"}
                content={
                    "Occaecat excepteur laborum amet proident reprehenderit voluptate laboris adipisicing ipsum exercitation tempor ut. Cillum do sint irure tempor exercitation cupidatat aute."
                }
            />
            <Post
                title={"My First Post"}
                author={"b.rayn05"}
                content={
                    "Occaecat excepteur laborum amet proident reprehenderit voluptate laboris adipisicing ipsum exercitation tempor ut. Cillum do sint irure tempor exercitation cupidatat aute."
                }
            />
            <ProfileBar />
        </div>
    )
}

export default App
