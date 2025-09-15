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
        <main>
            <div className="m-3">
                <h1>Corsi Disponibili</h1>
                <form className="mb-3" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Cerca Corso"
                        className="form-control"
                        style={{ width: '500px' }}
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" className="btn btn-primary mt-2">Cerca</button>
                </form>
            </div>
            <section className="row m-3">
                {corsi.length > 0 ? (
                    <div className="row">
                        {corsi.map(corso => (
                            <div className="col-md-4 mb-4" key={corso.id}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{corso.name}</h5>
                                        <div className="text-center my-3">
                                            {corso.image ? (
                                                <img src={corso.image} className="img-fluid" alt="Immagine del corso" />
                                            ) : (
                                                <img src="/images/IlTrioMistico.png" className="img-fluid" alt="Immagine di placeholder" />
                                            )}
                                        </div>
                                        <p className="card-text">{corso.description}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <Link to={`/corsi/${corso.id}`} className="btn btn-primary btn-sm">Dettagli</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Nessun corso disponibile...</p>
                )}
            </section>
        </main>
    );
}

export default Corsi;