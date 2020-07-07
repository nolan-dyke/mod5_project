import React, { Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import PropTypes from "prop-types"
const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool,
    startListening: PropTypes.func,
    recognition: PropTypes.object
  }

const options = {
    autoStart: false,
    continuous: false
  }

class FlashCard extends Component {
    state = {
        words: this.props.words,
        word: {},
        result: '',
        correct: false,
        pinyin: '',
        buttonDisabled: false
    }

    setWord = () => {
        let newWord = this.props.getRandomWord(this.state.words)
        this.setState({word: newWord})
        this.setState({correct: false})
        this.setState({pinyin: ''})
        this.setState({result: ''})
    }

    componentDidMount() {
        this.setWord()
        this.props.recognition.lang = 'zh-CN'
    }

    record = () => {
        let recognition = this.props.recognition
        this.setState({buttonDisabled: true})
        recognition.start()
        recognition.onresult = (event) => {
            // console.log(event.results[0][0].transcript)
            let voiceLength = event.results[0][0].transcript.split("")
            if (voiceLength.length > 1) {
                this.setState({result: voiceLength[0]})
                console.log(voiceLength)
                this.check(this.state.result)
            } else {
                this.setState({result: event.results[0][0].transcript})
                this.check(this.state.result)
            }
        }
        recognition.onspeechend = () => {
            recognition.stop()
            console.log('stopping')
            this.setState({buttonDisabled: false})
        }
    }

    check = (c) => {
        let match = this.state.words.find(word => word.simplified == c)
        if (match) {
            this.setState({pinyin: match.pinyin})
            let pinyinArray = match.pinyin.split("")
            let originalArray = this.state.word.pinyin.split("")
            let originalTone = originalArray[originalArray.length - 1]
            let tone = pinyinArray[pinyinArray.length - 1]
            console.log(tone)
            if (tone === originalTone){
                console.log('correct')
                this.correct()
            } else {
                console.log('false')
            }
        }
    }

    correct = () => {
        this.setState({correct: true})
        this.props.recognition.stop()
    }

    // performFetch = () => {
    //     fetch('http://localhost:3000/api/users/1')
    //     .then(resp => resp.json())
    //     .then(console.log)
    //     .then(console.log('definition array', this.state.word.definitions))
    // }
    
    render() {
        return (
            <section className={this.state.correct ? 'flashcard-correct' : 'flashcard'}>
                <p id='character'>{this.state.word.simplified}</p>
                <p>{this.state.word.pinyin}</p>
                <p>{this.state.word.definitions}</p>
                <button onClick={() => this.record()} disabled={this.state.buttonDisabled}>record</button>
                <p>{this.state.result}</p>
                <p>{this.state.pinyin}</p>
                <button onClick={() => this.setWord()}>new</button>
            </section>
        )
    }
}

FlashCard.propTypes = propTypes

export default SpeechRecognition(options)(FlashCard)


