import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main className="container my-5">
            <div className="row align-items-center">

                <div className="col-md-6 text-center mb-4">
                    <img
                        src="/images/Alessia-Cartoon.png"
                        className="img-fluid shadow-lg"
                        alt="Logo della scuola"
                        style={{ maxWidth: '400px', borderRadius: '30px' }}
                    />
                </div>

                <div className="col-md-6 text-center text-md-start">
                    <h1 className="display-4 fw-bold mb-3">Scuola di Danza di Alessia</h1>
                    <p className="lead text-muted">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quo obcaecati laborum libero
                        adipisci. Esse atque, error, sit dolor illo debitis dignissimos repudiandae asperiores inventore
                        ipsum alias? Numquam, voluptatum rem.
                    </p>
                </div>

            </div>
        </main>
    )
}

export default HomePage;