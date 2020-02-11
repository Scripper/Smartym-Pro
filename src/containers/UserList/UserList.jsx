import React from 'react';
import './UserList.scss';

import UserListTable from '../../components/UserListTable/UserListTable';
import Button from '../../components/Button/Button';


const UserList = () => {
    return (
        <main className="user-list">
            <UserListTable/>
            <div className="button-table">
                <Button value="show more" className="btn-w100"/>
            </div>
        </main>
    )
}

export default UserList;