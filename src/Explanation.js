import React from 'react'
import FirstTone from './images/first-tone.png'
import SecondTone from './images/second-tone.png'
import ThirdTone from './images/third-tone.png'
import FourthTone from './images/fourth-tone.png'

export default function Explanation() {
    return (
        <section className='explain'>
            <div className='explain-card'>
                <h2>Tone 1</h2>
                <img src={FirstTone} alt='First Tone' className='tone-image' />
                <p>High flat</p>
            </div>
            <div className='explain-card'>
                <h2>Tone 2</h2>
                <img src={SecondTone} alt='Second Tone' className='tone-image' />
                <p>Rising</p>
            </div>
            <div className='explain-card'>
                <h2>Tone 3</h2>
                <img src={ThirdTone} alt='Third Tone' className='tone-image' />
                <p>Bouncing</p>
            </div>
            <div className='explain-card'>
                <h2>Tone 4</h2>
                <img src={FourthTone} alt='Fourth Tone' className='tone-image' />
                <p>Falling</p>
            </div>
        </section>
    )
}
