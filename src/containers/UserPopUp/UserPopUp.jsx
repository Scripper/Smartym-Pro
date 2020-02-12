import React from 'react';
import './UserPopUp.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const UserPopUp = () => {
    return(
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">

                </div>
                <div className="modal-body">
                    <div className="container">
                        <div className="modal-container w50">
                            <label htmlFor="modal-email">e-mail</label>
                            <Input id="modal-email" placeholder="leffler.karelle@marcellus.net" type="text" value="email"/>
                        </div>
                        <div className="modal-container w25">
                            <label htmlFor="modal-fname">First name</label>
                            <Input id="modal-fname" placeholder="Lewis" type="text" value="name"/>
                        </div>
                        <div className="modal-container w25">
                            <label htmlFor="modal-lname">Last name</label>
                            <Input id="modal-lname" placeholder="Taylor" type="text" value="Taylor"/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="modal-container w50">
                            <label htmlFor="modal-country">Country</label>
                            <Input id="modal-country" placeholder="Rwanda" type="text" value="Rwanda"/>
                        </div>
                        <div className="modal-container w50">
                            <label htmlFor="modal-company">Company</label>
                            <Input id="modal-company" placeholder="Company name" type="text" value="Company name"/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="modal-container w25">
                            <label htmlFor="modal-type">type</label>
                            <Input id="modal-type" placeholder="Business" type="text" value="Business"/>
                        </div>
                        <div className="modal-container w25">
                            <label htmlFor="modal-level">Level</label>
                            <Input id="modal-level" placeholder="12" type="text" value="12"/>
                        </div>
                        <div className="modal-container w25">
                            <label htmlFor="modal-validated">Validated</label>
                            <Input id="modal-validated" placeholder="validated" type="text" value="validated"/>
                        </div>
                        <div className="modal-container w25">
                            <label htmlFor="modal-coins">coins</label>
                            <Input id="modal-coins" placeholder="coins" type="text" value="coins"/>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="modal-container footer-info">
                        <p>Subscription type - <span>99.99</span></p>
                        <p>Subscription date - <span>11/02/2016</span></p>
                    </div>
                    <div className="footer-buttons">
                        <Button className="btn-gray" value="reset password"/>
                        <Button className="btn-gray" value="revoke access"/>
                        <Button className="btn-green" value="save"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPopUp;