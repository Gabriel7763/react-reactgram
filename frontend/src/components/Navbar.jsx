import './Navbar.css'

// Components
import {NavLink, Link} from 'react-router-dom'
import {
    BsSearch,
    BsHouseDoorFill,
    BsFillPersonFill,
    BsFillCameraFill
} from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav id="nav">
            <Link to="/">
                <h2>ReactGram</h2>
            </Link>
            <form id="search-form">
                <BsSearch />
                <input type="text" placeholder="Pesquisar" />
                <ul id="nav-links">
                    <li>
                        <NavLink to="/">
                            <BsHouseDoorFill />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">
                            Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">
                            Cadastrar
                        </NavLink>
                    </li>
                </ul>
            </form>
        </nav>
    )
    
}

export default Navbar