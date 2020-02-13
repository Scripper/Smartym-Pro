import React, { Component } from 'react';
import './UserList.scss';
import UserListTable from '../../components/UserListTable/UserListTable';
import Button from '../../components/Button/Button';
import { connect } from "react-redux";
import { USER_AMOUNT } from "../../redux/actions/actions";


class UserList extends Component {

    getSortData = () => {
        let initData = this.props.userList;
        let searchValue = this.props.searchValue;
        let result;
        let reg;
        
        if(this.props.searchValue !== undefined) {
            reg = RegExp(`${searchValue.toLowerCase()}`);
            result = initData.filter(item => {
                if(item.email.toLowerCase().search(reg) >= 0) {
                    return true
                }
                return false
            })
        } else {
            result = initData;
        }
        this.props.setUserAmount(result.length)
        return result
        
    }
    render() {
        const data = this.getSortData();
        return (
            <main className="user-list">
                <UserListTable
                    data={data}
                />
                <div className="button-table">
                    <Button value="show more" className="btn-table"/>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return { userList: state.userList, searchValue: state.searchValue, userAmount: state.userAmount }
};

const mapDispatchToProps = (dispatch) => {
    return { setUserAmount: (data) => dispatch(USER_AMOUNT(data)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);