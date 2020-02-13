import React from 'react';
import LeftMenu from '../containers/LeftMenu/LeftMenu';
import Header from '../containers/Header/Header';
import './HomePage.scss';
import UserList from '../containers/UserList/UserList';
import UserPopUp from '../containers/UserPopUp/UserPopUp';
import { connect } from "react-redux";


const HomePage = (props) => {
    return (
        <>
        {props.popUpVisible ? <UserPopUp/> : null }
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

const mapStateToProps = state => {
    return { popUpVisible: state.popUpVisible }
};

export default connect(mapStateToProps)(HomePage);