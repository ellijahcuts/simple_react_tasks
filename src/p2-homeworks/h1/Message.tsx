import React from 'react'
import s from './Message.module.css'

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProps) {
    return (
        <div className={s.core}>
            <img className={s.pic} src={props.avatar} alt={"pic"}/>
            <div className={s.triangle}> </div>
            <div className={s.messageCore}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
