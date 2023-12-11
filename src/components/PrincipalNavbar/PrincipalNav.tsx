import { Link } from "react-router-dom"
import "./PrincipalNav.css"


function PrincipalNav() {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/user">user</Link>
        </>
    )
}

export default PrincipalNav