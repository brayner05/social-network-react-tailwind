import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MAX_LENGTH_PREVIEW = 300

// Todo: create user class and display profile picture with username
const Post = ({ post }) => {
    return (
        <div className="w-full cursor-pointer px-6 py-3 bg-slate-0 hover:bg-slate-100 border-b border-slate-400">
            <strong className="font-semibold">{post.author}</strong>
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="my-3">{post.content}</p>
            <div className="w-full text-lg text-gray-600">
                <button className="hover:text-blue-500">
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <span className="mr-5"> &bull; {post.likes}</span>
                <button className="hover:text-red-500">
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>
                <span> &bull; {post.dislikes}</span>
            </div>
        </div>
    )
}

export default Post
