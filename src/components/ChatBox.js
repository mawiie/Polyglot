import React from 'react'

export default function ChatBox({isUser, children}) {
    return (
        <div className={`chat--box ${isUser ? 'user' : 'bot'}`}>
            <p className='chat--text'>{children}</p>
        </div>
    )
}
