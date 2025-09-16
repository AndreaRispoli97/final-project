import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Corsi() {

    const [corsi, setCorsi] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const endpoind = import.meta.env.VITE_API_URL;

    const fetchCorsi = (name) => {
        const params = name ? { name: name } : {};
        axios.get(endpoind, { params: params })
            .then(response => {
                setCorsi(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Errore nella chiamata API: ", error);
                setIsLoading(false);
            });
    };


    useEffect(() => {
        fetchCorsi('');
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchCorsi(search);
    };

    if (isLoading) {
        return <div className="container">
            <img src="/images/IlTrioMistico.png" className="img-fluid" alt="Immagine di placeholder" />
        </div>;
    }

    return (
        <main className="container my-5">
            <h1 className="corsi-title">Corsi Disponibili</h1>
            <form className="mb-4 search-box d-flex flex-column align-items-center" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Cerca Corso"
                    className="form-control"
                    style={{ width: '500px' }}
                    value={search}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="btn btn-primary mt-3 search-btn">Cerca</button>
            </form>
            <section className="row m-3">
                {corsi.length > 0 ? (
                    <div className="row">
                        {corsi.map(corso => (
                            <div className="col-md-4 mb-4" key={corso.id}>
                                <div className="card h-100 corsi-card">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-center">{corso.name}</h5>
                                        <div className="text-center my-3">
                                            <img
                                                src={corso.image ? corso.image : "/images/IlTrioMistico.png"}
                                                className="img-fluid"
                                                alt="Immagine del corso"
                                            />
                                        </div>
                                        <p className="card-text flex-grow-1">{corso.description}</p>
                                    </div>

                                    <div className="card-footer bg-white text-center">
                                        <Link to={`/corsi/${corso.id}`} className="btn btn-dettagli btn-sm">
                                            Dettagli
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted">Nessun corso disponibile...</p>
                )}
            </section>

        </main >
    );
}

export default Corsi;