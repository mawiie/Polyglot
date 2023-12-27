import React, {useState} from 'react'
import ChatBox from './ChatBox'

export default function ChatArea() {
    return (
    <main className='padding'>
        <div className='chat--container'>
            <ChatBox isUser={false}>Select the language you me to translate into, type your text and hit send!</ChatBox>
            <ChatBox isUser={true}>How are you?</ChatBox>
            <ChatBox isUser={false}>Comment allez-vous?</ChatBox>
            <div className='language--selector'>
                <button className='language--button' id='Japanese'> </button>
                <button className='language--button'id='French'></button>
                <button className='language--button'id='Spanish'></button>
            </div>
        </div>
    </main>
    )}