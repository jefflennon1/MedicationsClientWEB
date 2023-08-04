import { Link } from 'react-router-dom';
import './navbar.css';
import logoImage from './assets/logo.png';


export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src={logoImage} alt="Logo" className="logo-img rotate-logo" />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/imports">Imports</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}