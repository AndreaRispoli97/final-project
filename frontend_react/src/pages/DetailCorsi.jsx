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
                console.log(response.data);
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
            <p>Caricamento in corso...</p>
            {/* <img src="/images/IlTrioMistico.png" className="img-fluid" alt="Immagine di placeholder" /> */}
        </div>;
    }

    return (
        <main className="container py-5">
            <div className="card shadow-lg border-0 rounded-4 mx-auto overflow-hidden custom-card" style={{ maxWidth: '650px' }}>
                <img
                    src={corso.image}
                    alt="Corso"
                    className="card-img-top"
                    style={{ maxHeight: '350px', objectFit: 'cover' }}
                />
                <div className="card-body text-center p-4">
                    <h2 className="custom-title text-pink mb-3">
                        <strong> Corso di: {corso.name}</strong>
                    </h2>
                    <p className="custom-text-muted mb-3">
                        {corso.description}
                    </p>
                    <p className="fs-5 fw-semibold">
                        Retta mensile: <span className="text-pink">{corso.price}$</span>
                    </p>
                </div>
            </div>

            <section className="row mt-5">
                <div className="col-12">
                    {corso.promos && corso.promos.length > 0 ? (
                        <div className="card custom-card p-4">
                            <h2 className="custom-title text-center text-pink mb-4">
                                Offerte disponibili
                            </h2>
                            <div className="table-responsive">
                                <table className="table custom-table mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="fw-semibold">Data Inizio</th>
                                            <th className="fw-semibold">Data Fine</th>
                                            <th className="fw-semibold">Nome Offerta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {corso.promos.map(promo => (
                                            <tr key={promo.id}>
                                                <td>{promo.offerDate}</td>
                                                <td>{promo.finishOfferDate}</td>
                                                <td className="fw-semibold text-pink">{promo.titleOffer}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="alert alert-warning custom-alert">
                            <h2 className="fw-bold text-pink mb-0">
                                Nessuna offerta disponibile
                            </h2>
                        </div>
                    )}
                </div>
            </section>
        </main>



    );
}

export default DetailCorsi;