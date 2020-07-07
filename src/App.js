import React, { Component } from 'react'
import Hero from './Hero'
import FlashCard from './FlashCard'
import Explanation from './Explanation'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import data from './cedict_1.json'
import './App.css'


export default class App extends Component {
  state = {
    words: data,
    loggedIn: localStorage.getItem('token') ? true : false,
    userFlashcards: []
  }

  componentDidMount() {
    if(this.state.loggedIn) {
      fetch('http://localhost:3000/api/current_user', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(resp => resp.json())
      .then(response => {
        this.setState({userFlashcards: response.flashcards})
      })
    }
  }

  getRandomWord = (data) => {
    let randomNumber = Math.floor(Math.random() * data.length)
    return data[randomNumber]
  }

  handleLogin = (event, data) => {
    event.preventDefault() 
    fetch('http://localhost:3000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(response => {
      localStorage.setItem('token', response.token)
      this.setState({
        loggedIn: true,
        userFlashcards: response.user.flashcards
      })
    })
  }

  handleSignup = (event, data) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/users/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(response => {
      localStorage.setItem('token', response.token)
      this.setState({loggedIn: true,})
    })
  }

  handle_logout = () => {
    localStorage.removeItem('token')
    this.setState({loggedIn: false, userFlashcards: []})
  }

  render() {
    return (
      <div className='app'>
          <Hero />
          <LoginForm handleLogin={this.handleLogin} />
          <SignUpForm handleSignup={this.handleSignup} />
          <section className='main-content'>
            <Explanation />
            <section className='flash-section'>
              <FlashCard words={this.state.words} getRandomWord={this.getRandomWord} />    
            </section>
          </section>
      </div>
    )
  }
}
