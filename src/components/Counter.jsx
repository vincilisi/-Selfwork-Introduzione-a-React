import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const incrementa = () => {
        setCount(count + 1)
    }

    const decrementa = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter-container">
            <h2 className="counter-title">Counter</h2>
            <div className="counter-display">{count}</div>
            <div className="counter-buttons">
                <button className="counter-btn decrement" onClick={decrementa}>
                    -
                </button>
                <button className="counter-btn reset" onClick={reset}>
                    Reset
                </button>
                <button className="counter-btn increment" onClick={incrementa}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter
