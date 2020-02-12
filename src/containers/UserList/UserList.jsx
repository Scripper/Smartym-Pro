import React, { Component } from 'react';
import './UserList.scss';

import UserListTable from '../../components/UserListTable/UserListTable';
import Button from '../../components/Button/Button';

import { connect } from "react-redux";
import { SEARCH_USER } from "../../redux/actions/actions";



class UserList extends Component {

    getSortData = () => {
        let initData = this.props.userList;
        let searchValue = this.props.searchValue;
        let result;
        let reg = RegExp(`${searchValue}`);
        

        if(this.props.searchValue !== undefined) {
            searchValue.toLowerCase();
            console.log(searchValue)
            result = initData.filter(item => {
                if(item.email.toLowerCase().search(reg) >= 0) {
                    return true
                }
            })
        } else {
            result = initData;
        }
        return result
        
    }

    render() {
        let number = this.props.searchValue + 10;
        const data = this.getSortData();
        return (
            <main className="user-list">
                <UserListTable
                    data={data}
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