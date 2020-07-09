import React, { Component } from 'react'

export default class Navbar extends Component {

    render() {
        return (
        <nav>
            <button onClick={() => this.props.handleLogout()}>Log Out</button>
            <button onClick={() => this.props.viewSaves()}>{this.props.viewFlashcards ? 'Back to Practice': 'Saved Flashcards'}</button>
        </nav>
        )
    }
}

