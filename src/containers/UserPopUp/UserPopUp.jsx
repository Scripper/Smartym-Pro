import React, { Component } from 'react';
import './UserPopUp.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class UserPopUp extends Component {
    state = {}

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }


    
    render() {
        console.log(this.state)
        
        return(
            <div className="modal-main-container">
                <div className="modal">
                    <div className="modal-header">

                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="modal-container w50">
                                <label htmlFor="modal-email">e-mail</label>
                                <Input id="modalEmail" placeholder="leffler.karelle@marcellus.net" type="text" defaultValue='email' onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modal-fname">First name</label>
                                <Input id="modal-fname" placeholder="Lewis" type="text" defaultValue="name" onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modal-lname">Last name</label>
                                <Input id="modal-lname" placeholder="Taylor" type="text" defaultValue="Taylor" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="modal-container w50">
                                <label htmlFor="modal-country">Country</label>
                                <Input id="modal-country" placeholder="Rwanda" type="text" defaultValue="Rwanda" onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w50">
                                <label htmlFor="modal-company">Company</label>
                                <Input id="modal-company" placeholder="Company name" type="text" defaultValue="Company name" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="modal-container w25">
                                <label htmlFor="modal-type">type</label>
                                <Input id="modal-type" placeholder="Business" type="text" defaultValue="Business" onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modal-level">Level</label>
                                <Input id="modal-level" placeholder="12" type="text" defaultValue="12" onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modal-validated">Validated</label>
                                <Input id="modal-validated" placeholder="validated" type="text" defaultValue="validated" onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modal-coins">coins</label>
                                <Input id="modal-coins" placeholder="coins" type="text" defaultValue="coins" onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="modal-container footer-info">
                            <div>Subscription type - <span>99.99</span></div>
                            <div>Subscription date - <span>11/02/2016</span></div>
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
}

export default UserPopUp;