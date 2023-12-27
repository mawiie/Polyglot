import React, {useState} from 'react'
import ChatBox from './ChatBox'

export default function ChatArea() {
    const [language, setLanguage] = useState('French')

    function handleClick(e) {
        setLanguage(e.target.id)
    }

    return (
    <main className='padding'>
        <div className='chat--container'>
            <ChatBox isUser={false}>Select the language you me to translate into, type your text and hit send!</ChatBox>
            <ChatBox isUser={true}>How are you?</ChatBox>
            <ChatBox isUser={false}>Comment allez-vous?</ChatBox>
            <div className='language--selector'>
                <button onClick={(e) => {handleClick(e)}} className='language--button' id='Japanese'> </button>
                <button onClick={(e) => {handleClick(e)}} className='language--button' id='French'></button>
                <button onClick={(e) => {handleClick(e)}} className='language--button' id='Spanish'></button>
            </div>
            <form className='chat--form'>
                <input className='chat--input' type='text'/>
                <button className='chat--button' type='submit'></button>
            </form>
        </div>
    </main>
    )}