import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const NavButton = ({ regularIcon, hoverIcon }) => {
    const [hover, setHover] = useState(false)
    return (
        <button
            className="transition ease-in-out delay-500"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <FontAwesomeIcon icon={hover ? hoverIcon : regularIcon} />
        </button>
    )
}

export default NavButton
