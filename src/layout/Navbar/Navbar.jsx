import logo from "../../assets/screenify-logo.svg";
import './style.scss'
import { HiOutlineSearch } from "react-icons/hi";
// import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="menu-container container">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="links">
                    <li className="link">Movies</li>
                    <li className="link">TV Shows</li>
                    <li className="link">
                        <HiOutlineSearch />
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar