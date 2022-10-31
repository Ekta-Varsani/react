import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function NavBar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        {
                            !props.isLoggedIn? <li className="nav-item">
                            <Link className="nav-link" to="/">LogIn</Link>
                        </li>: null
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to="country">Country</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="user">User</Link>
                        </li>
                        <li className="nav-item float-end">
                            <Link className="nav-link" to="/">Log out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <Outlet />
        </>
    )
}

export default NavBar