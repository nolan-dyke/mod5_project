import React, { Component } from 'react'

export default class SignUpForm extends Component {
    state = {
        username: '',
        password: ''
    }
    
    handleChange = (event) => {
        const { name, value } = event.target 
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form className='signup-form' onSubmit={(event) => this.props.handleSignup(event, this.state)} >
                    <label>Username</label>
                    <input 
                    type='text' 
                    name='username' 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    />

                    <label>Password</label>
                    <input 
                    type='password' 
                    name='password' 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    />
                    <input type='submit' value='sign up' />
            </form>
            </div>
        )
    }
}
