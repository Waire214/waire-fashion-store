import React from 'react'

import FormInputComponent from '../form-input/FormInputComponent'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'

import { auth, createUserProfileDocument } from '../../firebase/FirebaseUtil'

import './SignUpStyles.scss'

export class SignUpComponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-ip-form' onSubmit={this.handleSubmit}>
                    <FormInputComponent
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInputComponent
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInputComponent
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInputComponent
                        type='confirmPassword'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='confirmPassword'
                        required
                    />
                    <CustomButtonComponent type='submit'>SIGN UP</CustomButtonComponent>
                </form>
            </div>
        )
    }
}

export default SignUpComponent
