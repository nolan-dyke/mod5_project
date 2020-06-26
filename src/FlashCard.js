import React, { Component } from 'react'

export default class FlashCard extends Component {
    state = {
        words: this.props.words,
        word: {}
    }

    setWord = () => {
        let newWord = this.props.getRandomWord(this.state.words)
        this.setState({word: newWord})
    }

    componentDidMount() {
        this.setWord()
    }
    
    render() {
        return (
            <section className='flashcard' onClick={() => this.setWord()}>
                <p id='character'>{this.state.word.simplified}</p>
                <p>{this.state.word.pinyin}</p>
                <p>{this.state.word.definitions}</p>
            </section>
        )
    }
}




