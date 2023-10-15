import logo from "../../assets/screenify-logo.svg";
import './style.scss'
import { HiOutlineSearch } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState("top");   
    const [lastScrollY, setLastScrollY] = useState(0);

    const [isMobileMenu, setIsMobileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const navigate = useNavigate();

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const openSearch = () => {
        console.log('close');
        setIsMobileOpen(false);
        setIsSearchOpen(true);
    };

    const openMobileMenu = () => {
        console.log('open');
        setIsMobileOpen(true);
        setIsSearchOpen(false)
    };
    return (
        <nav className={`header ${isMobileMenu ? "mobileView" : ""} ${show}`}>
            <div className="container">
                <div className="menu-container">
                    <div className="logo-container">
                        <Link to='/'>
                        <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="desktop-menu menu">
                        <li className="link">
                            <Link to='/explore/movie'>Movies</Link>
                        </li>
                        <li className="link">
                        <Link to='/explore/tv'>TV Shows</Link>
                        </li>
                        <li className="link">
                            <HiOutlineSearch />
                        </li>
                    </ul>
                    {/* <div className="mobile-menu menu">
                        <HiOutlineSearch />
                        {
                            isMobileMenu ? <VscChromeClose onClick={() => setIsMobileOpen(false)} /> : <SlMenu onClick={openMobileMenu} />
                        }
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar