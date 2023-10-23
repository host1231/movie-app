import React from "react";
import SimpleBottomNavigation from "./Navigation";
import "./Header.scss";
import LogoSvg from '../../assets/img/logo.svg';

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a className="logo">
                        <img className="logo__img" src={LogoSvg} alt="Logo" />
                    </a>
                </div>
            </div>
            <SimpleBottomNavigation />
        </header>
    )
}

export default Header;