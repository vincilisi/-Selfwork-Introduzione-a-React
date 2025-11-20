import { useState } from 'react'

function Form() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [datiInviati, setDatiInviati] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Salva i dati in un oggetto
        setDatiInviati({
            nome: nome,
            email: email
        })
    }

    return (
        <div className="form-section">
            <h2 className="form-title">Form di Registrazione</h2>

            <form onSubmit={handleSubmit} className="custom-form">
                <div className="form-group">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        className="form-input"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Inserisci il tuo nome"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Inserisci la tua email"
                        required
                    />
                </div>

                <button type="submit" className="form-submit-btn">
                    Invia
                </button>
            </form>

            {datiInviati && (
                <div className="result-card">
                    <h3 className="result-title">📋 Dati Inseriti</h3>
                    <div className="result-info">
                        <p><strong>Nome:</strong> {datiInviati.nome}</p>
                        <p><strong>Email:</strong> {datiInviati.email}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Form
