import { faBell, faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import {
    faBell as faBellSolid,
    faPaperPlane as faPaperPlaneSolid,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavBar = () => {
    return (
        <nav className="w-full p-5 flex justify-between align-center">
            <h1 className="font-bold text-xl">Social Network</h1>
            <ul className="flex justify-end align-center w-1/3 text-2xl">
                <li className="mr-8">
                    <button>
                        <FontAwesomeIcon icon={faBell} />
                    </button>
                </li>
                <li>
                    <button>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
