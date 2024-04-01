import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => 
{
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>E-commerce</h3>
            </Link>
    
            <div className="Categories">
                <NavLink to={"/category/Consolas"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink>
                <NavLink to={"/category/Dispositivos"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Dispositivos</NavLink>
                <NavLink to={"/category/Accesorios"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                <NavLink to={"/category/Juegos"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos</NavLink>
                <NavLink to={"/category/¿Y algo más?"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>¿Y algo más?</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar