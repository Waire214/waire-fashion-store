import React, { Component } from 'react'

import FormInputComponent from '../form-input/FormInputComponent'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'

import './SignInStyles.scss'

export class SignInComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
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

                    <CustomButtonComponent type="submit"> Sign in </CustomButtonComponent>
                </form>
            </div>
        )
    }
}

export default SignInComponent