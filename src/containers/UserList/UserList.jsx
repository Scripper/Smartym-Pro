import React, { Component } from 'react';
import './UserList.scss';

import UserListTable from '../../components/UserListTable/UserListTable';
import Button from '../../components/Button/Button';

import { connect } from "react-redux";
import { SEARCH_USER } from "../../redux/actions/actions";

import fakeData from '../../data/data';

class UserList extends Component {

    render() {
        console.log(this.props)
        console.log(fakeData)
        let number = this.props.searchValue + 10
        return (
            <main className="user-list">
                <UserListTable/>
                <div className="button-table">
                    <Button value="show more" className="btn-table" onClick={() => this.props.setSearchValue(number)}/>
                </div>
            </main>
        )
    }
}


const mapStateToProps = state => {
    return { userList: state.userList, searchValue: state.searchValue }
};

const mapDispatchToProps = (dispatch) => {
    return { setSearchValue: (data) => dispatch(SEARCH_USER(data)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);