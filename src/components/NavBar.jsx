import {
    faBell as faBellOutline,
    faPaperPlane as faPaperPlaneOutline,
} from "@fortawesome/free-regular-svg-icons"
import {
    faBell as faBellSolid,
    faPaperPlane as faPaperPlaneSolid,
} from "@fortawesome/free-solid-svg-icons"
import NavButton from "./NavButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavBar = () => {
    return (
        <nav className="w-full p-5 flex justify-between align-center">
            <h1 className="font-bold text-xl">Social Network</h1>
            <ul className="flex justify-end align-center w-1/3 text-2xl">
                <li className="mr-8">
                    <NavButton
                        regularIcon={faBellOutline}
                        hoverIcon={faBellSolid}
                    />
                </li>
                <li>
                    <NavButton
                        regularIcon={faPaperPlaneOutline}
                        hoverIcon={faPaperPlaneSolid}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
