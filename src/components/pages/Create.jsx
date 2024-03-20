import { useState } from "react"

const MAX_POST_LENGTH = 1000

const Create = () => {
    const [postLength, setPostLength] = useState(0)

    const isDisabled = postLength === 0
    const isMaxLength = postLength === MAX_POST_LENGTH

    return (
        <form className="p-5 h-full">
            <h2 className="text-2xl font-semibold">New Post</h2>
            <div className="w-full h-1/2 my-6">
                <textarea
                    placeholder="Start typing..."
                    name="post-content"
                    onChange={event => setPostLength(event.target.value.length)}
                    maxLength={MAX_POST_LENGTH}
                    className="px-2 py-2 w-full h-full resize-none"
                ></textarea>
                <span className={isMaxLength ? "text-red-500" : ""}>
                    {postLength} / {MAX_POST_LENGTH}
                </span>
            </div>
            <div className="w-full flex align-center justify-end">
                <button
                    type="submit"
                    disabled={isDisabled}
                    className={`text-white text-lg font-medium ${
                        isDisabled
                            ? "bg-gray-400 hover:bg-gray-300 cursor-not-allowed"
                            : "bg-blue-400 hover:bg-blue-300"
                    } px-5 py-1 rounded-md`}
                >
                    Post
                </button>
            </div>
        </form>
    )
}

export default Create
