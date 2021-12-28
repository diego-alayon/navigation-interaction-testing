import React from 'react'
import PropTypes from 'prop-types';

const Button = ({label, icon, type, size }) => {

    // const Primary = primary ? 'button-primary' : null;
    // const Secondary = secondary ? 'button-secondary' : null;
    // const Error = error ? 'button-error' : null;
    // const Success = success ? 'button-success' : null;

    return (
        <>
          <button className={[`button-${type}`, `button-${size}`].join(' ')}>
            {label}
            {icon}
          </button>  
        </>
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    label: PropTypes.string.isRequired,
}

export default Button
