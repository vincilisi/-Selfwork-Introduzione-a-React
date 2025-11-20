import { useState } from 'react'

// Compound Component per Form
function Form({ children, onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (onSubmit) {
            onSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="custom-form">
            {children}
        </form>
    )
}

// Subcomponente Input
Form.Input = function FormInput({ label, type = "text", value, onChange, placeholder, id, required = false }) {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type={type}
                id={id}
                className="form-input"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

// Subcomponente Submit
Form.Submit = function FormSubmit({ children }) {
    return (
        <button type="submit" className="form-submit-btn">
            {children}
        </button>
    )
}

export default Form
