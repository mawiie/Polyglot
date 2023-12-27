import React from 'react';

export default function Header() {
    return (
        <header className='padding'>
            <div className='header--container'>
                <img className='header--logo' src='/parrot.png'  alt='Picture of a parrot representing PollyGlot Logo' />
                <section className='header--text'>
                    <h1 className = 'header--title'>PollyGlot</h1>
                    <p className = 'header--tagline'>Perfect Translation Every Time</p>
                </section>
            </div>
        </header>
    )
}