import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'
import Counter from './components/Counter'
import Form from './components/Form'

function App() {
  const nomi = ['Mario', 'Luigi', 'Peach', 'Toad', 'Yoshi', 'Bowser']

  return (
    <>
      <Navbar />
      <Header />

      <div className="content-section">
        <h2 className="section-title">Lista Personaggi</h2>
        <List nomi={nomi} />
      </div>

      <div className="content-section">
        <Counter />
      </div>

      <div className="content-section">
        <Form />
      </div>

      <div className="form-container">
        <label htmlFor="userInput" className="input-label">
          Inserisci il tuo nome:
        </label>
        <input
          type="text"
          id="userInput"
          className="custom-input"
          placeholder="Scrivi qui..."
        />
      </div>
    </>
  )
}

export default App
