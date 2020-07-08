import React, { Component } from 'react'
import FlashCard from './FlashCard'

export default class Saves extends Component {
    render() {
        return (
            <section className='save-content'>
                {this.props.words.length > 0 ? <FlashCard removeFlashcard={this.props.removeFlashcard} allData={this.props.allData} words={this.props.words} getRandomWord={this.props.getRandomWord}/> : 
                <>
                <h1>没有</h1>
                <h1>No Saved Flashcards to Display</h1>
                </>}
            </section>
        )
    }
}
