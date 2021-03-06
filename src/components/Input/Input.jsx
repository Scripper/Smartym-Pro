import React from 'react';
import './Input.scss';
//import PropTypes from 'prop-types';


const Input = ({ className, type, placeholder, onChange, id, value, defaultValue, name}) => {

    const classes = `input-base ${ className }`;

    return (
        <input type={type} className={ classes } placeholder={placeholder} onChange={onChange} id={id} value={value} defaultValue={defaultValue} name={name}/>
    )
};

Input.defaultProps = {
    className: '',
    type: 'text',
    placeholder: 'default text',
}

export default Input;