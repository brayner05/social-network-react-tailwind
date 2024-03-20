import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import axios from "axios"
import { API } from "../util"

const ReactionButtons = ({ post }) => {
    const { likes, dislikes } = post
    const [postLikes, setPostLikes] = useState(likes)
    const [isLiked, setIsLiked] = useState(false)

    const toggleLike = () => {
        console.log("Clicked")
        if (isLiked) {
            setPostLikes(postLikes - 1)
            setIsLiked(false)
            return
        }
        setIsLiked(true)
        setPostLikes(postLikes + 1)
    }

    return (
        <div className="w-full text-lg text-gray-600">
            <button
                className={`hover:text-blue-500 ${
                    isLiked ? "text-blue-500" : ""
                }`}
                onClick={toggleLike}
            >
                <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <span className="mr-5"> &bull; {postLikes}</span>
            <button className="hover:text-red-500">
                <FontAwesomeIcon icon={faThumbsDown} />
            </button>
            <span> &bull; {dislikes}</span>
        </div>
    )
}

export default ReactionButtons
