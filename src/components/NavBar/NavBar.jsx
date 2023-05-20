import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}> <Logo/> </Link>
            <nav>
                <ul>
                    <li> <NavLink to={"/"}>Inicio</NavLink></li>
                    <li>Menú</li>
                    <li>Contacto</li>
                    <li>Nosotros</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar