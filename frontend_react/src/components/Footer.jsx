function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Nome Azienda</h5>
                        <p>Breve descrizione dell'azienda. Mission, valori, o un riassunto dei servizi offerti. Semplice e
                            concisa.</p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Servizi</h5>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Link Prodotto/Servizio 1</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Link Prodotto/Servizio 2</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Link Prodotto/Servizio 3</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Link Prodotto/Servizio 4</a>
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
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Spedizioni</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Aiuto</a>
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contatti</h5>
                        <p>
                            <i className="fas fa-home mr-3"></i> Nuova York, NY 10012, IT
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> info@example.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                        </p>
                        <p>
                            <i className="fas fa-print mr-3"></i> + 01 234 567 89
                        </p>
                    </div>
                </div>

                <hr className="mb-4" />
            </div>
        </footer>
    )
}

export default Footer;