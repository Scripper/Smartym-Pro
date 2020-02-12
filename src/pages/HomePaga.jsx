import React from 'react';
import LeftMenu from '../containers/LeftMenu/LeftMenu';
import Header from '../containers/Header/Header';
import './HomePage.scss';
import UserList from '../containers/UserList/UserList';
import UserPopUp from '../containers/UserPopUp/UserPopUp';

const HomePage = () => {
    return (
        
        <div className='page-container'>
            <UserPopUp/>
            <LeftMenu/>
            <div className="main-container">
                <Header/>
                <UserList/>
            </div>
        </div>
    )
}

export default HomePage;