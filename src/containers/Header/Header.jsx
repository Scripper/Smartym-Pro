import React from 'react';
import TopMenu from '../../components/TopMenu/TopMenu';

import { connect } from "react-redux";
import { SEARCH_USER } from "../../redux/actions/actions";

const Header = (props) => {
    
    const getValue = (value) => {
        props.setSearchValue(value)
        
    }
    

    return (
        <TopMenu getValue={getValue}/>
    )
};

const mapStateToProps = state => {
    return { searchValue: state.searchValue }
};

const mapDispatchToProps = (dispatch) => {
    return { setSearchValue: (data) => dispatch(SEARCH_USER(data)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)