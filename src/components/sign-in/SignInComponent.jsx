import React, { Component } from 'react'

import FormInputComponent from '../form-input/FormInputComponent'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'

import  { auth, signInWithGoogle } from '../../firebase/FirebaseUtil'

import './SignInStyles.scss'

export class SignInComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error);
        }
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>
                    I already have an account 
                </h2>
                <span className='title'> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email'
                        required 
                    />

                    <FormInputComponent 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButtonComponent type="submit"> Sign in </CustomButtonComponent>
                        <CustomButtonComponent type="button" onClick={ signInWithGoogle } isGoogleSignIn> {' '} Sign in with Google {' '} </CustomButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInComponent
