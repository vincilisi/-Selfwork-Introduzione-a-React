import { useState } from 'react'

function LoadingData() {
    const [utenti, setUtenti] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const caricaUtenti = async () => {
        // Se ci sono già utenti, nascondili (toggle)
        if (utenti.length > 0) {
            setUtenti([])
            return
        }

        setLoading(true)
        setError(null)

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            if (!response.ok) {
                throw new Error('Errore nel caricamento dei dati')
            }

            const data = await response.json()
            setUtenti(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="loading-data-container">
            <h2 className="loading-data-title">Carica Utenti da API</h2>

            <button
                className="load-btn"
                onClick={caricaUtenti}
                disabled={loading}
            >
                {loading ? '⏳ Caricamento...' : utenti.length > 0 ? '❌ Nascondi Utenti' : '🚀 Carica Utenti'}
            </button>

            {error && (
                <div className="error-message">
                    ❌ {error}
                </div>
            )}

            {utenti.length > 0 && (
                <div className="users-list">
                    {utenti.map(utente => (
                        <div key={utente.id} className="user-card">
                            <div className="user-info">
                                <h3 className="user-name">👤 {utente.name}</h3>
                                <p className="user-email">📧 {utente.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LoadingData
