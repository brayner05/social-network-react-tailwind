const Profile = ({ user }) => {
    return (
        <div className="w-full h-full p-5">
            <div className="text-center py-5">
                <div className="mx-auto w-36 h-36 bg-slate-300 rounded-full"></div>
                <h1 className="font-semibold text-xl mt-5">
                    FirstName LastName
                </h1>
                <h2 className="font-medium mt-1">@username</h2>
                <button className="mt-2.5 bg-blue-500 text-white px-3 py-1 rounded-md">
                    Follow
                </button>
            </div>
            <hr />
        </div>
    )
}

export default Profile
