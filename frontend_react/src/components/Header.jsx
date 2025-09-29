import { Link } from "react-router-dom";

function Header() {

    return (

        <header>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm navbar-custom">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src="/images/Logo.png" alt="Logo" style={{ height: '80px', marginRight: '10px', background: 'white', borderRadius: '45px' }} />
                        <span className="fw-bold" style={{ fontSize: '28px', color: '#333' }}>Scuola di Danza Classica</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{ fontSize: '24px' }}>
                                <Link className="nav-link fw-bold text-dark px-3" to="/">
                                    Homepage
                                </Link>
                            </li>
                            <li className="nav-item" style={{ fontSize: '24px' }}>
                                <Link className="nav-link fw-bold text-dark px-3" to="/corsi">
                                    Corsi Presenti
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark px-3" to={'http://localhost:8080/login'}>
                                    <i className="bi bi-person-circle" style={{ fontSize: '24px', marginRight: '5px' }}></i> Login
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