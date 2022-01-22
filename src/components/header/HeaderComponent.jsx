import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { auth } from '../../firebase/FirebaseUtil'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIconComponent from '../cart-icon/CartIconComponent'
import CartDropdownComponent from '../cart-dropdown/CartDropdownComponent'

import './HeaderStyles.scss'

const HeaderComponent = ({ currentUser, hidden }) => {
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
                <CartIconComponent />
                {/* <Link className='option' to="/shop"></Link> */}
            </div>
            {
                hidden ? null : <CartDropdownComponent />
            }
        </div>
    )
}

// state => root reducer

// const mapStateToProps = ({state}) => ({
//     currentUser: state.user.currentUser
// })

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(HeaderComponent)
