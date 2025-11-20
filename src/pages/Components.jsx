import { useState } from 'react'
import List from '../components/List'
import Counter from '../components/Counter'
import Form from '../components/Form'
import LoadingData from '../components/LoadingData'

function Components() {
    const nomi = ['Mario', 'Luigi', 'Peach', 'Toad', 'Yoshi', 'Bowser']
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [datiInviati, setDatiInviati] = useState(null)

    const handleSubmit = (e) => {
        setDatiInviati({
            nome: nome,
            email: email
        })
    }

    return (
        <div className="components-page">
            <div className="content-section">
                <h2 className="section-title">Lista Personaggi (Compound Component)</h2>
                <List>
                    {nomi.map((nome, index) => (
                        <List.Item key={index}>{nome}</List.Item>
                    ))}
                </List>
            </div>

            <div className="content-section">
                <Counter />
            </div>

            <div className="content-section">
                <h2 className="form-title">Form di Registrazione (Compound Component)</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Input
                        label="Nome:"
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Inserisci il tuo nome"
                        required
                    />
                    <Form.Input
                        label="Email:"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Inserisci la tua email"
                        required
                    />
                    <Form.Submit>Invia</Form.Submit>
                </Form>

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

            <div className="content-section">
                <LoadingData />
            </div>
        </div>
    )
}

export default Components
