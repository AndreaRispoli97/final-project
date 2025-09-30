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
                        style={{ borderRadius: '30px' }}
                    />
                </div>
                <div className='col-md-6 text-center mb-4'>
                    <h1 className="display-4 fw-bold mb-3 hero-title">Scuola di Danza</h1>
                    <p className="lead text-muted hero-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut vitae optio iusto rerum cupiditate, ratione iure quasi voluptate beatae ad totam soluta nisi officia blanditiis, nemo est ut debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut vitae optio iusto rerum cupiditate, ratione iure quasi voluptate beatae ad totam soluta nisi officia blanditiis, nemo est ut debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut vitae optio iusto rerum cupiditate, ratione iure quasi voluptate beatae ad totam soluta nisi officia blanditiis, nemo est ut debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut vitae optio iusto rerum cupiditate, ratione iure quasi voluptate beatae ad totam soluta nisi officia blanditiis, nemo est ut debitis.</p>

                </div>

                <h3 className="fw-bold mb-3 hero-title">Ciao! Sono Alessia!</h3>
                <p className="lead text-muted hero-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut vitae optio iusto rerum cupiditate, ratione iure quasi voluptate beatae ad totam soluta nisi officia blanditiis, nemo est ut debitis.</p>
            </div>
        </main>
    )
}

export default HomePage;