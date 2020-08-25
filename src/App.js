import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ProtectedRoute from './ProtectedRoute'
import Saves from './Saves'
import LoginPage from './LoginPage'
// import data from './cedict_1.json'
import data from './HSK1.json'
import './App.css'
import { Route, withRouter } from 'react-router-dom'


class App extends Component {
  state = {
    words: data,
    userFlashcards: [],
    userId: 0,
    viewFlashcards: false,
    loggedIn: localStorage.getItem('token') ? true : false,
  }

  // getRandomWord = (data) => {
  //   let randomNumber = Math.floor(Math.random() * data.length)
  //   return data[randomNumber]
  // }

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
      console.log(response)
      this.setState({
        loggedIn: true, 
        userId: response.user.id,
        userFlashcards: response.user.flashcards
      })
    })
    .then(() => this.props.history.push('/'))
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
    .then(() => this.props.history.push('/'))
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({loggedIn: false, userFlashcards: []})
  }

  addFlashcard = (fc) => {
    if(!this.state.userFlashcards.find(card => card === fc)){
      let cards = [...this.state.userFlashcards, fc]
      let newCardObject = {
        "traditional": fc.traditional,
		    "simplified": fc.simplified,
		    "pinyin": fc.pinyin,
		    "definitions": fc.definitions,
		    "user": this.state.userId
      }
      this.setState({userFlashcards: cards})
      fetch('http://localhost:3000/api/flashcards/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(newCardObject)
    })
    .then(resp => resp.json())
    .then(response => console.log(response))
    }
  }

  removeFlashcard = (fc) => {
    let newSaves = this.state.userFlashcards.filter(card => card !== fc)
    this.setState({userFlashcards: newSaves})
    console.log('current state', this.state.userFlashcards)
    console.log('new saves', newSaves)
  }

  viewSaves = () => {
    if (this.state.viewFlashcards) {
      this.props.history.push('/')
      this.setState({viewFlashcards: !this.state.viewFlashcards})
    } else {
      this.props.history.push('/my-flashcards')
      this.setState({viewFlashcards: !this.state.viewFlashcards})
    }
  }

  render() {
    return (
      <div className='app'>
          {this.state.loggedIn ? <Navbar viewFlashcards={this.state.viewFlashcards} handleLogout={this.handleLogout} viewSaves={this.viewSaves} /> : null}
          <Hero />
          <ProtectedRoute 
          exact 
          path='/' 
          words={this.state.words}
          getRandomWord={this.getRandomWord}
          addFlashcard={this.addFlashcard}
          allData={this.state.words}
          />
          <Route exact path='/my-flashcards' render={(routerProps) => <Saves {...routerProps} words={this.state.userFlashcards} getRandomWord={this.getRandomWord} addFlashcard={this.addFlashcard} allData={this.state.words} removeFlashcard={this.removeFlashcard} />} />
          <Route exact path='/login' render={(routerProps) => <LoginPage {...routerProps} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
      </div>
    )
  }
}

export default  withRouter(App) 