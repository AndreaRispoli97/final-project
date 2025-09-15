import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-light p-3" to="/">
                                    Homepage
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-light p-3" to="/corsi">
                                    Corsi Presenti
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link fw-bold text-light p-3" to="/students">
                                    Studenti
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;