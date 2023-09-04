import logo from "../../assets/screenify-logo.svg";
import './style.scss'
import { HiOutlineSearch } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenu, setIsMobileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const navigate = useNavigate();

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
        <nav className={`header ${isMobileMenu ? "mobileView" : ""} ${isSearchOpen}`}>
            <div className="container">
                <div className="menu-container">
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="desktop-menu menu">
                        <li className="link">Movies</li>
                        <li className="link">TV Shows</li>
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