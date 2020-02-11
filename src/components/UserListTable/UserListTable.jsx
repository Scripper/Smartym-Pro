import React from 'react';
import './UserListTable.scss';


const UserListTable = () => {
    return (
        <div className="table-container">
            <table className="user-list__table">
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
                    <tr>
                        <td>leffler.karelle@marcellus.net</td>
                        <td>Lewis <span>Taylor</span></td>
                        <td><span>Business</span></td>
                        <td><span>green</span></td>
                        <td><span>Korea</span></td>
                        <td>11/02/2016</td>
                    </tr>
                    <tr>
                        <td>leffler.karelle@marcellus.net</td>
                        <td>Lewis <span>Taylor</span></td>
                        <td><span>Business</span></td>
                        <td><span>green</span></td>
                        <td><span>Korea</span></td>
                        <td>11/02/2016</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserListTable;