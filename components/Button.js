import React from 'react'
import PropTypes from 'prop-types';

const Button = ({label, icon, primary, secondary, error, success, size }) => {

    const Primary = primary ? 'button-primary' : null;
    const Secondary = secondary ? 'button-secondary' : null;
    const Error = error ? 'button-error' : null;
    const Success = success ? 'button-success' : null;

    return (
        <>
          <button className={[Primary, Secondary, Error, Success, `button-${size}`].join(' ')}>
            {label}
            {icon}
          </button>  
        </>
    )
}

Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    error: PropTypes.bool,
    success: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Button
