import React, {Component} from 'react';
import './TopMenu.scss'
import search from './search.png';
import Input from '../Input/Input';


//РАЗИБТЬ НА КОМПОНЕНТЫ !!!

class TopMenu extends Component {

    state = {
        inputValue: '',
    };
    
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    render() {
        this.props.getValue(this.state.inputValue);
        return (
            <div className="top-menu">
                <div className="left-composition">
                    <div className="top-menu__button">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="user-list__info">
                        <span className="user-list__title">Users List</span>
                        <span className="user-amount">{this.props.userAmount} users</span>
                    </div>
                </div>
                <div className="middle-composition">
                    <div className="top-menu__search">
                        <div className="search-icon"><img src={search} alt=""/></div>
                        <Input className="input-header" placeholder="Search" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="right-composition">
                    <input type="button" value="TABLE FILTER"/>
                    <div className="table-filter">
                        <select name="table-filter">
                            <option value="Dale McCormick">Dale McCormick</option>
                            <option value="Dale McCormick">Dale McCormick</option>
                            <option value="Dale McCormick">Dale McCormick</option>
                            <option value="Dale McCormick">Dale McCormick</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
};

export default TopMenu;