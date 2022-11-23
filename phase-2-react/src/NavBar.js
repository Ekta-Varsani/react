import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./User.css"

function NavBar(props) {
    return (
        <>
            <nav className="extra navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        {
                            !props.isLoggedIn? <li className="nav-item">
                            <NavLink className="nav-link" to="/">LogIn</NavLink>
                        </li>: null
                        }
                        <li className="nav-item">
                            <NavLink className="nav-link" to="country">Country</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="user">User</NavLink>
                        </li>
                        <li className="nav-item float-end">
                            <NavLink className="nav-link" to="/">Log out</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <Outlet />
        </>
    )
}

export default NavBar