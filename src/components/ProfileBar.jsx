import { faPlus, faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const ProfileBar = () => {
    return (
        <div className="w-full bg-white border-t border-slate-400  py-5 px-14 text-2xl flex justify-between align-center">
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to="/create">
                <FontAwesomeIcon icon={faPlus} />
            </Link>
            <Link to="/user">
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </div>
    )
}

export default ProfileBar
