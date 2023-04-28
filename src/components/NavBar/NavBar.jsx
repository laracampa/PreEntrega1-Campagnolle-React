import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

const NavBar = () => {
    const logo = "./img/koko.png";
    return (
        <header>
            <Logo/>
            <nav>
                <ul>
                    <li>Inicio</li>
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