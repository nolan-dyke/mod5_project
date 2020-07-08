import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default function LoginPage(props) {
    return (
        <div className='login-section'>
            <LoginForm handleLogin={props.handleLogin} />
            <SignUpForm handleSignup={props.handleSignup} />
        </div>
    )
}
