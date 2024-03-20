import ReactionButtons from "./ReactionButtons"

const MAX_LENGTH_PREVIEW = 300

const Post = ({ post }) => {
    return (
        <div className="w-full cursor-pointer px-6 py-3 bg-slate-0 hover:bg-slate-100 border-b border-slate-400">
            <strong className="font-semibold">{post.author}</strong>
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="my-3">{post.content}</p>
            <ReactionButtons post={post} />
        </div>
    )
}

export default Post
