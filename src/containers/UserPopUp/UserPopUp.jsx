import React, { Component } from 'react';
import './UserPopUp.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { connect } from "react-redux";
import { MUTATE_USER } from "../../redux/actions/actions";
class UserPopUp extends Component {
    
    state = {
        vissable: true,
        userPosition: 0,
        modalEmail: '',
        modalFname: '',
        modalLname: '',
        modalCountry: '',
        modalCompany: '',
        modalType: '',
        modalLevel: '',
        modalValidated: '',
        modalCoins: '',
        modalSubType: '',
        modalSubDate: '',
    }
    
    closeModal = () => {
        this.setState({vissable: false});
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    getUserData = () => {
        const id = this.props.popUpDataId;
        const user = this.props.userList.find((item, index) => {
            this.setState({userPosition: index})
            return item.id === id;
        })
        this.setState({
            modalEmail: user.email,
            modalFname: user.firstName,
            modalLname: user.lastName,
            modalCountry: user.country,
            modalCompany: user.company,
            modalType: user.type,
            modalLevel: user.level,
            modalValidated: user.validated,
            modalCoins: user.coins,
            modalSubType: user.subcriptionType,
            modalSubDate: user.subscriptionDate,
        })
    }

    componentDidMount() {
        this.getUserData();
    }


    render() {
        if(!this.state.vissable) {
            return null
        }
        console.log(this.state)
        const validated = this.state.modalValidated ? 'YES' : "NO";
        return(
            <div className="modal-main-container">
                <div className="modal">
                    <div className="modal-header">
                        <div className="user-info">
                            <div className="user-name">{this.state.modalFname} {this.state.modalLname}</div>
                            <div className="user-id">unique ID - {this.props.popUpDataId}</div>
                        </div>
                        <div className="btn-close" onClick={this.closeModal}></div>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="modal-container w50">
                                <label htmlFor="modalEmail">E-mail</label>
                                <Input className="input-modal" id="modalEmail" placeholder="Email" type="text" value={this.state.modalEmail} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalFname">First name</label>
                                <Input className="input-modal" id="modalFname" placeholder="First Name" type="text" value={this.state.modalFname} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalLname">Last name</label>
                                <Input className="input-modal" id="modalLname" placeholder="Last name" type="text" value={this.state.modalLname} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="modal-container w50">
                                <label htmlFor="modalCountry">Country</label>
                                <Input className="input-modal" id="modalCountry" placeholder="Country" type="text" value={this.state.modalCountry} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w50">
                                <label htmlFor="modalCompany">Company</label>
                                <Input className="input-modal" id="modalCompany" placeholder="Company" type="text" value={this.state.modalCompany} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="modal-container w25">
                                <label htmlFor="modalType">Type</label>
                                <Input className="input-modal" id="modalType" placeholder="Type" type="text" value={this.state.modalType} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalLevel">Level</label>
                                <Input className="input-modal" id="modalLevel" placeholder="Level" type="number" value={this.state.modalLevel} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalValidated">Validated</label>
                                <Input className="input-modal" id="modalValidated" placeholder="yes/no" type="text" value={validated} onChange={this.handleChange}/>
                            </div>
                            <div className="modal-container w25">
                                <label htmlFor="modalCoins">Coins</label>
                                <Input className="input-modal" id="modalCoins" placeholder="Coins" type="text" value={this.state.modalCoins} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="modal-container footer-info">
                            <div>Subscription type - <span>{this.state.modalSubType}</span></div>
                            <div>Subscription date - <span>{this.state.modalSubDate}</span></div>
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


const mapStateToProps = state => {
    return { userList: state.userList, popUpVisible: state.popUpVisible, popUpDataId: state.popUpDataId }
};

const mapDispatchToProps = (dispatch) => {
    return { setNewData: (data) => dispatch(MUTATE_USER(data)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUp);