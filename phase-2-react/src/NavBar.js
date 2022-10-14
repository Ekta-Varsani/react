import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-light">

                <div class="container-fluid">

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Country</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="user">User</Link>
                        </li>
                        
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default NavBar