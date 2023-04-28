import './Logo.css'

const Logo = () => {
    const logo = "./img/koko.png";
    return (
        <div>
            <img className='logo' src={logo}  alt="logo de Kalani" />
        </div>
    )
}

export default Logo