import './App.css'

function App() {
  return (
    <>
      <h1 className="main-title">Benvenuto in React con Vite!</h1>

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
