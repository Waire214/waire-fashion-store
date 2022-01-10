import React from 'react'

import './CustomButtonStyles.scss'

const CustomButtonComponent = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButtonComponent
