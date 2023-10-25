import React from "react";
import SimpleBottomNavigation from "./Navigation";
import { Link } from 'react-router-dom';
import "./Header.scss";
import LogoSvg from '../../assets/img/logo.svg';

function Header () {
    const [value, setValue] = React.useState(0);
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link className="logo" to='/' onClick={() => setValue(0)}>
                        <img className="logo__img" src={LogoSvg} alt="Logo" />
                    </Link>
                </div>
            </div>
            <SimpleBottomNavigation value={value} setValue={setValue} />
        </header>
    )
}

export default Header;