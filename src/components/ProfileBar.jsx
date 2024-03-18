import { faHouse, faPlus, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const ProfileBar = () => {
    return (
        <div className="w-full bg-white border-t border-slate-400 fixed py-5 px-14 text-2xl flex justify-between align-center left-0 bottom-0">
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to="/create">
                <FontAwesomeIcon icon={faPlus} />
            </Link>
            <Link to="/profile">
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </div>
    )
}

export default ProfileBar
