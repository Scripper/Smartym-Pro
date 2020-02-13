import React from 'react';
import './Button.scss';
//import PropTypes from 'prop-types';


const Button = ({ value, onClick, className, disabled, active }) => {

    const classes = `btn ${ className } ${ active } `;

    return (
        <input type="button" className={ classes } disabled={ disabled } onClick={ onClick } value={value}/>
    )
};

Button.defaultProps = {
    className: '',
    active: '',
    disabled: '',
    value: 'default value',
    onClick: () => { console.log('press F to pay respect') },
}

export default Button;