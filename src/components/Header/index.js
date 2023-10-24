import React from "react";
import SimpleBottomNavigation from "./Navigation";
import { Link } from 'react-router-dom';
import "./Header.scss";
import LogoSvg from '../../assets/img/logo.svg';

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo" onClick={() => window.location.reload()}>
                        <img className="logo__img" src={LogoSvg} alt="Logo" />
                    </div>
                </div>
            </div>
            <SimpleBottomNavigation />
        </header>
    )
}

export default Header;