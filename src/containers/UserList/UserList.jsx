import React, { Component } from 'react';
import './UserList.scss';

import UserListTable from '../../components/UserListTable/UserListTable';
import Button from '../../components/Button/Button';

import { connect } from "react-redux";
import { SEARCH_USER } from "../../redux/actions/actions";



class UserList extends Component {

    render() {
        let number = this.props.searchValue + 10;
        return (
            <main className="user-list">
                <UserListTable
                    data={this.props.userList}
                />
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