function Home() {
    return (
        <div className="home-page">
            <div className="content-section">
                <h1 className="page-title">🏠 Homepage</h1>
                <p className="welcome-text">
                    Benvenuto nella Single Page Application realizzata con React e React Router!
                </p>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>📝 Posts</h3>
                        <p>Esplora tutti i post disponibili dall'API</p>
                    </div>
                    <div className="feature-card">
                        <h3>🔍 Dettagli</h3>
                        <p>Visualizza i dettagli e commenti di ogni post</p>
                    </div>
                    <div className="feature-card">
                        <h3>🧩 Componenti</h3>
                        <p>Counter, Form, List e molto altro</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
