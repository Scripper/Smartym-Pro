import React from 'react';
import LeftMenu from '../containers/LeftMenu/LeftMenu';
import Header from '../containers/Header/Header';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='page-container'>
            <LeftMenu/>
            <div className="main-container">
                <Header/>
            </div>
        </div>
    )
}

export default HomePage;