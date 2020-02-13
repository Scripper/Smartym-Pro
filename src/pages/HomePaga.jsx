import React from 'react';
import LeftMenu from '../containers/LeftMenu/LeftMenu';
import Header from '../containers/Header/Header';
import './HomePage.scss';
import UserList from '../containers/UserList/UserList';
import UserPopUp from '../containers/UserPopUp/UserPopUp';

const HomePage = () => {
    return (
        <>
        <UserPopUp/>
        <div className='page-container'>
            <LeftMenu/>
            <div className="main-container">
                <Header/>
                <UserList/>
            </div>
        </div>
        </>
    )
}

export default HomePage;