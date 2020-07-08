import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Explanation from './Explanation'
import FlashCard from './FlashCard'

export default function ProtectedRoute(props) {
    return localStorage.token ? <Route {...props} render={(routerProps) => (
        <>
            <section className='main-content'>
                <Explanation />
                <section className='flash-section'>
                <FlashCard allData={props.allData} words={props.words} getRandomWord={props.getRandomWord}  addFlashcard={props.addFlashcard} />    
                </section>
            </section>
          </>
    )} /> : <Redirect to='/login' />
}
