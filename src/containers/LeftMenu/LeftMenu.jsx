import React from 'react';
import Menu from '../../components/Menu/Menu';
import Logo from '../../components/Logo/Logo';
import './LeftMenu.scss';


const LeftMenu = () => {
    return(
        <div className="left-menu">
            <div className="left-menu__logo">
                <Logo />
            </div>
            <Menu />
        </div>
    )
}


export default LeftMenu;