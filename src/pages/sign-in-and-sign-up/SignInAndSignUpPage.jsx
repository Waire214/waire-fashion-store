import React from 'react'

import SignInComponent from '../../components/sign-in/SignInComponent'
import SignUpComponent from '../../components/sign-up/SignUpComponent'

import './SignInAndSignUpStyles.scss'

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignInComponent />
            <SignUpComponent />
        </div>
    )
}

export default SignInAndSignUpPage
