import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../../assets/logo.png';


export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src={logoImage} alt="Logo" className="logo-img rotate-logo" />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/user">
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}