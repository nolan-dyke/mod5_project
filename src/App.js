import React, { Component } from 'react'
import Hero from './Hero'
import FlashCard from './FlashCard'
import Explanation from './Explanation'
import data from './cedict_1.json'
import './App.css'


export default class App extends Component {
  state = {
    words: data
  }

  getRandomWord = (data) => {
    let randomNumber = Math.floor(Math.random() * data.length)
    return data[randomNumber]
  }

  render() {
    return (
      <div className='app'>
          <Hero />
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
