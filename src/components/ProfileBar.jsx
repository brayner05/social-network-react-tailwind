import { faHouse, faPlus, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProfileBar = () => {
    return (
        <div className="w-full bg-white border-t border-slate-400 fixed py-5 px-14 text-2xl flex justify-between align-center left-0 bottom-0">
            <button>
                <FontAwesomeIcon icon={faHouse} />
            </button>
            <button>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <button>
                <FontAwesomeIcon icon={faUser} />
            </button>
        </div>
    )
}

export default ProfileBar
