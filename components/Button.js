import React from 'react'
import PropTypes from 'prop-types';
import { UilPlusCircle } from '@iconscout/react-unicons'

const Button = ({label, icon, type, size }) => {

    const iconButton = icon ? <UilPlusCircle /> : null;
    // const Secondary = secondary ? 'button-secondary' : null;
    // const Error = error ? 'button-error' : null;
    // const Success = success ? 'button-success' : null;

    return (
        <>
          <button className={[`button-${type}`, `button-${size}`].join(' ')}>
            {iconButton}
            {label}
          </button>  
        </>
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    label: PropTypes.string.isRequired,
    icon: PropTypes.bool,
}

export default Button
