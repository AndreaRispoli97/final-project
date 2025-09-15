import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailCorsi() {

    const { id } = useParams();
    const [corso, setCorso] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const endpoint = import.meta.env.VITE_API_URL;

    useEffect(() => {
        axios.get(`${endpoint}/${id}`)
            .then(response => {
                setCorso(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Errore nel caricamento dei dati: ", err);
                setIsLoading(false);
            });
    }, [id, endpoint]);

    if (isLoading) {
        return <div className="container">
            <img src="/images/IlTrioMistico.png" className="img-fluid" alt="Immagine di placeholder" />
        </div>;
    }

    return (
        <main className="container py-5">
            <div className="card shadow-lg border-0 rounded-4 mx-auto" style={{ maxWidth: '600px' }}>
                <img src={corso.image} alt="Corso" className="card-img-top rounded-top-4" />
                <div className="card-body text-center">
                    <h1 className="card-title fw-bold display-5 text-primary">
                        Corso di: {corso.name}
                    </h1>
                    <p className="card-text fs-5 text-muted">
                        {corso.description}
                    </p>
                    <p className="card-text fs-5 text-muted">Retta mensile di: {corso.price}$</p>
                </div>
            </div>

            <section className="row m-3">
                {corso.promos && corso.promos.length > 0 ? (
                    <div className="col-12">
                        <h2 className="fw-bold">Offerte</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Data Inizio</th>
                                    <th>Data Fine</th>
                                    <th>Nome Offerta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {corso.promos.map(promo => (
                                    <tr key={promo.id}>
                                        <td>{promo.offerDate}</td>
                                        <td>{promo.finishOfferDate}</td>
                                        <td>{promo.titleOffer}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="col-12">
                        <div className="alert alert-warning">
                            <h2>Nessuna Offerta per questo corso al momento</h2>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}

export default DetailCorsi;