import React from 'react'

import './CustomButtonStyles.scss'

const CustomButtonComponent = ({ children, ...otherProps }) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButtonComponent
