import React from 'react';
import './UserListTable.scss';
import NothingFound from '../NothingFound/NothingFound';

const UserListTable = (props) => {
    
    const { data } = props;
    const userList = data.map(item => {
        return (
        <tr key={item.id}>
            <td>{item.email}</td>
            <td>{item.firstName} <span>{item.lastName}</span></td>
            <td><span>{item.type}</span></td>
            <td><span>{item.company}</span></td>
            <td><span>{item.country}</span></td>
            <td>{item.subscriptionDate}</td>
        </tr>
        )
    });
    const table = <table className="user-list__table">
                    <thead>
                        <tr>
                            <th>E-mail</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Company</th>
                            <th>Country</th>
                            <th>Subscription</th>
                        </tr>
                    </thead>
                    <tbody>
                        { userList }
                    </tbody>
                </table>;

    const displayContent = !data.length ? <NothingFound/> : table;
    
    return (
        <div className="table-container">
            { displayContent }
        </div>
    )
}

export default UserListTable;