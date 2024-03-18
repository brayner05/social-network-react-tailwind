import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MAX_LENGTH_PREVIEW = 300

// Todo: create user class and display profile picture with username
const Post = ({ author, title, content }) => {
    return (
        <div className="w-full cursor-pointer px-6 py-3 bg-slate-0 hover:bg-slate-100 border-b border-slate-400">
            <strong className="font-semibold">{author}</strong>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="my-3">{content}</p>
            <div className="w-full text-lg text-gray-600">
                <button className="mr-5 hover:text-blue-500">
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <button className="hover:text-red-500">
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>
            </div>
        </div>
    )
}

export default Post
