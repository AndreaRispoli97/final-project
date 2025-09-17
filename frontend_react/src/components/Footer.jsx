function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Danza Classica</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident fugiat inventore, consectetur possimus expedita voluptate enim minima incidunt. Accusamus voluptatibus assumenda molestias commodi fugit culpa ex possimus reprehenderit qui debitis?</p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Corsi Principali</h5>
                        <p>
                            <a href="http://localhost:5173/corsi/1" className="text-white" style={{ textDecoration: 'none' }}>Propedeutica</a>
                        </p>
                        <p>
                            <a href="http://localhost:5173/corsi/2" className="text-white" style={{ textDecoration: 'none' }}>Danza Classica</a>
                        </p>
                        <p>
                            <a href="http://localhost:5173/corsi/3" className="text-white" style={{ textDecoration: 'none' }}>Pass de Deux</a>
                        </p>
                        <p>
                            <a href="http://localhost:5173/corsi/4" className="text-white" style={{ textDecoration: 'none' }}>Contemporaneo</a>
                        </p>
                        <p>
                            <a href="http://localhost:5173/corsi/5" className="text-white" style={{ textDecoration: 'none' }}>Moderno</a>
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Link Utili</h5>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Il tuo account</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Diventa un affiliato</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Informazioni</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Aiuto</a>
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contatti</h5>
                        <p>
                            <i className="fas fa-home mr-3"></i> Lecco, LC 23900, IT
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> AlessiaInfo@example.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 39 123 4567890
                        </p>
                        <p>
                            <i className="fas fa-print mr-3"></i> + 39 123 4567890
                        </p>
                    </div>
                </div>

                <hr className="mb-4" />
            </div>
        </footer>
    )
}

export default Footer;