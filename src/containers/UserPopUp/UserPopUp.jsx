import React, { Component } from 'react';
import './UserPopUp.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { connect } from "react-redux";
import { MUTATE_USER, CLOSE_MODAL } from "../../redux/actions/actions";

class UserPopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {...this.props.popUpData}
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
 
    closeModal = () => {
        this.props.closeModal()
    }

    mutateUser = () => {
        this.props.mutateUser(this.state)
    }

    render() {
        if(!this.props.popUpVisible) {
            return null
        }
        const { id, email, firstName, lastName, country, company, type, level, validated, coins, subcriptionType, subscriptionDate } = this.state

        const validatedValue = validated ? 'YES' : "NO";
        return(
            <div className="modal-main-container">
                <div className="modal">
                    <div className="modal-header">
                        <div className="user-info">
                            <div className="user-name">{firstName} {lastName}</div>
                            <div className="user-id">unique ID - {id}</div>
                        </div>
                        <div className="btn-close" onClick={this.closeModal}></div>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="modal-container w50">
                                <label htmlFor="modalEmail">E-mail</label>
                                <Input className="input-modal" id="modalEmail" placeholder="Email" name="email" type="text" value={email} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalFname">First name</label>
                                <Input className="input-modal" id="modalFname" placeholder="First Name" name="firstName" type="text" value={firstName} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalLname">Last name</label>
                                <Input className="input-modal" id="modalLname" placeholder="Last name" name="lastName" type="text" value={lastName} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="modal-container w50">
                                <label htmlFor="modalCountry">Country</label>
                                <Input className="input-modal" id="modalCountry" placeholder="Country" name="country" type="text" value={country} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w50">
                                <label htmlFor="modalCompany">Company</label>
                                <Input className="input-modal" id="modalCompany" placeholder="Company" name="company" type="text" value={company} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="modal-container w25">
                                <label htmlFor="modalType">Type</label>
                                <Input className="input-modal" id="modalType" placeholder="Type" name="type" type="text" value={type} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalLevel">Level</label>
                                <Input className="input-modal" id="modalLevel" placeholder="Level" name="level" type="number" value={level} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalValidated">Validated</label>
                                <Input className="input-modal" id="modalValidated" placeholder="yes/no" name="validated" type="text" value={validatedValue} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalCoins">Coins</label>
                                <Input className="input-modal" id="modalCoins" placeholder="Coins" name="coins" type="text" value={coins} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="modal-container footer-info">
                            <div>Subscription type - <span>{subcriptionType}</span></div>
                            <div>Subscription date - <span>{subscriptionDate}</span></div>
                        </div>
                        <div className="footer-buttons">
                            <Button className="btn-gray" value="reset password"/>
                            <Button className="btn-gray" value="revoke access"/>
                            <Button className="btn-green" value="save" onClick={this.mutateUser}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { popUpVisible: state.popUpVisible, popUpData: state.popUpData }
};

const mapDispatchToProps = (dispatch) => {
    return { closeModal: () => dispatch(CLOSE_MODAL()),
             mutateUser: (data) => dispatch(MUTATE_USER(data)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUp);