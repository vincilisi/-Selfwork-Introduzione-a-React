import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">React App</Link>
                <ul className="navbar-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/posts" className="nav-link">Posts</Link></li>
                    <li><Link to="/components" className="nav-link">Componenti</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
