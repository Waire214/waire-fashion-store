import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/FirebaseUtil'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './HeaderStyles.scss'

const HeaderComponent = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                {/* <Link className='option' to="/shop"></Link> */}
            </div>
        </div>
    )
}

export default HeaderComponent
